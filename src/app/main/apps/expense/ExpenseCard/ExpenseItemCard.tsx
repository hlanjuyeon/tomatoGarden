import { Card, SvgIcon } from "@mui/material"
import ListItemButton from '@mui/material/ListItemButton';
import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import { useState } from "react";

function ExpenseItemCard() {

    // const [buttonClicked, setButtonClicked] = useState(false);

    // const handleClick = () => {
    //     setButtonClicked(true); // 버튼 클릭 시 상태를 true로 변경
    //     onButtonClick(true); // 변경된 상태를 부모 컴포넌트로 전달
    // };

    return (
        <>
            <Card className="flex relative px-4 py-16 text-left">
                <div className="m-auto w-48 h-full">
                    <div className="w-full text-center text-3xl font-bold">1</div>
                </div>
                <div className="grow flex flex-col border-l pl-10 pr-10">
                    <div className="font-bold">2024/07/01</div>
                    <div className="text-md text-gray-G700 mt-4">
                        一般経費
                    </div>
                    <div
                        className="text-md text-gray-G700 mt-4"
                    >
                        2024/07/03 -
                        2024/07/07
                    </div>
                    <div
                        className="text-md text-gray-G700 mt-4"

                    >
                        市ヶ尾駅-渋谷
                    </div>
                    <div className="mt-4 font-bold text-right">
                        ¥4,000
                    </div>
                </div>
                <button className="absolute top-0 right-0 inline-flex text-center justify-center items-center w-40 h-40">
                    {/* <mat-icon svgIcon="feather:trash-2" className="text-gray-500 scale-75"></mat-icon> */}
                    <SvgIcon className="text-gray-G500 scale-75">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6h18m-2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-6 5v6m4-6v6" />
                        </svg>
                    </SvgIcon>
                </button>

            </Card>

            <ListItemButton
                className="w-full px-0"
                // sx={{ bgcolor: 'background.paper' }}
                component={NavLinkAdapter}
                to="new/add"
                // onClick={handleClick}
            >
                <Card className="flex m-auto py-36 cursor-pointer w-full">
                    <div className="w-full text-center">
                        {/* <mat-icon svgIcon="heroicons_outline:plus"></mat-icon> */}
                        <SvgIcon>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                            </svg>
                        </SvgIcon>
                    </div>
                </Card>
            </ListItemButton>
            <div>git push</div>
        </>
    )
}

export default ExpenseItemCard;