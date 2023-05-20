import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
    const [cookies, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();
    
    const logout = () => {
        setCookies("access_token", "");
        window.localStorage.removeItem("userID");
        window.localStorage.removeItem("username");
        navigate("/auth");
    }

    return (<div className = "logout">
        <button onClick = { logout }>Logout</button>
    </div>);
};