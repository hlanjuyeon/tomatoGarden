import { SvgIcon } from "@mui/material"
import FuseCard from "../card/FuseCard";

function ExpenseImageCard() {

    return (
        <>
            <FuseCard className="flex relative w-full border cursor-pointer">
                <img src="public/assets/images/apps/ecommerce/morain-lake.jpg" />
                <button className="absolute top-0 right-0 inline-flex text-center justify-center items-center w-40 h-40">
                    {/* <mat-icon svgIcon="feather:trash-2" className="text-gray-500 scale-75"></mat-icon> */}
                    <SvgIcon className="text-gray-G500 scale-75">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6h18m-2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-6 5v6m4-6v6" />
                        </svg>
                    </SvgIcon>
                </button>
            </FuseCard>
        </>
    )
}

export default ExpenseImageCard;