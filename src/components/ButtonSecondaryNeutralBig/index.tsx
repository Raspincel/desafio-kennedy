import ButtonTemplate from "../ButtonTemplate"

interface Props {
    type?: 'button' | 'submit' | 'reset'
    children: string | JSX.Element | JSX.Element[]
    onClick?: ()=> void

}

export default function ButtonSecondaryNeutralBig(
    { type, children, onClick }: Props) 
{
    return (
        <ButtonTemplate
            bgColor="mostlightestblue"
            color="blue"
            bgActive="lighterblue"
            bgHover="lightestblue"
            type={type}
            level="primary"
            onClick={onClick}
        >
            {children}
        </ButtonTemplate>
    )
}