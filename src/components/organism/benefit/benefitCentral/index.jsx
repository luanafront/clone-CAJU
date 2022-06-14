import React from "react";
import GenericInput from "../../../atoms/genericInput";
import GenericCalendar from "../../../atoms/genericCalendar";
import "./index.css"
import ContentText from "../../../atoms/contentText";
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

const BenefitCentral = () => {
    return (
        <main className="benefitCentral">
            <div className="benefitFilters benefitCentral__filters">
                <GenericInput/>
                <GenericCalendar/>
            </div>
            <ContentText className="benefitCentral__text" content="Nenhuma transação"/>
            <div className="benefitCentral__button">
                <CompareArrowsIcon/>
                <ContentText className="benefitCentral__buttonText" content="Transferir saldo"/>
            </div>
        </main>
    )
}

export default BenefitCentral