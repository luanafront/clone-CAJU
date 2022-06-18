import React from "react";
import "./index.css"

const CardHeader = ({isFisicCard = true, virtualCard, fisicCard}) => {
    return (
        <header className="cardHeader">
            <div className="cardNamesBox cardHeader__names">
                <p onClick={fisicCard} className={isFisicCard ? "cardNamesBox__text--fisic" : "cardNamesBox__text--fisicClicked"}>CARTÃO FÍSICO</p>
                <p onClick={virtualCard} className={isFisicCard ? "cardNamesBox__text--virtual" : "cardNamesBox__text--virtualClicked"}>CARTÃO VIRTUAL</p>
            </div>
            <div className={isFisicCard ? "cardHeader__border" : "cardHeader__border--clicked"}></div>
        </header>
    )
}

export default CardHeader