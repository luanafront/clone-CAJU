import React from "react";
import MarketItemChildren from "../marketItemChildren";

const MarketItemFather = ({item}) => {
    return (
        <li>
            <div>
            <item.Icon/> 
            </div>
            <h3>{item.label}</h3>
            <ul>
                {
                    item.itens.map((marketItem, index) => {
                        return (
                           <MarketItemChildren key={index} item={marketItem} />
                        )
                    })
                }
            </ul>
        </li>
    )
}
export default MarketItemFather