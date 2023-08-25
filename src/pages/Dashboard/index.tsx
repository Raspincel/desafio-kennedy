import { useEffect } from "react";
import AddToolModal from "../../components/AddToolModal";
import FemaquaName from "../../components/FemaquaName";
import SearchBar from "../../components/SearchBar";
import ToolCard from "../../components/ToolCard";
import { useSearch, useTool } from "../../hooks/contexts";
import { Actions, DashboardContainer, ToolsDisplay, Wrapper } from "./style";

export default function Dashboard() {
    const { getTools, tools } = useTool()
    const { searchTerms } = useSearch()
    
    useEffect(()=> {
        getTools()
    }, [getTools])

    const verifyTags = (tags: string[])=> {
        if (!searchTerms) return true
        const terms = searchTerms.trim().toLowerCase().split(' ')
        for (const term of terms) {
            if (!tags.includes(term))
                return false
        }

        return true
    }

    return (
        <DashboardContainer>
            <Wrapper>
                <FemaquaName/>
                <ToolsDisplay>
                        <Actions>
                            <SearchBar />
                            <AddToolModal/>
                        </Actions>

                        {tools?.map( (tool, index) => { 
                            const show = verifyTags(tool.tags)
                            
                            return show ? <ToolCard {...tool} key={index}/> : <span key={index}></span>
                        }) }

                </ToolsDisplay>
            </Wrapper>
        </DashboardContainer>
    )
}