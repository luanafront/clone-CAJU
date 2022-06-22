import React from "react";
import MarketTitle from "../../../molecules/marketTitle";
import marketPizzaImg from "./images/market-pizza.jpg"
import ContentText from "../../../atoms/contentText";
import MarketFilters from "../../../molecules/marketFilters";
import "./index.css";

const MarketHeader = () => {
    return (
        <header className="marketHeader">
            <MarketTitle/>
            <img className="marketHeader__img" src={marketPizzaImg} alt=""/>
            <ContentText className="marketHeader__text" content="Hoje é dia de feira! Tem desconto e promoção de montão na Feirinha da Caju!"/>
            <MarketFilters/>
        </header>
    )
}

export default MarketHeader