import styled from 'styled-components'

export const FemaquaNameContainer = styled.span`
    display: flex;
    flex-direction: column;
    gap: min(10px, 2vh);
    color: var(--ink);
`

export const Acronym = styled.h2<{ $small?: boolean }>`
    font-size: ${$props => $props.$small ? '1.3rem' : '2rem'};
    font-weight: bold;
`

export const Fullname = styled.h3<{ $small?: boolean }>`
    font-size: ${$props => $props.$small ? '1.1rem' : '1.5rem'};
    font-weight: bold;
`