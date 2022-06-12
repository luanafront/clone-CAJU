import React from "react";
import Money from "../../atoms/money";
import { useNavigate } from "react-router-dom";

const MoneyCard = ({Icon, price, value, color, className, click, path}) => {
    const navigate = useNavigate()
    return (
        <li onClick={() => {
            navigate(`/benefit-page${path}`)
        }} className={className} style={{background: color}}>
            <Icon/>
            <Money click={click} price={price}/>
            <p>{value}</p>
        </li>
    )
}
export default MoneyCard