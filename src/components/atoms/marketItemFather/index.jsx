import React from "react";
import MarketItemChildren from "../marketItemChildren";
import "./index.css";

const MarketItemFather = ({item}) => {
    return (
        <li className="marketItem__father">
            <div className="marketItem__fatherBox">
                <div className="marketItem__father--icon">
                <item.Icon/> 
                </div>
                <h3 className="marketItem__father--title">{item.label}</h3>
            </div>
            <ul className="marketItens__children">
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