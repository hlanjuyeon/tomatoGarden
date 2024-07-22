import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { Button } from "@mui/base";
import { Box, IconButton, Menu, MenuItem, Modal, Paper, Tooltip, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ExpenseMonthPageTab from "./ExpenseMonthPagination";
import { style } from "@mui/system";
import ExpenseList from "./ExpenseList";
import useThemeMediaQuery from "@fuse/hooks/useThemeMediaQuery";


function ExpenseHistoryTab() {

    const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down("lg"));
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

    const getExpensesForMonth = (month: string) => {
        return expenseData[month] || [];
        
    }

    useEffect(() => {
        // Initialize with the first month's expenses
        const initialMonth = Object.keys(expenseData)[0];
        setExpenses(expenseData[initialMonth]);
    }, [expenseData]);


    return ( 
        <>
            <div className="w-full min-h-full text-center">
                <ExpenseMonthPageTab expenseData={expenseData} setExpenses={setExpenses}/>
              
                <ExpenseList expenses={expenses} />
            </div>
        </>
    )
}

export default ExpenseHistoryTab;