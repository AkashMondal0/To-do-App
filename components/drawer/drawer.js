import React, { useContext, useEffect, useState } from "react";
import AppContext from '../../context/AppContext';
import {
  Drawer,
  Typography,
  IconButton,
  Input,
  Textarea,
  Button,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";


export default function BottomDrawer({ open, setOpen }) {
  const AppStart = useContext(AppContext)
  const toggleDrawer = () => setOpen({ ...open, drawerOpen: !open.drawerOpen });

  const [state, setState] = useState({
    title: open.data.title,
    message: open.data.message,
    todoId: open.data.id,
    array: open.data,
  })

  const ADD_TODO = async () => {
    if (state.title.length > 0 && state.message.length > 0) {
      AppStart.ADD_TODO({
        title: state.title,
        message: state.message,
      })
      setState({
        title: '',
        message: '',
      })
      toggleDrawer()
    }
  }

  const UPDATE_TODO = async () => {

    AppStart.UPDATE_TODO(state)
    setState({
      title: '',
      message: '',
    })
    toggleDrawer()

  }

  useEffect(() => {
    setState({
      title: open.data.title,
      message: open.data.message,
      todoId: open.data.id,
      array: open.data,
    })
  }, [open])

  return (
    <React.Fragment>
      <Drawer open={open.drawerOpen} onClose={toggleDrawer} className="w-screen">
        <div className="mb-2 flex items-center justify-between p-4">
          <Typography variant="h5" color="blue-gray">
            {open.Action}
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={toggleDrawer}>
            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
          </IconButton>
        </div>
        <form className="flex flex-col gap-6 p-4">
          <Input type="email" value={state.title} label="Title" onChange={(e) => { setState({ ...state, title: e.target.value }) }} />
          <Textarea rows={6} value={state.message} label="Message" onChange={(e) => { setState({ ...state, message: e.target.value }) }} />
          {open.Action === "ADD TODO" ? <Button onClick={ADD_TODO}>ADD TODO</Button> : <Button onClick={UPDATE_TODO}>UPDATE TODO</Button>}
        </form>
      </Drawer>
    </React.Fragment>
  );
}