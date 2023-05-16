import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { gqlRegister } from "../../../controller/auth.api.controller";
import { useMutation } from "@apollo/client";
import { ErrorAlert } from "../../../components/alert";
import AppContext from "../../../context/AppContext";

export default function Register() {
  const [registerCredential, { data, error, loading }] = useMutation(gqlRegister)
  const AppState = useContext(AppContext)

  const router = useRouter()
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    message: ""
  })
  const [open, setOpen] = useState(false)

  const handle = async () => {
    registerCredential({
      variables: {
        username: state.name,
        email: state.email,
        password: state.password
      }
    })
  }

  useEffect(() => {
    if (data) {
      if (data.createUser === "User already exists") {
        setOpen(true)
        setState({
          ...state,
          message: "User already exists"
        })
      } else {
        localStorage.setItem("mysqlToken", data.createUser)
        router.push("/home")
      }
    }
  }, [data])



  return (
    <>
      <ErrorAlert open={open} setOpen={setOpen} message={state.message} />
      <div className="flex justify-center items-center h-screen">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Sign Up
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Enter your details to register.
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
              <Input size="lg" label="Name" onChange={(event) => {
                setState({
                  ...state,
                  name: event.target.value
                })
              }} />
              <Input size="lg" label="Email" onChange={(event) => {
                setState({
                  ...state,
                  email: event.target.value
                })
              }} />
              <Input type="password" size="lg" label="Password" onChange={(event) => {
                setState({
                  ...state,
                  password: event.target.value
                })
              }} />
            </div>
            <Checkbox
              label={
                (
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                  >
                    I agree the
                    <a
                      href="#"
                      className="font-medium transition-colors hover:text-blue-500"
                    >
                      &nbsp;Terms and Conditions
                    </a>
                  </Typography>
                )
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button onClick={handle} className="mt-6" fullWidth>
              Register
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <a onClick={() => {
                router.push('/auth/login')
              }} className="font-medium text-blue-500 transition-colors hover:text-blue-700 cursor-pointer">
                Sign Up
              </a>
            </Typography>
          </form>
        </Card>
      </div>
    </>
  );

}