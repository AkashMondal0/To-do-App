import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    Textarea,
} from "@material-tailwind/react"

export default function Modal({ open, setOpen }) {


    const handleOpen = () => setOpen(!open);

    return (
        <React.Fragment>
            <Dialog open={open} handler={handleOpen}>
                <div className="flex items-center justify-between">
                    <DialogHeader>ADD NEW TODO</DialogHeader>
                </div>
                <DialogBody divider>
                    <div className="grid gap-6">
                        <Input label="Title" />
                        <Textarea label="Message" />
                    </div>
                </DialogBody>
                <DialogFooter>
                    <Button className="mx-2" variant="outlined" color="red" onClick={handleOpen}>
                        close
                    </Button>
                    <Button className="mx-2" variant="gradient" color="green" onClick={handleOpen}>
                        send message
                    </Button>
                </DialogFooter>
            </Dialog>
        </React.Fragment>
    );
}