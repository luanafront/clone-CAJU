import React from "react";
import BackToHome from "../../../atoms/backToHome";
import "./index.css"

const BenefitHeader = ({arrowColor}) => {
    return (
        <header className="benefitHeader" style={{background:arrowColor}}>
            <BackToHome arrowColor={arrowColor}/>
        </header>
    )
}

export default BenefitHeader