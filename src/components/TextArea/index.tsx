import { UseFormRegister } from "react-hook-form";
import { RegisterType } from "../../utils/interfaces";
import { ErrorText, Label, TextAreaContainer, TextAreaContent } from "./style";

export interface Props {
    placeholder: string;
    id: string;
    label?: string;
    register?: UseFormRegister<RegisterType>
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>)=> void
    value?: string
    error?: string
}

export default function TextArea({ id, label, placeholder, register, onChange, value, error }: Props) {

    const parsedRegister = register ? register(id) : {}
    return (
        <TextAreaContainer>
            { label && <Label htmlFor={id}>{label}</Label> }
            <TextAreaContent 
                onChange={onChange}
                {...parsedRegister}
                placeholder={placeholder}
                id={id}
                value={value}
                maxLength={256}
                spellCheck={false}
            />
            { error && error.trim() !== "" && <ErrorText>{error}</ErrorText> }
        </TextAreaContainer>
    )
}