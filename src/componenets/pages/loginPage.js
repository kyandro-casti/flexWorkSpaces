import React, { useState } from "react";
import data from "../../mockData.json"
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom"
import "../CSS/login.css"

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState(Cookies.get("email"));
    const [password, setPassword] = useState('');
    const users = data.users;
    const handleCookies = (count) =>{
      const randomkey = []
      while (randomkey.length < count){
        randomkey.push(Math.random().toString().slice(2))
      }
      const randomString = randomkey.join('').slice(0, count)
      return randomString;
    }
    const HandleLogin = () =>{
      const user = users.find(user => user.email === email)
      if(user && user.password === password){
        Cookies.set("login", handleCookies(10), {expires: 7})
        Cookies.set("email", user.email, {expires:7})
        navigate("/Mainpage")
      }else{
        alert("Gebruikersnaam of wachtwoord is onjuist")
      }
    }
    const handleAanmaak = () =>{
      navigate('/Aanmelding')
    }
    return (
      <div className="App" style={{textAlign:"center"}}>
        <div>
          <h1>Voer hier je email in</h1>
          <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
          <h1>Voer hier je wachtwoord in</h1>
          <input type="password" placeholder='Wachtwoord' value={password} onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <div>
          <button style={{width:"150px", height:"25px"}} onClick={HandleLogin}>Log in</button>
        </div>
        <div>
          <button style={{width:"150px", height:"25px"}} onClick={handleAanmaak}>account aanmaken</button>
        </div>
      </div>
    );
  }
  
  export default Login;
  
