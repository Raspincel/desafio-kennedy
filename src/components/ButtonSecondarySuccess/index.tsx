import ButtonTemplate from "../ButtonTemplate";

interface Props {
    type: "button" | "submit" | "reset"
    children: JSX.Element | JSX.Element[] | string
    onClick?: ()=> void
}

export default function ButtonSecondarySuccess({ type, children, onClick }: Props) {

    return (
        <ButtonTemplate 
            type={type}
            color="green"
            bgColor="mostlightestgreen"
            bgHover="lightestgreen"
            bgActive="lightergreen"
            level="secondary"
            onClick={onClick}
        >
            {children}
        </ButtonTemplate >
    )
}