import React from "react";

const Money = ({price}) => {
    return (
        <div>
            <p style={{opacity:.7}} >R$</p>
            <p>{price},00</p>
        </div>
    )
}

export default Money
