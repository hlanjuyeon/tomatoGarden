import { Controller, useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputAdornment from "@mui/material/InputAdornment";
import FormLabel from "@mui/material/FormLabel";
import React, { useMemo, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { Box, FormHelperText, Input } from "@mui/material";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  date: z.string().nonempty("正しい日付の形式(YYYY/MM/DD)で入力してください。"),
  cost: z.number().min(0, "金額を入力してください。"),
});

type ExpenseFormType = {
  id: number;
  type: string;
  date: string;
  cost: number;
};

const defaultValues: ExpenseFormType = {
  id: 0,
  type: "",
  date: "",
  cost: 0,
};

// type NoteFormAddListItemProps = {
// 	onListItemAdd: (noteListItem: NoteListItemType) => void;
// };

function ExpenseItemAdd() {
  const [isFocused, setIsFocused] = useState(false);

  const { control, formState, handleSubmit, reset } = useForm<ExpenseFormType>({
    mode: "onChange",
    defaultValues,
    resolver: zodResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  function onSubmit(data: ExpenseFormType) {
    // onListItemAdd(NoteListItemModel(data));
    reset(defaultValues);
  }

  const validationDate = (value) => {
    return !isFocused && value === defaultValues.date;
  };

  const validationCost = (value) => {
    return !isFocused && value === defaultValues.cost;
  };

  return (
    <div className="flex flex-col flex-auto max-w-full w-md h-screen bg-[#F2F5F9]">
      <form className="py-24 px-24 sm:px-24 overflow-y-auto h-[calc(100*var(--vh)-8rem)] z-0">
        <h1 className="text-3xl font-semibold pb-24">申請項目追加</h1>

        {/* 区分 */}
        <InputLabel className="mb-5 font-semibold">
          区分
        </InputLabel>
        <Controller
          name="type"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl
              className="mb-28 w-full"
              sx={{
                "& .MuiInputBase-root": {
                  backgroundColor: "white",
                },
              }}
            >
              <Select {...field}>
                <MenuItem value="">一般経費</MenuItem>
                <MenuItem value={"general"}>一般経費</MenuItem>
                <MenuItem value={"ticket"}>定期券購入</MenuItem>
              </Select>
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            </FormControl>
          )}
        />
        <Box></Box>

        {/* 日付 */}
        <InputLabel className="mb-5 font-semibold" required>日付</InputLabel>
        <Controller
          control={control}
          name="date"
          defaultValue=""
          render={({ field: { value, onChange } }) => (
            <DatePicker
              sx={{
                "& .MuiInputBase-root": {
                  backgroundColor: "white",
                },
              }}
              format="yyyy/MM/dd"
              value={new Date(value)}
              onChange={(val) => {
                onChange(val?.toString());
              }}
              className="mb-28 w-full"
              slotProps={{
                textField: {
                  InputLabelProps: {
                    shrink: true,
                  },
                  fullWidth: true,
                  variant: "outlined",
                  error: validationDate(value),
                  helperText: validationDate(value)
                    ? "正しい日付の形式(YYYY/MM/DD)で入力してください。"
                    : "",
                  onFocus: () => setIsFocused(true),
                  onBlur: () => setIsFocused(false),
                },
                actionBar: {
                  actions: ["clear", "today"],
                },
              }}
            />
          )}
        />

        {/* 金額 */}
        <InputLabel className="mb-5 font-semibold" required>金額</InputLabel>
        <Controller
          name="cost"
          control={control}
          render={({ field }) => (
            <TextField
              sx={{
                "& .MuiInputBase-root": {
                  backgroundColor: "white",
                },
              }}
              {...field}
              className="mb-28 w-full"
              error={validationCost(field.value)}
              helperText={
                validationCost(field.value) ? "金額を入力してください。" : ""
              }
              placeholder="0"
              variant="outlined"
              autoFocus
              hiddenLabel
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <span className="text-black">¥&nbsp;</span>
                  </InputAdornment>
                ),
                onFocus: () => setIsFocused(true),
                onBlur: () => setIsFocused(false),
              }}
            />
          )}
        />
      </form>
    </div>
  );
}

export default ExpenseItemAdd;
