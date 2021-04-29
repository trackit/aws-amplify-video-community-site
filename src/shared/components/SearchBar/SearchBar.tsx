import { FormEvent } from "react";

type SearchBarProps = {
    searchQuery: () => void;
}

const SearchBar = ({searchQuery}: SearchBarProps) => {

    const runSearch = (e: FormEvent) => {
        searchQuery()
        e.preventDefault();
    };

    return (
        <div>
            <form onSubmit={runSearch}>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SearchBar;