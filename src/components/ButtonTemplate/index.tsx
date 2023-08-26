import { Button } from "./style";

interface Props {
    color: string
    bgColor: string
    bgHover: string
    bgActive: string
    type?: 'button' | 'submit' | 'reset' | string
    children: string | JSX.Element | JSX.Element[]
    level: 'primary' | 'secondary' | 'terciary' | string
    onClick?: ()=>void

}
export default function ButtonTemplate({ color, bgColor, bgHover, bgActive, type, children, level, onClick }: Props) {

    return (
        <Button 
            type={type as 'button' | 'submit' | 'reset'}
            $color={color}
            $bg={bgColor}
            $bgHover={bgHover}
            $bgActive={bgActive}
            $level={level as 'primary' | 'secondary' | 'terciary'}
            onClick={onClick}
        >
            {children}
        </Button>
    )
}