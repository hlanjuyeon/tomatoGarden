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
import { Box, Button, FormHelperText, Input } from "@mui/material";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Divider from "@mui/material/Divider";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { isString } from "lodash";

const schema = z.object({
  date: z.string().nonempty("正しい日付の形式(YYYY/MM/DD)で入力してください。"),
  cost: z.number().min(0, "金額を入力してください。"),
});

type ExpenseFormType = {
  id: number;
  type: string;
  date: string;
  cost: number;
  ticketStartDate: string;
  ticketEndDate: string;
  route: string;
};

const defaultValues: ExpenseFormType = {
  id: 0,
  type: "",
  date: "",
  cost: 0,
  ticketStartDate: "",
  ticketEndDate: "",
  route: "",
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
    return !isFocused && (value === defaultValues.cost || isString(value));
  };

  //   const validationTicketOver = (value) => {
  //     if (validationDate(value)) {
  //         return "正しい日付の形式(YYYY/MM/DD)で入力してください。";
  //     } else if () {

  //         return "※ 既に購入済みの定期券と期間が重複しています。";
  //     }
  //   }

  const validationRoute = (value) => {
    return !isFocused && value == defaultValues.route;
  };

  return (
    <div className="flex flex-col flex-auto max-w-full w-md h-screen bg-[#F2F5F9]">
      <form className="py-24 px-24 sm:px-24 overflow-y-auto h-[calc(100*var(--vh)-8rem)] z-0">
        <h1 className="text-3xl font-semibold pb-24">申請項目追加</h1>

        {/* 区分 */}
        <InputLabel className="mb-5 font-semibold">区分</InputLabel>
        <Controller
          name="type"
          control={control}
          render={() => (
            <FormControl
              className="mb-28 w-full"
              sx={{
                "& .MuiInputBase-root": {
                  backgroundColor: "white",
                },
              }}
            >
              <Select defaultValue="general">
                <MenuItem value="general">一般経費</MenuItem>
                <MenuItem value="ticket">定期券購入</MenuItem>
              </Select>
            </FormControl>
          )}
        />

        {/* 日付 */}
        <InputLabel className="mb-5 font-semibold" required>
          日付
        </InputLabel>
        <Controller
          control={control}
          name="date"
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
                  fullWidth: true,
                  variant: "outlined",
                  error: validationDate(value),
                  helperText: validationDate(value)
                    ? "正しい日付の形式(YYYY/MM/DD)で入力してください。"
                    : "",
                  onFocus: () => setIsFocused(true),
                  onBlur: () => setIsFocused(false),
                },
              }}
            />
          )}
        />

        {/* 金額 */}
        <InputLabel className="mb-5 font-semibold" required>
          金額
        </InputLabel>
        <Controller
          name="cost"
          control={control}
          render={({ field }) => (
            <TextField
              sx={{
                "& .MuiInputBase-root": {
                  backgroundColor: "white",
                },
                "& .muiltr-1a9l67o-MuiFormControl-root-MuiTextField-root": {
                  borderImageWidth: "0px",
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
              InputProps={{
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

        <>
          <Divider className="mb-16" />

          {/* 定期券期間 */}
          {/* Start Value, End Value HOW? */}
          <InputLabel className="mb-5 font-semibold" required>
            定期券期間
          </InputLabel>
          <div className="flex">
          <Controller
            control={control}
            name="ticketStartDate"
            render={({ field: { value, onChange } }) => (
              <DatePicker
                sx={{
                  "& .MuiInputBase-root": {
                    backgroundColor: "white",
                  },
                  "& .muiltr-xudbmy-MuiInputBase-input-MuiInput-input": {
                    borderImageWidth: "0px",
                  },
                  "& p": {
                    width: "200%",
                  },
                }}
                format="yyyy/MM/dd"
                value={new Date(value)}
                onChange={(val) => {
                  onChange(val?.toString());
                }}
                className="mb-28 w-1/3"
                slotProps={{
                  textField: {
                    fullWidth: true,
                    error: validationDate(value),
                    helperText: validationDate(value)
                      ? "正しい日付の形式(YYYY/MM/DD)で入力してください。"
                      : "",
                    onFocus: () => setIsFocused(true),
                    onBlur: () => setIsFocused(false),
                  },
                }}
              />
            )}
          />
          <div className="h-30 w-40 text-center pt-16">&nbsp;&nbsp;ー&nbsp;&nbsp;</div>
          <Controller
            control={control}
            name="ticketEndDate"
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
                className="mb-28 w-1/3"
                slotProps={{
                  textField: {
                    fullWidth: true,
                    //   variant: "outlined",
                    onFocus: () => setIsFocused(true),
                    onBlur: () => setIsFocused(false),
                  },
                }}
              />
            )}
          />
          </div>

          {/* Mui-ProはLicensのkeyが必要 */}
          <Controller
            control={control}
            name="ticketDate"
            render={({ field: { value, onChange } }) => (
              <DateRangePicker
                sx={{
                  "& .MuiInputBase-root": {
                    backgroundColor: "white",
                  },
                }}
                format="yyyy/MM/dd"
                // value={new Date(value)}
                onChange={(val) => {
                  onChange(val?.toString());
                }}
                className="mb-28 w-full"
                slotProps={{
                  textField: {
                    fullWidth: true,
                    variant: "outlined",
                    error: validationDate(value),
                    helperText: validationDate(value)
                      ? "正しい日付の形式(YYYY/MM/DD)で入力してください。"
                      : "",
                    onFocus: () => setIsFocused(true),
                    onBlur: () => setIsFocused(false),
                  },
                }}
                slots={{ field: SingleInputDateRangeField }}
              />
            )}
          />

          {/* 定期券路線 */}
          <InputLabel className="mb-5 font-semibold" required>
            定期券路線
          </InputLabel>
          <Controller
            name="route"
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
                error={validationRoute(field.value)}
                helperText={
                  validationRoute(field.value)
                    ? "定期券路線を入力してください。"
                    : ""
                }
                placeholder="市ヶ尾ー渋谷"
                variant="outlined"
                InputProps={{
                  onFocus: () => setIsFocused(true),
                  onBlur: () => setIsFocused(false),
                }}
              />
            )}
          />
        </>
      </form>

      <div className="flex items-center justify-between px-24 h-84 border-t">
        <Button>キャンセル</Button>
        <Button variant="contained">Contained</Button>
      </div>
    </div>
  );
}

export default ExpenseItemAdd;
