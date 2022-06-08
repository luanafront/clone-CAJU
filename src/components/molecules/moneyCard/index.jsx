import React from "react";
import Money from "../../atoms/money";

const MoneyCard = ({Icon, price, value, color, className}) => {
    return (
        <li className={className} style={{background: color}}>
            <Icon/>
            <Money price={price}/>
            <p>{value}</p>
        </li>
    )
}
export default MoneyCard