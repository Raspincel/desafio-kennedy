import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: min(20px, 5vw);
    border: 1px solid var(--ink);
    border-radius: 2px;
    gap: min(10px, 5vh);
`

export const HeaderInfos = styled.span`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`

export const Header = styled.a.attrs({ target: '_blank' })`
    text-decoration: none;
    color: var(--blue);
    font-weight: bold;
    font-size: 1.2rem;
`

export const Description = styled.p`
    font-size: 1rem;
    text-align: justify;
`

export const Tags = styled.span`
    display: flex;
    flex-wrap: wrap;
    gap: min(15px, 3vw);
`

export const Tag = styled.p<{ $isSearched: boolean }>`
    color: ${props => props.$isSearched ? 'var(--red)' : 'var(--blue)'};
    cursor: pointer;
`