import styled from 'styled-components'
import { ReactComponent as RawAddIcon } from '../../assets/images/plus_icon.svg'

export const AddIcon = styled(RawAddIcon)`
    width: 0.9rem;
    height: 0.9rem;
    &, * {
        stroke: var(--green) !important;
    }
`

export const ErrorText = styled.p`
    color: var(--red);
    font-size: 0.8rem;
`