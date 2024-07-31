import { SvgIcon } from "@mui/material"
import FuseCard from "../card/FuseCard";

function ExpenseImageAddWebCard() {

    return (
        <>
            {/* Web */}
            <FuseCard className="flex m-auto py-36 cursor-pointer w-full">
                <div className="w-full text-center">
                    <SvgIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                        </svg>
                    </SvgIcon>
                </div>
            </FuseCard>

        </>
    )
}

export default ExpenseImageAddWebCard;