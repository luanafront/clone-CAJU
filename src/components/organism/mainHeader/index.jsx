import React from "react";
import Salutation from "../../molecules/salutation";
import ContentText from "../../atoms/contentText";
import MoneyCard from "../../molecules/moneyCard";
import moneyCards from "./moneyCard";
import TotalBenefit from "../../molecules/totalBenefit";


import "./index.css"

const MainHeader = () => {
    let sumBenefits = 0
    moneyCards.forEach(card => {
        sumBenefits += card.price
    })
    return (
        <header className="mainHeader">
            <section>
                <Salutation/>
            </section>
            <ContentText className="mainHeader__text" content="BENEFÍCIOS"/>
            <ul className="mainHeader__benefits">
               {moneyCards.map((card, index) => {
                   return (
                       <MoneyCard 
                        className="mainHeader__benefit"
                        Icon={card.Icon}
                        price={card.price}
                        value={card.value}
                        color={card.color}
                       />
                   )
               })}
            </ul>
            <TotalBenefit value={sumBenefits}/>
        </header>
    )
}

export default MainHeader