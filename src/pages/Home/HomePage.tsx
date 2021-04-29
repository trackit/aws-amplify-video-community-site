import { withAuthenticator } from "aws-amplify-react";
import { NavBar } from "../../shared/components";

const HomePage = () => {
    return (
        <div>
            <NavBar/>
        </div>
    )
}

export default withAuthenticator(HomePage, true);
