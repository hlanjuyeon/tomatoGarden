import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { Button, IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import React, { useState } from "react";


function ExpenseMonthPageTab({ expenseData, setExpenses }) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [monthIndex, setMonthIndex ] = useState(0);


    const monthList = Object.keys(expenseData);
    
    const open = Boolean(anchorEl);
    const monthIndexClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const monthIndexClose = () => {
        setAnchorEl(null);
    };

    const shiftMonthIndex = (e) => {
        if (e === -1 && monthIndex > 0) {
            setMonthIndex(monthIndex - 1);
        } else if (e === 1 && monthIndex < monthList.length - 1) {
            setMonthIndex(monthIndex + 1);
        }
    };
    
      const handleMonthSelect = (index: number) => {
        setMonthIndex(index);
        setExpenses(expenseData[monthList[index]]);
        monthIndexClose();
      };

      return (
          <>
            <div className="flex w-full justify-center items-center py-10">
                <div className=" h-full ">
                    <div className="flex w-full justify-center items-center">
                    <Tooltip title="Previous">
                        <IconButton
                            aria-label="Previous"
                            onClick={() => shiftMonthIndex(-1)}
                            disabled={monthIndex  === 0}
                        >
                            <FuseSvgIcon size={20}>
                                heroicons-solid:chevron-left								
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
                        <h1 className="text-black text-3xl font-semibold">{monthList[monthIndex]}</h1>
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={monthIndexClose}
                        MenuListProps={{ 
                        'aria-labelledby': 'basic-button',
                        }}
                        slotProps={{
                            paper: {
                                style: {
                                    maxHeight: 200,
                                    width: '20ch', 
                                },
                            },
                          }}
                                               
                    >
                        {monthList.map((month, index) => (
                            <MenuItem key={index} onClick={() => handleMonthSelect(index)}>
                            <h1 className="text-black text-2xl font-semibold">{month}</h1>
                            </MenuItem>
                        ))}
                    </Menu>

                    <Tooltip title="Next">
                        <IconButton
                            aria-label="Next"
                            onClick={() => shiftMonthIndex(1)}
                            disabled={monthIndex === monthList.length - 1}
                        >
                            <FuseSvgIcon size={20}>
                                heroicons-solid:chevron-right								
                            </FuseSvgIcon>
                        </IconButton>
                    </Tooltip>
                    </div>
                    <div className="flex h-22 w-2/3
                     m-auto py-6 justify-center items-center rounded-lg bg-[#FF3A47] text-white text-xl font-semibold ml-30 mr-30">
                        <div className="">却下</div>
                    </div>
                    <div className="w-2/3 text-red font-bold">※ 申請項目なし</div>
                </div>
            </div>
            {monthList.length === 0 && (
                <div className="h-[calc(100*var(--vh)-10rem)] flex flex-col justify-center items-center text-[#64748b]">
                    {/* <IconsContext className="scale-[3.5] mb-9" svgIcon="heroicons_outline:information-circle" /> */}
                    <span>表示する履歴がありません</span>
                </div>
            )}
          </>
      )
  }
  
  export default ExpenseMonthPageTab;