import styled from 'styled-components'
import { ReactComponent as Logo } from '../../assets/images/search_icon.svg'

export const SearchBarContainer = styled.span`
    position: relative;
    width: min(300px, 100%);
    display: flex;
    
    input {
        padding-left: 40px;
    }
`

export const StyledSearchIcon = styled(Logo)`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 15px;
    width: 16px;
    height: 16px;
    aspect-ratio: 1;
    cursor: pointer;

    &, * {
        stroke: var(--soft-lavender) !important;

        &:hover {
            stroke: var(--ink) !important;
        }
    }

    &:hover {
        &, * {
            stroke: var(--ink) !important;
        }
    }
`