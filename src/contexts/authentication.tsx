import { createContext, useCallback, useState } from "react";
import api from "../utils/axios";
import { iLoginData } from "../utils/interfaces";

export const AuthenticationContext = createContext<{
    isAuthenticated: boolean
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>

    isSigningIn: boolean
    setIsSigningIn: React.Dispatch<React.SetStateAction<boolean>>
    login: (data: iLoginData) => void
    logout: () => void
    token: string
  
}>({
    isAuthenticated: false,
    setIsAuthenticated: () => {},
    isSigningIn: false,
    setIsSigningIn: ()=> {},
    login: () => {},
    logout: () => {},
    token: ""
})

export const AuthenticationProvider = ({ children }: { children: JSX.Element })=> {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isSigningIn, setIsSigningIn] = useState(false)

    const [token, setToken] = useState("")

    const login = useCallback(async (data: iLoginData)=> {
        try {
            setIsSigningIn(true)
            const response = await api.post('/auth/login', data)

            setToken(response.data.access_token) 
            setIsAuthenticated(true)
            setIsSigningIn(false)
        } catch(err) {
            console.log(err)
            setIsSigningIn(false)
        }
    }, [])

    const logout = useCallback(async ()=> {
        try {
            await api.post('/auth/logout')
            setIsAuthenticated(false)
        } catch(err) {
            console.log(err)
        }
    }, [])

    return (
        <AuthenticationContext.Provider value={{
            isAuthenticated, setIsAuthenticated,
            login, logout, token,
            isSigningIn, setIsSigningIn
        }}>
            {children}
        </AuthenticationContext.Provider>
    )
}