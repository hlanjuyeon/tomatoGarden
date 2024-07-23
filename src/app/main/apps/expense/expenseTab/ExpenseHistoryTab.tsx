import React, { useEffect, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import ExpenseMonthPagination from "./ExpenseMonthPagination";
import dayGridPlugin from "@fullcalendar/daygrid";
import ExpenseList from "./ExpenseList";
import useThemeMediaQuery from "@fuse/hooks/useThemeMediaQuery";
import { DatesSetArg } from "@fullcalendar/core";


function ExpenseHistoryTab() {

    const [currentDate, SetCurrentDate] = useState<DatesSetArg>();
    const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down("lg"));
    const calendarRef = useRef<FullCalendar>();

    const [expenses, setExpenses] = useState([]);
    const expenseData = {
        "2024-06": [
            { id: 1, date: "2024-06-01", description: "定期券購入", amount: 10000, type: "regularPass", regularPass: { duration: "2024/06/01 - 2024/06/30", section: "あざみ野ー渋谷" }, expenseImage: "public/assets/images/apps/ecommerce/morain-lake.jpg"},
            { id: 2, date: "2024-06-10", description: "ランチ", amount: 500, type: "other", expenseImage: "public\assets\images\apps\ecommerce\lago-di-sorapis.jpg"}
        ],
        "2024-07": [
            { id: 3, date: "2024-07-01", description: "定期券購入", amount: 10000, type: "regularPass", regularPass: { duration: "2024/07/01 - 2024/07/31", section: "あざみ野ー渋谷" },expenseImage: "public\assets\images\apps\ecommerce\fall-glow.jpg"},
            { id: 4, date: "2024-07-03", description: "ランチ", amount: 500, type: "other" }
        ]
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
      };;


    return ( 
        <>
            <div className="w-full min-h-full text-center">
                <ExpenseMonthPagination currentDate={currentDate} calendarRef={calendarRef}/>
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
                <ExpenseList expenses={expenses} />
            </div>
        </>
    )
}

export default ExpenseHistoryTab;