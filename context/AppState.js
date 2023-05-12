import React, { useEffect } from 'react'
import AppContext from './AppContext'
import { useState } from 'react'

const AppState = ({ children }) => {
    const [state, setState] = useState({
        Author: false,
        token: null,
        data: null,
        isLogged: false,
        loading: false,
        error: null,
        UserTodo: null,
    })

    useEffect(() => {

    }, [])

    const AppStart = async () => {

    }

    const ADD_TODO = async (data) => { }

    const DELETE_TODO = async (data) => { }

    const UPDATE_TODO = async (data) => { }

    const GET_USER_TODO = async (data) => { }

    const LOGIN = async (data) => { }

    const REGISTER = async (data) => { }

    const LOGOUT = async (data) => { }

    const GET_USER = async (data) => { }



    return (
        <AppContext.Provider value={{ state, setState }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppState