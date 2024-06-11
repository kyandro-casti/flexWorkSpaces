import { useEffect } from "react";
import data from "../../mockData.json"
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom";
function Admin(){
    const navigate = useNavigate()
    const users = data.users
    const user = data.users.find(user => user.email === Cookies.get("email"))
    const handleClick = () =>{
        navigate("/change")
    }
    useEffect(()=>{
        if(Cookies.get("login") === "logged_out"){
            navigate("/")
        }if(user.userType !== "admin" && Cookies.get("login") !== "logged_out"){
            navigate("/Mainpage")
        } // eslint-disable-next-line
    },[]) 
    return (
      <div style={{textAlign: "left"}}>
        <h1>Dashboard voor admins</h1>
        <table>
            <thead>
                <tr>
                    <th>Afdeling</th>
                    <th>Gebruikersnaam</th>
                    <th>Email</th>
                    <th>Verwijderen</th>
                    <th>Afdeling aanpassen</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.Department}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>
                            <button>Verwijderen</button>
                        </td>
                        <td>
                            <button onClick={handleClick}>Afdeling aanpassen</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    );
  };
export default Admin