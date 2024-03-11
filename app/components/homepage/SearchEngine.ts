import {useState} from "react";

export const SearchEngine = (tools: any) => {
    const [searchValue, setSearchValue] = useState('');
    const filteredTools = tools.filter((tool: any) =>
        tool.toolName.toLowerCase().includes(searchValue.toLowerCase()) ||
        tool.category.toLowerCase().includes(searchValue.toLowerCase())
    );
    return {filteredTools, setSearchValue}
}

export default SearchEngine