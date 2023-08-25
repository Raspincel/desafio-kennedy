import { UseFormRegister } from "react-hook-form";

export interface iLoginData {
    email: string
    password: string
}

export interface RegisterType {
    [item: string]: string
}

export type UseForm = UseFormRegister<RegisterType>

export interface iTool {
    id?: string
    title: string
    link: string
    description: string
    tags: string[]
}

export interface iCreateTool {
    title: string
    link: string
    description: string
    tags: string
}