import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie";
import Login from "./loginPage";
import { useEffect } from "react";
function Main(){
    const navigate = useNavigate()
    const logged_in = Cookies.get("login")
    useEffect(() =>{
        if(logged_in !== "logged_out"){
            navigate("/Mainpage")
        }// eslint-disable-next-line
    }, []);
    return(
        <div>
            <Login/>
        </div>
    )
}
export default Main