import { Typography } from "@material-tailwind/react";
import AppContext from "../../../context/AppContext";
import TodoCard from "../../../components/todoCard/todoCard";
import React, { useContext, useEffect, useState } from "react";
import Header from "../../../components/header/header";
import BottomDrawer from "../../../components/drawer/drawer";
import SpeedDial from "../../../components/speedDial/speedDial";


const Home = () => {
  const AppState = useContext(AppContext)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    AppState.AppStart()
  }, [])

  return (
    <React.Fragment>

      <div className="sticky top-0 z-30">
        <Header />
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <Typography variant="h1">Organize your
              work and life, finally</Typography>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 my-2">Become focused, organized, and calm with Todoist. The world’s #1 task manager and to-do list app</p>
          </div>
          {/* task heading */}
          <div className="my-5">
            <Typography variant="h3">Tasks</Typography>
          </div>

          <div className="flex flex-wrap">
            {AppState.state.UserTodo.map((item, index) => { { return <TodoCard key={item.id} index={index} item={item} AppState={AppState} /> } })}
          </div>

          {/* complete tasks heading */}
          {/* <div className="my-5">
            <Typography variant="h3">Completed</Typography>
          </div>
          <div className="">
            <Timeline>
              {AppState.state.UserTodo.map((item, index) => { { return <TodoCard key={item.id} index={index} item={item} /> } })}
            </Timeline>
          </div> */}
        </div>
      </section>

      <div className="fixed right-10 z-50 bottom-10">
        <SpeedDial open={open} setOpen={setOpen} />
      </div>
      <BottomDrawer open={open} setOpen={setOpen} />

    </React.Fragment>

  )
}

export default Home