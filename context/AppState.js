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
        error: null
    })

    useEffect(() => {
        
    }, [])

    return (
        <AppContext.Provider value={{ state, setState }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppState