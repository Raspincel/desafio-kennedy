import styled from 'styled-components'
import { CFormInput, CFormLabel } from '@coreui/react'

export const InputContainer = styled.span`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: min(15px, 5vh);
    min-width: min(350px, 100%);
`

export const Input = styled(CFormInput)`
    width: 100%;
    color: var(--soft-lavender);
    background: #F5F4F6 0% 0% no-repeat padding-box;
    padding: min(8px, 2vw);
    border: 1px solid var(--pale-grey);
    border-radius: 3px;
    font-size: 0.9rem;
    letter-spacing: 0.4px;

    &:focus {
        color: #8F8A9B;
        background-color: var(--pale-grey);
        border: 1px solid var(--pale-lilac);
        letter-spacing: 0px;
    }

    // For when the user is typing something
    &:not(:placeholder-shown) {    
        color: var(--ink);
        letter-spacing: 0px;
    }
`

export const Label = styled(CFormLabel)`
    color: var(--ink);
    font-size: 1.05rem;
`

export const ErrorText = styled.p`
    color: var(--red);
    font-size: 0.8rem;
`