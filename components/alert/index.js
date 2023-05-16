import React from "react";
import { Alert, Button } from "@material-tailwind/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

export const ErrorAlert = ({ open, setOpen, message }) => {

    return (
        <React.Fragment>
            <div className="p-5">
                <Alert
                    variant="gradient"
                    color="red"
                    open={open}
                    icon={<ExclamationTriangleIcon className="h-6 w-6" />}
                    action={
                        <Button
                            variant="text"
                            color="white"
                            size="sm"
                            className="!absolute top-3 right-3"
                            onClick={() => setOpen(false)}
                        >
                            Close
                        </Button>
                    }
                >
                    {message}
                </Alert>
            </div>
        </React.Fragment>
    );
}