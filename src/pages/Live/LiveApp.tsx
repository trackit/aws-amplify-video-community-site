import {withAuthenticator} from "aws-amplify-react";
import {NavBar} from "../../shared/components";

const LiveApp = () => {
    return (
        <div>
            <NavBar/>
            <p>Coming Soon</p>
        </div>
    )
}

export default withAuthenticator(LiveApp, true)
