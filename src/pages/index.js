import { Typography } from "@material-tailwind/react";
import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Alert } from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline"
import Home from "./home";

export default function Index() {

  return (
    <React.Fragment>
    <Home/>
      {/* {AppState.state.error && <div className="m-3">
        <Alert
          color="red"
          icon={
            <InformationCircleIcon
              strokeWidth={2}
              className="h-6 w-6"
            />
          }
        >
          <b>Error</b> Something went wrong
        </Alert>
      </div>}
      {AppState.state.status && <></>}
      <div className="flex justify-center items-center h-screen">
        <Typography variant="h1">Sky Todo</Typography>
      </div> */}
    </React.Fragment>
  )
}