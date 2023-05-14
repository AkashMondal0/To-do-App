import { useLazyQuery } from "@apollo/client";
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { gqlLogin } from "../../../controller/auth.api.controller";


export default function Login() {
    const [loginCredential, { data, error, loading }] = useLazyQuery(gqlLogin)
    const router = useRouter()
    const [state, setState] = useState({
        email: '',
        password: '',
        message: ""
    })

    const addUsers = async () => {
        loginCredential({
            variables: {
                email: state.email,
                password: state.password
            }
        })
    }

    useEffect(() => {
        if (data) {
            if (data.login === "Incorrect password" || data.login === "User does not exist") {
                console.log(data.login)
            } else {
                localStorage.setItem("mysqlToken", data.login)
                router.push("/home")
            }
        }
    }, [data])

    return (
        <div className="flex justify-center items-center h-screen">
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Sign In
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Enter your details to login.
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-4 flex flex-col gap-6">
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
                    <Button onClick={addUsers} className="mt-6" fullWidth>
                        Login
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Already have an account?{" "}
                        <a onClick={() => {
                            router.push('/auth/register')
                        }} className="font-medium text-blue-500 transition-colors hover:text-blue-700 cursor-pointer">
                            Sign In
                        </a>
                    </Typography>
                </form>
            </Card>
        </div>
    );
}