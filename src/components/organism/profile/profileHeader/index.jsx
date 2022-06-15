import React from "react";
import ContentText from "../../../atoms/contentText";
import "./index.css";
import profileImg from "./images/perfil.jfif";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ProfileHeader = () => {
    return (
        <header className="profileHeader">
            <ContentText className="profileHeader__text--top" content="CONTA SELECIONADA"/>
            <div className="imgBox profileHeader__box">
                <img className="imgBox__img" src={profileImg} alt=""/>
                <div className="imgBox__icon" >
                    <KeyboardArrowDownIcon/>
                </div>
            </div>
            <ContentText className="profileHeader__text--bottom" content="Luana Medeiros"/>
        </header>
    )
}

export default ProfileHeader