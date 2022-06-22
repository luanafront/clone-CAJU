import React from "react";
import CurvedText from "../../atoms/curvedText";
import cajuIcon from "./images/caju-icon.webp";
import "./index.css"

const MarketTitle = () => {
    return (
        <div className="marketTitle">
            <CurvedText/>
            <h1 className="marketTitle__title">
                da <img className="marketTitle__img" src={cajuIcon} alt=""/>
                caju
            </h1>
        </div>
    )
}

export default MarketTitle