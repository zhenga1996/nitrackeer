import { useCookies } from "react-cookie";

export const Navbar = () => {
    const [cookies] = useCookies(["access_token"]);

    return (<nav className = "nav">
        <a href="/" className="site-title">Nitee Tracker</a>
        <ul>
            <li>
                <a href="/auction">Auction</a>
            </li>
            <li>
                <a href="/bazaar">Bazaar</a>
            </li>
            <li>
                {
                    !cookies.access_token ?
                    <a href="/login">Login</a> :
                    <a href="/logout">{ localStorage.username }</a>
                }
            </li>
        </ul>
    </nav>);
}

/* 
        { !cookies.access_token ? <Link to = "/auth"> Register / Login </Link> : <Link to = "/logout"> { localStorage.username }</Link> } */