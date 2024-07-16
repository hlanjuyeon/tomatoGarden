import { Controller, useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputAdornment from '@mui/material/InputAdornment';
import FormLabel from '@mui/material/FormLabel';
import React, { useState } from "react";
import dayjs, { Dayjs } from 'dayjs';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { FormHelperText } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

function ExpenseItemAdd() {

    const { control } = useForm();
    const [typeError, setTypeError] = useState(false);
    const [dateError, setDateError] = useState(false);
    const [costError, setCostError] = useState(false);

    const validationRulesDate = {
        applicationDate: {
            validate: (val: Date | null) => {
                if (val == null) {
                    return '申請日を入力してください。'
                }
                if (Number.isNaN(val.getTime())) {
                    return '日付を正しく入力してください。'
                }
                return true
            },
        }
    }

    const validationRulesCost = {
        name: {
            required: '名前を入力してください。',
            minLength: { value: 4, message: '4文字以上で入力してください。' }
        }
    }

    return (
        <div className="flex flex-col flex-auto max-w-full w-md h-screen bg-[#F2F5F9]">
            <form className="py-24 px-24 sm:px-24 overflow-y-auto h-[calc(100*var(--vh)-8rem)] z-0">
                <h1 className="text-3xl font-semibold pb-24">申請項目追加</h1>

                {/* 区分 */}
                <Controller
                    name="type"
                    control={control}
                    render={({ field, fieldState }) => (
                        <FormControl className="mb-28 w-full" error={fieldState.invalid}>
                            <FormLabel className="mb-5 font-semibold">区分</FormLabel>
                            <Select
                                className="bg-white"
                                {...field}
                            >
                                <MenuItem value={1}>一般経費</MenuItem>
                                <MenuItem value={2}>定期券購入</MenuItem>

                            </Select>
                            <FormHelperText>zzzzzzzzzzzzzzzz</FormHelperText>
                        </FormControl>
                    )}
                />

                {/* 日付 */}
                <Controller
                    name="date"
                    control={control}
                    rules={validationRulesDate.applicationDate}
                    render={({ field: { onChange, value }, fieldState }) => (
                        <FormControl className="mb-8 w-full" error={fieldState.invalid}>
                            <FormLabel className="mb-5 font-semibold" required>日付</FormLabel>
                            <DatePicker
                                className='bg-white'
                                value={value ? new Date(value) : new Date()}
                                slotProps={{
                                    textField: {
                                        variant: 'outlined',
                                        required: true,
                                        InputProps: {
                                            endAdornment: (
                                                <svg viewBox="0 0 24 24" width="24px" height="24px" fill="#94a3b8" focusable="false" aria-hidden="true" class="mat-datepicker-toggle-default-icon ng-star-inserted">
                                                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z">
                                                    </path>
                                                </svg>
                                            ),
                                        },
                                    }
                                }}
                            />
                            <FormHelperText>正しい日付の形式(YYYY/MM/DD)で入力してください。</FormHelperText>
                        </FormControl>
                    )}
                />

                {/* 金額 */}
                <Controller
                    control={control}
                    name="cost"
                    rules={validationRulesCost.name}
                    render={({ field, fieldState }) => (
                        <FormControl className="mb-8 w-full" error={fieldState.invalid}>
                            <FormLabel className="mb-5 font-semibold" required>金額</FormLabel>
                            <TextField
                                {...field}
                                required
                                className="bg-white"
                                type="number"
                                placeholder="0"
                                variant="outlined"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <span className="text-black">¥&nbsp;</span>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <FormHelperText>金額を入力してください。</FormHelperText>
                        </FormControl>
                    )}
                />
            </form>
        </div >
    )
}

export default ExpenseItemAdd;