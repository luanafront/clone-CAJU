import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate} from "react-router-dom"
import "./index.css";

const BackToHome = ({arrowColor}) => {
    const navigate = useNavigate()
    return (
        <div onClick={() => {
            navigate("/")
        }} className="backToHome">
            <ArrowBackIcon  style={{color:arrowColor}}/>
        </div>
    )
}

export default BackToHome