import React, {useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import moneyCards from "../../organism/main/mainHeader/moneyCard";
import BenefitHeader from "../../organism/benefit/benefitHeader";
import BenefitCentral from "../../organism/benefit/benefitCentral";

const BenefitPage = () => {
    const {benefitName} = useParams()
    const navigate = useNavigate()

    let allowedParams = ["home-office", "alimentacao", "mobilidade", "cultura", "saude"]
    useEffect(() => {
        if (allowedParams.includes(benefitName) === false ){
            navigate("/")
        }
    }, [])

    let keyParams = {
        "home-office": "HOME OFFICE",
        "alimentacao": "ALIMENTAÇÂO", 
        "mobilidade": "MOBILIDADE",
        "cultura": "CULTURA",
        "saude": "SAÚDE"
    }
    let key = keyParams[benefitName]
    let benefitItem = moneyCards.find((moneyCard) => moneyCard.value === key)
    let topColor = document.getElementById("topColor")
    topColor.color = benefitItem.color

    return (
        <div>
            <BenefitHeader benefitName={benefitItem.value} benefitValue={benefitItem.price} arrowColor={benefitItem.color} />
            <BenefitCentral/>
        </div>
    )
}


export default BenefitPage
