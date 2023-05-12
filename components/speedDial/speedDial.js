import React, { useState } from 'react'
import { Button } from "@material-tailwind/react";



const SpeedDial = ({ open, setOpen }) => {

    const handleSwitchChange = () => {
        setOpen(!open);
    };
    return (
        <React.Fragment>

            <Button
                size='md'
                data-dial-toggle="speed-dial-menu-dropdown-alternative"
                aria-expanded="false"
                aria-controls="speed-dial-menu-dropdown-alternative"
                className="flex items-center justify-center ml-auto text-white rounded-full shadow-lg bg-blue-500"
                onClick={handleSwitchChange} color="green">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </Button>

        </React.Fragment>
    )
}

export default SpeedDial