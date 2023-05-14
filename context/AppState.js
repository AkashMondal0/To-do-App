import React, { useEffect } from 'react'
import AppContext from './AppContext'
import { useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import { gqlGetUserData } from '../controller/auth.api.controller'
import { useRouter } from 'next/router'

const getFromStorage = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem("mysqlToken")
  } else {
    return null
  }
}

const AppState = ({ children }) => {
  const [GetUserData, { data, loading, error }] = useLazyQuery(gqlGetUserData)
  const router = useRouter()
  const [state, setState] = useState({
    Author: false,
    token: null,
    data: null,
    isLogged: false,
    loading: false,
    error: null,
    UserTodo: [],
    completedTodo: [],
  })

  useEffect(() => {

  }, [])



  const ADD_TODO = async (data) => {
    const todo = {
      title: data.title,
      message: data.message,
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    }

    const newTodo = [...state.UserTodo, todo]
    setState({ ...state, UserTodo: newTodo })
  }

  const DELETE_TODO = async (data) => {
    const newTodo = state.UserTodo.filter((todo) => todo.id !== data.id)
    setState({ ...state, UserTodo: newTodo })
  }

  const UPDATE_TODO = async (data) => {
    const newTodo = state.UserTodo.map((todo) => {
      if (todo.id === data.id) {
        return {
          ...todo,
          title: data.title,
          message: data.message,
        }
      } else {
        return todo
      }
    })
    setState({ ...state, UserTodo: newTodo })
  }

  const GET_USER_TODO = async (data) => { }

  const LOGIN = async (data) => { }

  const REGISTER = async (data) => { }

  const LOGOUT = async (data) => {
    localStorage.removeItem("mysqlToken")
    setState({ ...state, Author: false, isLogged: false })
    router.push("/login")
  }

  const GET_USER = async (data) => { }

  const AppStart = async () => {
    const token = getFromStorage()
    if (token) {
      GetUserData({ variables: { token: token } })
      if (data) {
        router.push("/home")
        setState({ ...state, Author: data.getUserDetails, isLogged: true })
      }
    } else {
      router.push("/login")
    }
  }

  useEffect(() => {
    AppStart()
  }, [data])

  return (
    <AppContext.Provider value={{
      state,
      setState,
      ADD_TODO,
      DELETE_TODO,
      UPDATE_TODO,
      GET_USER_TODO,
      LOGIN,
      REGISTER,
      LOGOUT,
      GET_USER,
      AppStart,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppState