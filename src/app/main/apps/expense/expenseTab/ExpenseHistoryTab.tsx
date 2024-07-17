import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { Button } from "@mui/base";
import { IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import React from "react";
import ExpenseMonthPageTab from "./ExpenseMonthPageTab";



function ExpenseHistoryTab() {


    return ( 
        <>
            <ExpenseMonthPageTab />
            <div
                className="w-full min-h-full text-center"
            >
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
                        <div
                            className="flex justify-between text-left text-[#767677] font-bold ml-8 mr-10 mt-15 mb-5"
                        >
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
                        <div className="flex flex-col space-y-2">
                               {/* <ng-container *ngIf="currentUserExpenses?.imgUrls">
                                <app-employee-expense-image-card
                                *ngFor="let imgUrl of currentUserExpenses.imgUrls"
                                [imgUrl]="imgUrl"
                                isHistory
                                />
                                </ng-container>
                                <ng-container
                                    *ngIf="
                                    !currentUserExpenses?.imgUrls ||
                                    currentUserExpenses.imgUrls.length === 0
                                    "
                                > */}
                                <img src="data:image/png;base64,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" />
                                {/* </ng-container> */}
                        </div>
                    </div>
                </div>
                {/* </ng-container> */}

                {/* <ng-container *ngIf="monthList.length === 0">
                <div
                    className="h-[calc(100*var(--vh)-10rem)] flex flex-col justify-center items-center text-[#64748b]"
                >
                    <IconsContext
                    className="scale-[3.5] mb-9"
                    svgIcon="heroicons_outline:information-circle"
                    />
                    <span> 表示する履歴がありません </span>
                </div>
                </ng-container> */}
            </div>
        </>
    )
}

export default ExpenseHistoryTab;