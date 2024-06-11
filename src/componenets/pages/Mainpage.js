import "../CSS/mainpage.css"
import data from "../../mockData.json"
import { useState } from "react";
import Cookies from "js-cookie"
import Logout from "./Logout";
import Admin from "./AdminDashboard";
function MainPage(){ 
    const buttonint = data.workStation.find(buttonint => buttonint.workSpaces).workSpaces
    const user = data.users.find(username => username.email === Cookies.get("email"))
    const [clicked, setClicked] = useState(Array(buttonint).fill(false));
    const handleClick = (i) => {
        const newClicked = [...clicked];
        newClicked[i] = !newClicked[i];
        setClicked(newClicked);
    };
    const renderButtons = () => {
        const buttons = [];
        for (let i = 1; i <= buttonint; i++) {
          buttons.push(<button className={`common-button button-${i}`} key={i} onClick={() => handleClick(i)} style={{ background: clicked[i] ? "#FFDD00" : "#144058", color: "#538F74" }}>{clicked[i] ? `bezet ${user.username}` : `tafel ${i}`}</button>);
        }
        return buttons;
      };
      const admin = () =>{
        switch(user.userType){
            case "user":
                return <div></div>
            case "admin":
                return <Admin/>
            default:
                return <div></div>
        }
      }
    return(
        <div>
            <Logout/>
            <div className="buttonDiv">
                {renderButtons()}
            </div>
            <div style={{textAlign: "center", marginTop: "100px", marginRight: "150px"}}>
                <button style={{background: "#538F74", color: "#FFDD00"}}>beginpunt</button>
            </div>
            <div>
                {admin()}
            </div>
        </div>
    )
}

export default MainPage