import ButtonTemplate from "../ButtonTemplate"

interface Props {
    type?: 'button' | 'submit' | 'reset'
    children: string | JSX.Element | JSX.Element[]
    onClick?: ()=> void

}

export default function ButtonPrimaryDanger(
    { type, children, onClick }: Props) 
{
    return (
        <ButtonTemplate
            bgColor="red"
            color="white"
            bgActive="darkerred"
            bgHover="darkred"
            type={type}
            level="primary"
            onClick={onClick}
        >
            {children}
        </ButtonTemplate>
    )
}