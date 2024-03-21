import {useState} from "react";

export const SearchEngine = (tools: any) => {
    const [searchValue, setSearchValue] = useState('');
    const filteredTools = tools.filter((tool: any) => {
        // Convert search query to lowercase for case-insensitive comparison
        const query = searchValue.toLowerCase();

        // Check if tool name or category matches the search query
        const nameMatch = tool.toolName.toLowerCase().includes(query);
        const categoryMatch = tool.category.toLowerCase().includes(query);

        // Check if any tag matches the search query
        const tagsMatch = Array.isArray(tool.tags) && tool.tags.some((tag: any) => tag.toLowerCase().includes(query));

        // Return true if any of the checks above is true
        return nameMatch || categoryMatch || tagsMatch;
    });

    return {filteredTools, setSearchValue};
};


export default SearchEngine;
