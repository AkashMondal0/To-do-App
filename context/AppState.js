import React, { useEffect } from 'react'
import AppContext from './AppContext'
import { useState } from 'react'
import { useLazyQuery, useMutation } from '@apollo/client'
import { gqlGetUserData } from '../controller/auth.api.controller'
import { useRouter } from 'next/router'
import { CREATE_TODO_GQL, DELETE_TODO_GQL, UPDATE_TODO_GQL } from '../controller/todo.api.controller'
import { v4 as uuidv4 } from 'uuid';

const getFromStorage = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem("mysqlToken")
  } else {
    return null
  }
}

const AppState = ({ children }) => {
  const [GetUserData, { data, loading, error }] = useLazyQuery(gqlGetUserData)
  const [CreateTodoGql, { createTodo }] = useMutation(CREATE_TODO_GQL)
  const [DeleteTodoGql, { deleteTodo }] = useMutation(DELETE_TODO_GQL)
  const [UpdateTodoGql, { updateTodo }] = useMutation(UPDATE_TODO_GQL)

  const router = useRouter()

  const [state, setState] = useState({
    Author: false,
    token: null,
    data: null,
    isLogged: false,
    loading: false,
    status: null,
    UserTodo: [],
    completedTodo: [],
    error: false,
  })


  const ADD_TODO = async (data) => {
    const todo = {
      title: data.title,
      message: data.message,
      imageUrl: "no img",
      userId: state.Author.id,
      status: 0,
      id: uuidv4(), // generate id
      updatedAt: new Date(),
      createdAt: new Date(),
    }

    // GraphQL
    CreateTodoGql({
      variables: { input: todo }
    })

    const newTodo = [...state.UserTodo, todo]
    setState({ ...state, UserTodo: newTodo })
  }

  const DELETE_TODO = async (data) => {
    const todoId = data.id
    // GraphQL
    DeleteTodoGql({
      variables: { todoId: todoId }
    })
    const newTodo = state.UserTodo.filter(todo => todo.id !== data.id)
    setState({ ...state, UserTodo: newTodo })
  }

  const UPDATE_TODO = async (data) => {
    const updatedTodo = {
      todoId: data.id,
      title: data.title,
      message: data.message,
      imageUrl: "no img",
      status: 0,
      updatedAt: new Date(),
    }

    // GraphQL
    UpdateTodoGql({
      variables: updatedTodo
    })
    const updatedTodoList = state.UserTodo.find((todo) => {
      if (todo.id === data.id) {
        todo.title = data.title
        todo.message = data.message
        todo.updatedAt = new Date()
      }
    })

    setState({ ...state, UserTodo: updatedTodoList })
  }

  const AppStart = async () => {
    const token = getFromStorage()
    if (token) {
      await GetUserData({ variables: { token: token } })
      if (data) {
        setState({ ...state, Author: data.getUserDetails, isLogged: true, UserTodo: data.getUserDetails.todos })
      }
    } else {
      router.push("/login")
    }
  }

  const LOGOUT = async () => {
    localStorage.removeItem("mysqlToken")
    setState({ ...state, Author: false, isLogged: false })
    router.push("/login")
  }

  useEffect(() => {
    AppStart()
    console.log("App Start")
  }, [data])


  return (
    <AppContext.Provider value={{
      state,
      setState,
      ADD_TODO,
      DELETE_TODO,
      UPDATE_TODO,
      AppStart,
      LOGOUT,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppState