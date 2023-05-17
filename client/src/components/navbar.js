import { Link } from "react-router-dom";

export const Navbar = () => {
    return <div className = "navbar">
        <Link to = "/"> Home</Link>
        <Link to = "/auction"> Auction</Link>
        <Link to = "/bazaar"> Bazaar</Link>
        <Link to = "/auth"> Register/Login</Link>
    </div>;
}