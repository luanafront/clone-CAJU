import React, {useState} from "react";
import MarketTitle from "../../../molecules/marketTitle";
import marketPizzaImg from "./images/market-pizza.jpg"
import ContentText from "../../../atoms/contentText";
import MarketFilters from "../../../molecules/marketFilters";
import "./index.css";

const MarketHeader = () => {
    const [scroll, setScroll] = useState(2)
    const [subScroll, setSubScroll] = useState(2)
   
    document.onscroll = () => {
        let marketFilter = document.getElementById("marketFilters")
        let marketText = document.getElementById("marketText")
        setScroll(marketFilter.getBoundingClientRect().top)
        setSubScroll(marketText.getBoundingClientRect().top)
    }

    return (
        <header className="marketHeader">
            <MarketTitle/>
            <picture className="marketHeader__pic">
                <img className="marketHeader__img" src={marketPizzaImg} alt=""/>
                <figcaption className="marketHeader__fig">Anúncios</figcaption>
            </picture>
            <ContentText id="marketText" className="marketHeader__text" content="Hoje é dia de feira! Tem desconto e promoção de montão na Feirinha da Caju!"/>
            <MarketFilters subScroll={subScroll} scroll={scroll} />
        </header>
    )
}

export default MarketHeader