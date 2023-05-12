import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import {
  Input,
  Button,
  Textarea
} from "@material-tailwind/react";
import React from "react";

export default function BottomDrawer({ open, setOpen }) {

  const toggleDrawer = () => setOpen(!open)


  return (
    <React.Fragment >
      <SwipeableDrawer
        anchor={"bottom"}
        open={open}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}>
        <div className='justify-center flex items-center'>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 ">
            <div className="mb-4 flex flex-col gap-6">
              <div className='w-96'>
                <Input size="lg" label="Title" />
              </div>
              <div className="w-96">
                <Textarea label="Message" />
              </div>
            </div>
            <Button onClick={toggleDrawer} className="mt-6" fullWidth>
              ADD TODO
            </Button>
          </form>
        </div>

      </SwipeableDrawer>
    </React.Fragment>
  );
}