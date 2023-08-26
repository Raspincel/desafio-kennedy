import styled from 'styled-components'
import { ReactComponent as RawAddIcon } from '../../assets/images/plus_icon.svg'
import { ReactComponent as RawCloseIcon } from '../../assets/images/remove_icon.svg'

export const ModalWrapper = styled.span`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ModalContainer = styled.form.attrs({ 'aria-label': 'form' })<{ $small?: boolean }>`
    width: ${ props => props.$small ? 'min(600px, 90vw)' : 'min(1200px, 90vw)'};
    padding: min(30px, 2.5vw);
    display: flex;
    flex-direction: column;
    gap: min(30px, 10vh);
    background-color: var(--white);

    margin: min(30px, 5vh) 0;
`

export const ModalHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ModalBody = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: min(30px, 5vw);

    .teste {
        display: flex;
        flex-direction: column;
        flex: 1;
    }
    span {
        flex: 1;
    }
`

export const ModalFooter = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: min(20px, 5vw);
`

export const Title = styled.h2`
    font-size: 1.4rem;
    font-weight: bold;
    color: var(--ink);
`

export const AddIcon = styled(RawAddIcon)`
    width: 0.9rem;
    height: 0.9rem;
    &, * {
        stroke: var(--green) !important;
    }
`

export const CloseIcon = styled(RawCloseIcon)`
    width: 1rem;
    height: 1rem;
    cursor: pointer;

    &, * {
        stroke: var(--ink) !important;
        fill: var(--ink) !important
    }
`