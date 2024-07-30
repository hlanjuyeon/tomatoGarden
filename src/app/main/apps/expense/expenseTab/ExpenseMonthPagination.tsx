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
  months: string[];
};



function ExpenseMonthPageTab(props: CalendarHeaderProps) {
  const { calendarRef, currentDate, months } = props; //CurrentDate = FullCalendar selected date(Type DatesSetObject)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); //anchorE1 : Menu open selector
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const mainTheme = useSelector(selectMainTheme);
  const calendarApi = () => calendarRef.current ? calendarRef.current.getApi() : null;

  const open = Boolean(anchorEl);

  const monthIndexClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const monthIndexClose = () => {
    setAnchorEl(null);
  };

  const handleMonthSelect = (month: string) => {
    setSelectedMonth(month);
    monthIndexClose();
    // Optionally, update the calendar view to the selected month
    const calendar = calendarApi();
    if (calendar) {
      calendar.gotoDate(`${month}-01`);
    }
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
                {months.map((month, index) => (
                  <MenuItem key={index} onClick={() => handleMonthSelect(month)}>
                    <h1 className="text-black text-2xl font-semibold">{month}</h1>
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
