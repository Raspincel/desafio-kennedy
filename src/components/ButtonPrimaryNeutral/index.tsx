import ButtonTemplate from "../ButtonTemplate"

interface Props {
    type?: 'button' | 'submit' | 'reset'
    children: string | JSX.Element | JSX.Element[]
    onClick?: ()=> void

}

export default function ButtonPrimaryNeutral(
    { type, children, onClick }: Props) 
{
    return (
        <ButtonTemplate
            bgColor="blue"
            color="white"
            bgActive="darkerblue"
            bgHover="darkblue"
            type={type}
            level="primary"
            onClick={onClick}
        >
            {children}
        </ButtonTemplate>
    )
}