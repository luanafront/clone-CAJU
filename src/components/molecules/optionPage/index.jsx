import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const OptionPage = ({path, Icon, text}) => {
    const navigate = useNavigate()
    let click = window.location.pathname === path
    const goToPath = () => {
        navigate(path)
    }
    return (
        <div onClick={goToPath} className="optionPage" style={{borderBottom: click ? "2px solid #3a60ff" : "2px solid transparent"}}>
            <Icon style={{color: click ? "#3a60ff" : "#7f7f7f"}}/>
            <p style={{color: click ? "#3a60ff" : "#7f7f7f"}}>{text}</p>
        </div>
    )
}
export default OptionPage