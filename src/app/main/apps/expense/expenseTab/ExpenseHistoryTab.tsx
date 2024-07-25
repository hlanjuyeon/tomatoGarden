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
    const [expenseImg, setExpenseImg] = useState([]);
    
    const expenseData = {
        "2024年4月": [
            { id: 1, date: "2024-04-30", description: "花見", amount: 300, type: "other"},
        ],
        "2024年6月": [
            { id: 2, date: "2024-06-01", description: "定期券購入", amount: 10000, type: "regularPass", regularPass: { duration: "2024/06/01 - 2024/06/30", section: "あざみ野ー渋谷" }},
            { id: 3, date: "2024-06-10", description: "ランチ", amount: 500, type: "other"}
        ],
        "2024年7月": [
            { id: 4, date: "2024-07-01", description: "定期券購入", amount: 10000, type: "regularPass", regularPass: { duration: "2024/07/01 - 2024/07/31", section: "あざみ野ー渋谷" }},
            { id: 5, date: "2024-07-03", description: "ランチ", amount: 500, type: "other" }
        ]
    };

    const expenseImgData = {
        "2024年5月": [
            { id: 1, expenseImageSrc: "public/assets/images/cards/25-640x480.jpg"},
        ],
        "2024年6月": [
            { id: 2, expenseImageSrc: "public/assets/images/apps/ecommerce/morain-lake.jpg"},
            { id: 3, expenseImageSrc: "public/assets/images/cards/coffee-shop-02-512x512.jpg"}
        ],
        "2024年7月": [
            { id: 4, expenseImageSrc: "public/assets/images/cards/25-640x480.jpg"}
        ]
    };

  
    useEffect(() => {
        if (currentDate) {
          console.log(currentDate);
    
          const key = currentDate?.view.title;
          console.log(key);
          setExpenses(expenseData[key] || []);
        }
      }, [currentDate]);
    
      const handleDatesSet = (arg: DatesSetArg) => {
        SetCurrentDate(arg);
      };;

      useEffect(() => {
        if (currentDate) {
          const key = currentDate?.view.title;
          setExpenseImg(expenseImgData[key] || []);
        }
      }, [currentDate]);



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
                <ExpenseList expenses={expenses} expenseImg={expenseImg}/>
            </div>
        </>
    )
}

export default ExpenseHistoryTab;