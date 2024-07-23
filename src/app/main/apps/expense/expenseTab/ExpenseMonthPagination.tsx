import { DatesSetArg } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import { selectMainTheme } from "@fuse/core/FuseSettings/fuseSettingsSlice";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { Button, IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import React, { MutableRefObject, useState, useEffect } from "react";
import { useSelector } from "react-redux";

type CalendarHeaderProps = {
  calendarRef: MutableRefObject<FullCalendar | null>;
  currentDate: DatesSetArg | null;
};

function ExpenseMonthPageTab(props: CalendarHeaderProps) {
  const { calendarRef, currentDate } = props; //CurrentDate = FullCalendar selected date(Type DatesSetObject)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); //anchorE1 : Menu open selector
  const [monthIndex, setMonthIndex] = useState(0);
  const [expenses, setExpenses] = useState<string[]>([]);
  const mainTheme = useSelector(selectMainTheme);
  const calendarApi = () => calendarRef.current ? calendarRef.current.getApi() : null;

  useEffect(() => { // currentDate가 변경될 때마다 호출되어 선택된 월의 비용을 가져오는 fetchExpensesForMonth 함수를 호출
    if (currentDate) {
      const month = currentDate.start.getMonth();
      handleMonthSelect(month);
      //fetchExpensesForMonth(month);
    }
  }, [currentDate]);

  // const fetchExpensesForMonth = (month: number) => {
  //   const exampleExpenses: { [key: number]: string[] } = {
  //     0: ["January Expense 1", "January Expense 2"],
  //     1: ["February Expense 1", "February Expense 2"],
  //     2: ["March Expense 1", "March Expense 2"],
  //     // ... 기타 달의 데이터
  //   };

  //   setExpenses(exampleExpenses[month] || []);
  // };

  const open = Boolean(anchorEl);
  const monthIndexClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const monthIndexClose = () => {
    setAnchorEl(null);
  };

  const handleMonthSelect = (index: number) => {
    setMonthIndex(index);
    monthIndexClose();
  };

  return (
    <>
      {currentDate && (
        <div className="flex w-full justify-center items-center py-10">
          <div className="h-full">
            <div className="flex w-full justify-center items-center">
              <Tooltip title="Previous">
                <IconButton
                  aria-label="Previous"
                  onClick={() => calendarApi()?.prev()}
                >
                  <FuseSvgIcon size={20}>
                    {mainTheme.direction === "ltr"
                      ? "heroicons-solid:chevron-left"
                      : "heroicons-solid:chevron-right"}
                  </FuseSvgIcon>
                </IconButton>
              </Tooltip>

              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={monthIndexClick}
              >
                <h1 className="text-black text-3xl font-semibold">
                  {currentDate.view.title}
                </h1>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={monthIndexClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
                slotProps={{ //menu中のscroll bar
                  paper: {
                    style: {
                      maxHeight: 200,
                      width: '20ch',
                    },
                  },
                }}
              >
                {expenses.map((expense, index) => (
                  <MenuItem key={index} onClick={() => handleMonthSelect(index)}>
                    <h1 className="text-black text-2xl font-semibold">{expense}</h1>
                  </MenuItem>
                ))}
              </Menu>

              <Tooltip title="Next">
                <IconButton aria-label="Next" onClick={() => calendarApi()?.next()}>
                  <FuseSvgIcon size={20}>
                    {mainTheme.direction === "ltr"
                      ? "heroicons-solid:chevron-right"
                      : "heroicons-solid:chevron-left"}
                  </FuseSvgIcon>
                </IconButton>
              </Tooltip>
            </div>
            <div className="flex h-22 w-2/3 m-auto py-6 justify-center items-center rounded-lg bg-[#FF3A47] text-white text-xl font-semibold ml-30 mr-30">
              <div className="">却下</div>
            </div>
            <div className="w-2/3 text-red font-bold">※ 申請項目なし</div>
          </div>
        </div>
      )}
      {/* {expenses.length === 0 && (
        <div className="h-[calc(100*var(--vh)-10rem)] flex flex-col justify-center items-center text-[#64748b]">
          <span>表示する履歴がありません</span>
        </div>
      )} */}
    </>
  );
}

export default ExpenseMonthPageTab;
