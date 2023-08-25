import { UseFormRegister } from "react-hook-form";
import { RegisterType } from "../../utils/interfaces";
import { ErrorText } from "../AddToolModal/style";
import { Input, InputContainer, Label } from "./style";

interface Props {
    placeholder: string;
    id: string;
    label?: string;
    register?: UseFormRegister<RegisterType>
    onChange?: (e: React.ChangeEvent<HTMLInputElement>)=> void
    value?: string
    type?: string
    error?: string
}

export default function TextInput({ id, label, placeholder, register, onChange, value, type, error }: Props) {

    const parsedRegister = register ? register(id) : {}
    return (
        <InputContainer>
            { label && <Label htmlFor={id}>{label}</Label> }
            <Input onChange={onChange}
                {...parsedRegister}
                type={type || 'text'}
                placeholder={placeholder}
                id={id}
                value={value}
            />
            <ErrorText>{error}</ErrorText>
        </InputContainer>
    )
}