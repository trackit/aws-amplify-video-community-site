import './NavBar.css'
import React, {useEffect, useState} from "react";
import {Auth} from "aws-amplify";

const NavBar = () => {
    const [groups, setGroups] = useState<Array<string>>([])

    useEffect(() => {
        Auth.currentSession()
            .then((data) => {
                const groupsData = data.getIdToken().payload['cognito:groups']
                console.log(data, groupsData)
                if (groupsData !== undefined)
                    setGroups(groupsData)
            })
    }, [])

    return (
        <div className='navbar'>
            <header>
                <h2><a href='/'>TrackIt Amplify Video</a></h2>
                <ul className='nav__links'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/videos'>Videos</a></li>
                    <li><a href='/live'>Live</a></li>
                    <li><a href='/webinars'>Webinars</a></li>
                    {
                        groups.includes('Admin') && <li><a href='/admin'>Admin</a></li>
                    }
                </ul>
            </header>
        </div>
    )
}

export default NavBar;
