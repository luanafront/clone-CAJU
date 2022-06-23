import React from "react";
import FisicCard from "../../atoms/fisicCard";
import VirtualCard from "../../atoms/virtualCard";
import CardSubInfo from "../../atoms/cardSubInfo";

const InfoCard = ({isFisicCard}) => {
    return (
        <>
            { isFisicCard ? <FisicCard/> : <VirtualCard/> }
            <CardSubInfo 
                label="Data de vencimento"  
                value={isFisicCard ? "10/2048" : "11/2048"} 
            />
            {!isFisicCard &&  <CardSubInfo label="Código de segurança"  value="123" />}
        </>
    )
}

export default InfoCard