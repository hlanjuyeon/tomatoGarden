import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { SyntheticEvent, useEffect, useState } from 'react';
import ExpenseAddTab from "./expenseTab/ExpenseAddTab";
import ExpenseHistoryTab from "./expenseTab/ExpenseHistoryTab";


function ExpenseApp() {

    const [tabValue, setTabValue] = useState(0);

    function handleTabChange(event: SyntheticEvent, value: number) {
        setTabValue(value);
    }

    return (
        <>
            <Tabs
                value={tabValue}
                onChange={handleTabChange}
                indicatorColor="secondary"
                textColor="secondary"
                classes={{ root: 'w-full mx-24 h-48 border-b-1' }}
                // sx={{height: 'calc(100 * var(--vh) - 7rem)'}}
            >
                <Tab
                    className="h-64"
                    label="申請"
                />
                <Tab
                    className="h-64"
                    label="申請履歴"
                />
            </Tabs>
            <div className="p-24 w-full h-full">
            {/* <div className="p-16 sm:p-24 w-full"> */}
                <div className={tabValue !== 0 ? 'hidden' : ''}>
                    <ExpenseAddTab />
                </div>

                <div className={tabValue !== 1 ? 'hidden' : ''}>
                    <ExpenseHistoryTab />
                </div>
            </div>
        </>
    )
}

export default ExpenseApp;
