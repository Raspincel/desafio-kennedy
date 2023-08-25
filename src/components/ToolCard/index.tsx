import { useSearch } from "../../hooks/contexts";
import { iTool } from "../../utils/interfaces";
import RemoveToolModal from "../RemoveToolModal";
import { Container, Description, Header, HeaderInfos, Tag, Tags } from "./style";

export default function ToolCard({ title, description, tags, link, id }: iTool) {
    const { searchTerms, setSearchTerms } = useSearch()
    
    const toggleFilter = (clickedTag: string)=> {
        const iClickedTag = new RegExp(clickedTag, 'ig')

        setSearchTerms((tags)=> {
            const oldTags = tags.toLowerCase()
            
            const newTags = oldTags.includes(iClickedTag.source) ?
                oldTags.replace(iClickedTag, '') :
                oldTags.concat(` ${clickedTag}`)

            const multipleSpaces = / +/g;

            return newTags.replace(multipleSpaces, ' ').trimStart();
        })
    }

    const verifyTagUsage = (tag: string)=> {
        return searchTerms.toLowerCase().includes(tag.toLowerCase());
    }

    return (
        <Container>
            <HeaderInfos>
                <Header href={link}>{title}</Header>
                
                <RemoveToolModal id={id as string}/>
            </HeaderInfos>
            <Description>
                {description}
            </Description>
            <Tags>
                {tags.map((tag, index)=> {
                    const isTagBeingSearched = verifyTagUsage(tag)

                    return (
                        <Tag 
                            onClick={()=>toggleFilter(tag)} 
                            $isSearched={isTagBeingSearched} 
                            key={index}
                        >
                            #{tag}
                        </Tag>
                        )
                })}
            </Tags>
        </Container>
    )
}