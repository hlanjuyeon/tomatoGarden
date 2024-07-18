import { useEffect, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { DatesSetArg } from "@fullcalendar/core";
import useThemeMediaQuery from "@fuse/hooks/useThemeMediaQuery";
import ExpenseHeader from "../ExpenseHeader";
import ExpenseList from "../ExpenseList";
import { motion } from "framer-motion";

function ExpenseHistoryTab() {
  const [currentDate, SetCurrentDate] = useState<DatesSetArg>();
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down("lg"));
  const calendarRef = useRef<FullCalendar>();
  const handleDatesSet = (arg: DatesSetArg) => {
    SetCurrentDate(arg);
  };

  return (
    <>
      <ExpenseHeader currentDate={currentDate} calendarRef={calendarRef} />
      <div hidden>
        <FullCalendar
          plugins={[dayGridPlugin]}
          datesSet={handleDatesSet}
          locale="ja"
          headerToolbar={{
            center: "title",
          }}
          ref={calendarRef}
        />
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col gap-12 sm:grid-flow-row xl:grid-flow-row">
          <ExpenseList></ExpenseList>
          <ExpenseList></ExpenseList>
        </div>
        <ExpenseList></ExpenseList>
      </div>
    </>
  );
}

export default ExpenseHistoryTab;
