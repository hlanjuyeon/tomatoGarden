import { Card, SvgIcon } from "@mui/material"

function ExpenseImageAddCard() {

    return (
        <>
            {/* mobile */}
            {/* <Card className="w-full cursor-pointer">
                <div>
                    <div className="w-full py-9 text-center">
                        <SvgIcon>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                            </svg>
                        </SvgIcon>
                    </div>
                </div>
                <div>
                    <div className="flex">
                        <div
                            className="w-1/2 py-9 text-center pl-[15%]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                                <g fill="none" stroke="#1e293b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                    <path d="M3 9a2 2 0 0 1 2-2h.93a2 2 0 0 0 1.664-.89l.812-1.22A2 2 0 0 1 10.07 4h3.86a2 2 0 0 1 1.664.89l.812 1.22A2 2 0 0 0 18.07 7H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                    <path d="M15 13a3 3 0 1 1-6 0a3 3 0 0 1 6 0" />
                                </g>
                            </svg>
                        </div>
                        <div
                            className="w-1/2 py-9 text-center pr-[15%]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                                <path fill="none" stroke="#1e293b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 16l4.586-4.586a2 2 0 0 1 2.828 0L16 16m-2-2l1.586-1.586a2 2 0 0 1 2.828 0L20 14m-6-6h.01M6 20h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2" />
                            </svg>
                        </div>
                    </div>
                </div>
            </Card > */}

            {/* Web */}
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

        </>
    )
}

export default ExpenseImageAddCard;