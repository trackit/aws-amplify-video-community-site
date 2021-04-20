import './NavBar.css'

const NavBar = () => {
    return (
        <div className='navbar'>
            <header>
                <h2><a href='/'>TrackIt Amplify Video</a></h2>
                <ul className='nav__links'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/admin'>Admin</a></li>
                </ul>
            </header>
        </div>
    )
}

export default NavBar;
