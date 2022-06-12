import React, {useState} from "react";
import Salutation from "../../../molecules/salutation";
import ContentText from "../../../atoms/contentText";
import MoneyCard from "../../../molecules/moneyCard";
import moneyCards from "./moneyCard";
import TotalBenefit from "../../../molecules/totalBenefit";


import "./index.css"

const MainHeader = () => {
    const [click, setClick] = useState(false)

    const toggleEye = () => {
        setClick(!click)
    }
    let sumBenefits = 0
    moneyCards.forEach(card => {
        sumBenefits += card.price
    })
    return (
        <header className="mainHeader">
            <div  className="salutationBox">
                <Salutation click={click} toggleEye={toggleEye}/>
            </div>
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
                            path={card.path}
                            click={click}
                        />
                    )
                })}
                </ul>
               
            <TotalBenefit click={click} value={sumBenefits}/>
        </header>
    )
}

export default MainHeader