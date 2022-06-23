import React from "react";

const CardSubInfo = ({label, value}) => {
    return (
    <div className="subInfo infoCard__box">
        <p className="subInfo__text--label">{label}</p>
        <p className="subInfo__text--date">{value}</p>
    </div>
    )
}

export default CardSubInfo