import React from "react";
import "./index.css";

const MarketItemChildren = ({item}) => {
    return (
        <li className="marketItem__children">
            <picture>
                <img className="marketItem__children--img" src={item.img} alt=""/>
                <figcaption className="marketItem__children--fig">{item.title}</figcaption>
            </picture>
            <div className="boxContentChildren marketItem__children--box">
                <h4 className="boxContentChildren__title">{item.title}</h4>
                <p className="boxContentChildren__text">{item.text}</p>
            </div>
        </li>
    )
}

export default MarketItemChildren