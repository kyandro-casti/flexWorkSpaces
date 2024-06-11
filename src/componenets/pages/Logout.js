import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie";
import "../CSS/logout.css"
function Logout(){
    const navigate = useNavigate();
    const handleLogout = () =>{
        navigate('/')
        Cookies.set("login", "logged_out", {expires: 7})
    }
    return(
        <div style={{textAlign:"right"}}>
            <button className="button" onClick={handleLogout}>Log uit</button>
        </div>
    )
}
export default Logout