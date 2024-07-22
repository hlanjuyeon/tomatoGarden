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
  const [currentMonth, setCurrentMonth] = useState("");
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down("lg"));
  const calendarRef = useRef<FullCalendar>();

  const [expenses, setExpenses] = useState([]);
  const expenseData = {
    "2024年6月": [
      {
        id: 1,
        date: "2024-06-01",
        description: "定期券購入",
        amount: 10000,
        type: "regularPass",
        regularPass: {
          duration: "2024/06/01 - 2024/06/30",
          section: "あざみ野ー渋谷",
        },
      },
      {
        id: 2,
        date: "2024-06-10",
        description: "ランチ",
        amount: 500,
        type: "other",
      },
    ],
    "2024年7月": [
      {
        id: 1,
        date: "2024-07-01",
        description: "定期券購入",
        amount: 10000,
        type: "regularPass",
        regularPass: {
          duration: "2024/07/01 - 2024/07/31",
          section: "あざみ野ー渋谷",
        },
      },
      {
        id: 2,
        date: "2024-07-03",
        description: "ランチ",
        amount: 500,
        type: "other",
      },
    ],
  };

  useEffect(() => {
    if (currentDate) {
      console.log(currentDate);
      // const { startStr } = currentDate;
      // const year = parseInt(startStr.slice(0, 4));
      // const month = parseInt(startStr.slice(5, 7)) + 1;

      // // const key = year.toString() + "0" + month.toString();
      // const key = `${year}${month < 10 ? '0' + month : month}`

      // console.log(key, "~~", typeof key);

      const key = currentDate?.view.title;
      console.log(key);
      setExpenses(expenseData[key] || []);
    }
  }, [currentDate]);

  const handleDatesSet = (arg: DatesSetArg) => {
    SetCurrentDate(arg);
  };

  return (
    <>
      <ExpenseHeader currentDate={currentDate} calendarRef={calendarRef} />
      <div hidden>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          datesSet={handleDatesSet}
          locale="ja"
          //   events={events}
          headerToolbar={{
            center: "title",
          }}
          ref={calendarRef}
        />
      </div>
      <div className="flex flex-row gap-12">
        <div className="flex flex-col gap-12 sm:grid-flow-row xl:grid-flow-row w-1/2">
          {/* <ExpenseList expenses={expense} /> */}
          <ExpenseList expenses={expenses} />
        </div>
        영수증 나오는 곳
      </div>
    </>
  );
}

export default ExpenseHistoryTab;
