import { Button } from "./style";

interface Props {
    color: string
    bgColor: string
    bgHover: string
    bgActive: string
    type?: 'button' | 'submit' | 'reset'
    children: string | JSX.Element | JSX.Element[]
    level: 'primary' | 'secondary' | 'terciary'
    onClick?: ()=>void

}
export default function ButtonTemplate({ color, bgColor, bgHover, bgActive, type, children, level, onClick }: Props) {

    return (
        <Button 
            type={type}
            $color={color}
            $bg={bgColor}
            $bgHover={bgHover}
            $bgActive={bgActive}
            $level={level}
            onClick={onClick}
        >
            {children}
        </Button>
    )
}