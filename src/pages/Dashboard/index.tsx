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
        const plainTags = tags.join(' ')

        for (const term of terms) {
            // checks if all search terms at least partially match the tags
            // using regex to always check the start of each string
            // .includes() returned true even if it was in the middle
            // can't quite use .startsWith() due to it all being a single string
            if (!plainTags.match(new RegExp(`.*(?:^|\\s)${term}.*`, 'ig')))
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
                            
                            return show ? <ToolCard {...tool} key={index}/> : ""
                        }).filter(tool => tool !== "") }

                </ToolsDisplay>
            </Wrapper>
        </DashboardContainer>
    )
}