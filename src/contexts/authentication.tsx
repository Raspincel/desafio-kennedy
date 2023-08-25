import { createContext, useCallback, useState } from "react";
import api from "../utils/axios";
import { iLoginData } from "../utils/interfaces";

export const AuthenticationContext = createContext<{
    isAuthenticated: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;  
    login: (data: iLoginData) => void;
    logout: () => void;
    token: string
  
}>({
    isAuthenticated: false,
    setIsAuthenticated: () => {},  
    login: () => {},
    logout: () => {},
    token: ""
})

export const AuthenticationProvider = ({ children }: { children: JSX.Element })=> {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [token, setToken] = useState("")

    const login = useCallback(async (data: iLoginData)=> {
        try {
            const response = await api.post('/auth/login', data)

            setToken(response.data.access_token) 
            setIsAuthenticated(true)
        } catch(err) {
            console.log(err)
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
            login, logout, token
        }}>
            {children}
        </AuthenticationContext.Provider>
    )
}