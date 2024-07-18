import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { Button } from "@mui/base";
import { Box, IconButton, Menu, MenuItem, Modal, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import ExpenseMonthPageTab from "./ExpenseMonthPageTab";
import { style } from "@mui/system";



function ExpenseHistoryTab() {

    const [open, setOpen] = React.useState(false);
    const [employeeExpenseImage, setEmployeeExpenseImage] = useState('');

    const employeeExpenseImageOpen = (imageSrc) => {
        setEmployeeExpenseImage(imageSrc);
        setOpen(true);
    };
    const employeeExpenseImageClose = () => setOpen(false);


    return ( 
        <>
            <div className="w-full min-h-full text-center">
                <ExpenseMonthPageTab />
                {/* <ng-container *ngIf="monthList.length > 0">
                    <app-employee-expense-request-history-month-pagination
                    [monthList]="monthList"
                    [swipeDirection]="swipeDirection"
                    (monthChanges)="onMonthChanges($event)"
                    />

                    <app-employee-expense-status-box
                    [status]="currentUserExpenses?.isApproved"
                    [rejectionReason]="currentUserExpenses?.rejectionReason"
                    /> */}

                <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-4 py-6">
                    <div className="mr-5">
                        <div className="flex justify-between text-left text-[#767677] font-bold ml-8 mr-10 mt-15 mb-5">
                            <span>申請項目</span>
                            <span>￥0</span>
                            {/* <span>{{ totalCost | currency : 'JPY' : 'symbol' }}</span> */}
                        </div>
                        <div className="flex flex-col space-y-2">
                            {/* <ng-container *ngIf="currentUserExpenses?.expenseInfos">
                            <app-employee-expense-card
                            *ngFor="
                                let expenseInfo of currentUserExpenses.expenseInfos;
                                let i = index
                            "
                            [index]="i + 1"
                            [expenseInfo]="expenseInfo"
                            isHistory
                            />
                            </ng-container>
                            <ng-container
                                *ngIf="
                                !currentUserExpenses?.expenseInfos ||
                                currentUserExpenses.expenseInfos.length === 0
                                "
                            > */}
                            <div className="text-[#767677] ml-4 text-left">
                            登録された申請項目がありません。
                            </div>
                            {/* </ng-container> */}
                        </div>
                    </div>

                    <div className="ml-5">
                        <div className="text-left text-[#767677] font-bold ml-8 mt-15 md:mt-15 mb-5">
                            領収書添付
                        </div>
                        <div>
                            <Button onClick={() => employeeExpenseImageOpen("public/assets/images/apps/ecommerce/morain-lake.jpg")}>
                                <div className="rounded-2xl">
                                    <img className="rounded-2xl" src="public/assets/images/apps/ecommerce/morain-lake.jpg" alt="app-employee-expense-image" />
                                </div>
                            </Button>
                            <Modal
                                open={open}
                                onClose={employeeExpenseImageClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    maxWidth: '90vw',
                                    maxHeight: '90vh',
                                    p: 4,
                                }}>
                                    <img src={employeeExpenseImage} alt="employeeExpenseImage" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                                    
                                </Box>
                            </Modal>
                            </div>
                    </div>
                </div>
                {/* </ng-container> */}

               
            </div>
        </>
    )
}

export default ExpenseHistoryTab;