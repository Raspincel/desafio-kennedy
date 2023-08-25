import styled from 'styled-components'

interface Props {
    $bg: string
    $color: string
    $bgHover: string
    $bgActive: string
    $level: 'primary' | 'secondary' | 'terciary' 
}

export const Button = styled.button<Props>`
    all: unset;
    color: var(--${ props => props.$color });
    background-color: var(--${ props => props.$bg });
    width: min(130px, 100%);
    box-sizing: border-box;

    font-size: 1rem;
    padding: ${ props => 
        props.$level === 'primary' ? 'min(15px, 3vw)' : 
        props.$level === 'secondary' ? 'min(10px, 2vw)' : 
                         'min(5px, 1vw)'};
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.15 linear;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: min(10px, 4vw);
    
    &:hover {
        background-color: var(--${ props => props.$bgHover });
    }

    &:active {
        background-color: var(--${ props => props.$bgActive });
    }
`