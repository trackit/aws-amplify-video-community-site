import { withAuthenticator } from "aws-amplify-react";
import { NavBar, SearchBar } from "../../shared/components";

const SearchPage = () => {
    const searchQuery = () => {
        console.log('searchQuery')
    }

    return (
        <div>
            <NavBar/>
            <SearchBar searchQuery={searchQuery}/>
        </div>
    );
};

export default withAuthenticator(SearchPage, true);
