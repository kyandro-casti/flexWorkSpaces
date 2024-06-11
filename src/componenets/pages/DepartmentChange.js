import { useState } from "react";
import { useNavigate } from "react-router-dom";
function DepartmentChange (){
    const navigate = useNavigate()
    const [department, setDepartment] = useState("")
    const [change, setChange] = useState("")
    const onChange = () =>{
        setDepartment(change)
        navigate("/")
    }
    return(
        <div style={{textAlign: "center"}}>
          <div>
            {department}
          </div>
          <div>
            <input placeholder="CSS" onChange={(e) => setChange(e.target.value)}></input>
            <button onClick={onChange}>Change</button>
          </div>
        </div>
    )
}
export default DepartmentChange;