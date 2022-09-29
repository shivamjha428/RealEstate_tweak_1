import {useNavigate} from "react-router-dom";
import "./page1.css"
const Logout = ()=> {
    const navigate = useNavigate();
    const handleLogout = ()=> {
        localStorage.setItem("authorization", "");
        navigate("/");
    }
    return (
        <>
        <button onClick={handleLogout} className="btn10">Logout</button>
        </>
    )
}
export default Logout;