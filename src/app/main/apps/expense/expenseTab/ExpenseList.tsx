import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { Button } from "@mui/base";
import { Box, IconButton, Menu, MenuItem, Modal, Paper, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import ExpenseMonthPageTab from "./ExpenseMonthPagination";
import { style } from "@mui/system";

type RegularPass = {
    duration: string;
    section: string;
  };
  
  type Expense = {
    id: number;
    date: string;
    description: string;
    amount: number;
    type: string;
    regularPass?: RegularPass;
    expenseImage: string;
  };
  
  type ExpenseListProps = {
    expenses: Expense[];
  };
  

function ExpenseList({ expenses }: ExpenseListProps) {

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
                  <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-4 py-6">
                    <div className="mr-5">
                        <div className="flex justify-between text-left text-[#767677] font-bold ml-8 mr-10 mt-15 mb-5">
                            <span>申請項目</span>
                            <span>￥0</span>
                            {/* <span>{{ totalCost | currency : 'JPY' : 'symbol' }}</span> */}
                        </div>
                        <div className="flex flex-col space-y-2">
                            {expenses.length === 0 ? (
                                <Typography className="text-lg font-semibold tracking-tight leading-6">
                                登録された申請項目がありません。
                                </Typography>
                            ) : (
                                expenses.map((expense) => (
                                <Paper key={expense.id} className="relative flex flex-col flex-auto p-24 pr-12 pb-12 rounded-2xl shadow overflow-hidden">
                                    <div className="flex flex-col">
                                    <Typography className="text-lg font-semibold tracking-tight leading-6">
                                        {expense.date}
                                    </Typography>
                                    <Typography
                                        color="text.secondary"
                                        className="text-base font-semibold"
                                    >
                                        {expense.description}
                                    </Typography>
                                    {expense.type === "regularPass" && expense.regularPass && (
                                        <div className="mt-2">
                                        <Typography color="text.secondary" className="text-sm">
                                            {expense.regularPass.duration}
                                        </Typography>
                                        <Typography color="text.secondary" className="text-sm">
                                            {expense.regularPass.section}
                                        </Typography>
                                        </div>
                                    )}
                                    <Typography
                                        color="text.secondary"
                                        className="text-left font-semibold"
                                    >
                                        {expense.amount}円
                                    </Typography>
                                    </div>
                                </Paper>
                                ))
                            )}
                        </div>
                    </div>

                    <div className="ml-5">
                        <div className="text-left text-[#767677] font-bold ml-8 mt-15 md:mt-15 mb-5">
                            領収書添付
                        </div>
                        <div className="flex flex-col space-y-2">
                            {expenses.length === 0 ? (
                                <Typography className="text-lg font-semibold tracking-tight leading-6">
                                登録された領収書がありません。
                                </Typography>
                            ) : (
                                expenses.map((expense) => (
                                <Paper key={expense.id} >
                                    <Button onClick={() => employeeExpenseImageOpen(expense.expenseImage)}>
                                          <div className="rounded-2xl">
                                                <img src={expense.expenseImage} alt="Expense Image" className="rounded-2xl" />
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
                                </Paper>
                                ))
                            )}
                        </div>
                    </div>
                </div>
                {/* </ng-container> */}

               
            </div>
        </>
    )
}

export default ExpenseList;