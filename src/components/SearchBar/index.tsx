import { useSearch } from "../../hooks/contexts";
import TextInput from "../TextInput";
import { SearchBarContainer, StyledSearchIcon } from "./style";

export default function SearchBar() {
    const { searchTerms, setSearchTerms } = useSearch()

    const onSearch = (e: React.ChangeEvent<HTMLInputElement>)=> {
        setSearchTerms(()=> {
            const multipleSpaces = / +/g;

            return e.target.value.replace(multipleSpaces, ' ').trimStart();
        })
    }

    return (
        <SearchBarContainer>
            <TextInput
                id="search"
                placeholder="Busca por tag"
                type="text"
                onChange={onSearch}
                value={searchTerms}
                error=""
            />
            <StyledSearchIcon/>
        </SearchBarContainer>
    )
}