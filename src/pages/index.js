import BottomDrawer from "../../components/drawer/drawer";
import SpeedDial from "../../components/speedDial/speedDial";
import { Fragment, useState } from "react";
import Home from "./home";
import Header from "../../components/header/header";

export default function Example() {
  const [open, setOpen] = useState(false)

  return (
    <Fragment>
      <div className="sticky top-0 z-30">
        <Header />
      </div>
      <Home />
      <BottomDrawer open={open} setOpen={setOpen} />
      <div className="fixed right-10 z-50 bottom-10">
        <SpeedDial open={open} setOpen={setOpen} />
      </div>
    </Fragment>
  )
}