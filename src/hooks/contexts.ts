import { useContext } from "react";
import { AuthenticationContext } from "../contexts/authentication";
import { SearchContext } from "../contexts/search";
import { ToolContext } from "../contexts/tool";

export const useAuthentication = ()=> useContext(AuthenticationContext)
export const useTool = ()=> useContext(ToolContext)
export const useSearch = ()=> useContext(SearchContext)