import { Card, SvgIcon } from "@mui/material"
import ListItemButton from '@mui/material/ListItemButton';
import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import { useState } from "react";

function ExpenseItemAddCard() {

    // const [buttonClicked, setButtonClicked] = useState(false);

    // const handleClick = () => {
    //     setButtonClicked(true); // 버튼 클릭 시 상태를 true로 변경
    //     onButtonClick(true); // 변경된 상태를 부모 컴포넌트로 전달
    // };

    return (
        <>
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
        </>
    )
}

export default ExpenseItemAddCard;