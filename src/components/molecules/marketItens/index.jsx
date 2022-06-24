import React from "react";
import marketItens from "./marketItens";
import MarketItemFather from "../../atoms/marketItemFather";
import "./index.css";

const MarketItem = () => {
    return (
        <ul className="marketItem">
            {
              marketItens.map((item, index) => {
                return (
                   <MarketItemFather key={index} item={item}/>
                )
              })  
            }
        </ul>
    )
}

export default MarketItem