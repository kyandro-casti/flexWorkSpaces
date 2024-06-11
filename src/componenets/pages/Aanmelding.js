import React, {  useState } from "react";
import { useNavigate } from "react-router-dom"
function Aanmelding() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const handleAanmelding = () =>{
        navigate('/')
    }
    return(
        <div style={{textAlign:"center"}}>
            <div>
                <p style={{color: "#185871"}}>Nieuwe email</p>
                <input style={{color: "#FFDD00", background: "#538F74"}} placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <p style={{color: "#185871"}}>Nieuwe gebruikersnaam</p>
                <input style={{color: "#FFDD00", background: "#538F74"}} placeholder="Bijvoorbeeld les, jesse, etc" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                <p style={{color: "#185871"}}>Wachtwoord</p>
                <input style={{color: "#FFDD00", background: "#538F74"}} type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <div><p></p></div>
            <div>
                <button style={{width: "170px"}} onClick={handleAanmelding}>aanmelden</button>
            </div>
        </div>
    );
}
export default Aanmelding