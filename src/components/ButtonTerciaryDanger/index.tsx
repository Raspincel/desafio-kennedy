import ButtonTemplate from "../ButtonTemplate";

interface Props {
    type: "button" | "submit" | "reset"
    children: JSX.Element | JSX.Element[] | string
    onClick: ()=> void
}

export default function ButtonTerciaryDanger({ type, children, onClick }: Props) {

    return (
        <ButtonTemplate 
            type={type}
            color="red"
            bgColor="mostlightestred"
            bgHover="lightestred"
            bgActive="lighterred"
            level="terciary"
            onClick={onClick}
        >
            {children}
        </ButtonTemplate >
    )
}