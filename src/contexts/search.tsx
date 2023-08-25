import { createContext, useState } from "react";

export const SearchContext = createContext<{
    searchTerms: string
    setSearchTerms: React.Dispatch<React.SetStateAction<string>>
}>({
    searchTerms: "",
    setSearchTerms: ()=> {}
})

export const SearchProvider = ({ children }: { children: JSX.Element })=> {
    const [searchTerms, setSearchTerms] = useState("")

    return (
        <SearchContext.Provider value={{
            searchTerms, setSearchTerms
        }}>
            {children}
        </SearchContext.Provider>
    )
}