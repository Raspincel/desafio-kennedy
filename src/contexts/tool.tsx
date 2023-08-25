import { createContext, useCallback, useState } from "react";
import { useAuthentication } from "../hooks/contexts";
import api from "../utils/axios";
import { iTool } from "../utils/interfaces";

export const ToolContext = createContext<{
    tools: iTool[]
    setTools: React.Dispatch<React.SetStateAction<iTool[]>>
    getTools: ()=> Promise<void>
    showAddModal: boolean
    setShowAddModal: React.Dispatch<React.SetStateAction<boolean>>
    createTool: (data: iTool)=> Promise<void>
    deleteTool: (id: string)=> Promise<void>
}>({
    tools: [],
    setTools: ()=>{},
    getTools: ()=> Promise.resolve(),
    showAddModal: false,
    setShowAddModal: ()=>{},
    createTool: ()=> Promise.resolve(),
    deleteTool: ()=> Promise.resolve(),
})

export const ToolProvider = ({ children }: { children: JSX.Element })=> {
    const { token } = useAuthentication()

    const [tools, setTools] = useState<iTool[]>([])
    const [showAddModal, setShowAddModal] = useState(false)

    const getTools = useCallback(async ()=> {
        try {
            const response = await api.get('/tools', {
                headers: {
                    Authorization: `bearer ${token}`
                }
            })

            setTools(response.data)

        } catch(err) {
            console.log(err)
        }
    }, [token])


    const createTool = useCallback(async (data: iTool)=> {
        try {

            console.log(data)
            await api.post('/tools', data, {
                headers: {
                    Authorization: `bearer ${token}`
                }
            })

            getTools()
        } catch(err) {
            console.log(err)
        }
    }, [token, getTools])

    const deleteTool = useCallback(async (id: string)=> {
        try {
            await api.delete(`tools/${id}`, {
                headers: {
                    Authorization: `bearer ${token}`
                }
            })

            getTools()            
        } catch(err) {
            console.log(err)
        }
    }, [token, getTools])
    
    return (
        <ToolContext.Provider value={{
            tools, setTools, getTools,
            showAddModal, setShowAddModal,
            createTool, deleteTool
        }}>
            {children}
        </ToolContext.Provider>
    )
}