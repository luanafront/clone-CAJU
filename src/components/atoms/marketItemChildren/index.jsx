import React from "react";

const MarketItemChildren = ({item}) => {
    return (
        <li>
            <picture>
                <img src={item.img} alt=""/>
                <figcaption>{item.title}</figcaption>
            </picture>
            <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
            </div>
        </li>
    )
}

export default MarketItemChildren