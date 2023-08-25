import styled from 'styled-components'

export const DashboardContainer = styled.div`
    width: 100vw;
    padding: 5vw;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Wrapper = styled.span`
    width: min(900px, 90vw);
    display: flex;
    flex-direction: column;
    gap: min(60px, 10vh);
`

export const ToolsDisplay = styled.main`
    display: flex;
    flex-direction: column;
    gap: min(20px, 6vh);
`

export const Actions = styled.span`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
