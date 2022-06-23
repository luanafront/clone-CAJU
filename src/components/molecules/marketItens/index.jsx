import React from "react";
import marketItens from "./marketItens";
import MarketItemFather from "../../atoms/marketItemFather";

const MarketItem = () => {
    return (
        <ul>
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