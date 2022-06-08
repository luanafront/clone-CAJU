import React from "react";

const Money = ({price, click}) => {
    return (
        <div>
            <p style={{opacity:.7}} >R$</p>
            <p style={{fontSize: "1.3rem"}}>
               {click ? "•••••" : `${price},00`} 
            </p>
        </div>
    )
}

export default Money
