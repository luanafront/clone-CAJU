import React from "react";
import BackToHome from "../../../atoms/backToHome";
import ContentText from "../../../atoms/contentText";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import "./index.css"

const BenefitHeader = ({arrowColor, benefitName, benefitValue}) => {
    return (
        <header className="benefitHeader" style={{background:arrowColor}}>
            <BackToHome arrowColor={arrowColor}/>
            <div className="benefitLabel benefitHeader__box">
                <div className="boxValue benefitLabel__box--value">
                    <ContentText className="boxValue__text--identifier" content="R$"/>
                    <ContentText className="boxValue__text--value" content={`${benefitValue},00`}/>
                </div>
                <ContentText className="benefitLabel__text" content={benefitName}/>
            </div>
            <div className="boxHelp benefitHeader__box--help">
                <HelpOutlineIcon/>
            </div>
            
        </header>
    )
}

export default BenefitHeader