import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { Button, IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import React, { useState } from "react";

function ExpenseMonthPageTab() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

    const monthList = [
        '2023年 01月', '2023年 02月', '2023年 03月', 
        '2023年 04月', '2023年 05月', '2023年 06月', 
        '2023年 07月', '2023年 08月', '2023年 09月', 
        '2023年 10月', '2023年 11月', '2023年 12月'
      ];
    
    const open = Boolean(anchorEl);
    const monthIndexClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const monthIndexClose = () => {
        setAnchorEl(null);
    };

    const handlePrevMonth = () => {
        if (currentMonthIndex > 0) {
          setCurrentMonthIndex(currentMonthIndex - 1);
        }
      };
    
      const handleNextMonth = () => {
        if (currentMonthIndex < monthList.length - 1) {
          setCurrentMonthIndex(currentMonthIndex + 1);
        }
      };
    
      const handleMonthSelect = (index: number) => {
        setCurrentMonthIndex(index);
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
                            onClick={handlePrevMonth}
                            disabled={currentMonthIndex === 0}
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
                        <h1 className="text-black text-3xl font-semibold">{monthList[currentMonthIndex]}</h1>
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={monthIndexClose}
                        MenuListProps={{ 
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        {monthList.map((month, index) => (
                            <MenuItem key={index} onClick={() => handleMonthSelect(index)}>
                            <h1 className="text-black text-2xl font-semibold">{month}</h1>
                            </MenuItem>
                        ))}
                    </Menu>

                    <Tooltip title="Previous">
                        <IconButton
                            aria-label="Previous"
                            onClick={handleNextMonth}
                            disabled={currentMonthIndex === monthList.length - 1}
                        >
                            <FuseSvgIcon size={20}>
                                heroicons-solid:chevron-right								
                            </FuseSvgIcon>
                        </IconButton>
                    </Tooltip>
                    </div>
                    <div className="flex h-22 m-auto py-6 justify-center items-center rounded-lg bg-[#FF3A47] text-white text-xl font-semibold ml-30 mr-30">
                        <div className="">却下</div>
                    </div>
                    <div className="text-red font-bold">※ 申請項目なし</div>
                </div>
            </div>
          </>
      )
  }
  
  export default ExpenseMonthPageTab;