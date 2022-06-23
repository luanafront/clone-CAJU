import React from "react";
import cardFrontImg from "./images/caju-card-front.png";


const FisicCard = () => {
    return (
        <div className="infoCardImgBox">
            <img className="infoCard__image" alt="" src={cardFrontImg}/>
        </div>
    )
}

export default FisicCard