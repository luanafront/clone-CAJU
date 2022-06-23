import React from "react";
import InfoCard from "../../../molecules/infoCard";
import ActionCardList from "../../../molecules/actionsCardList";
import "./index.css";

const CardCentral = ({isFisicCard = true}) => {
    return (
        <main className="cardCentral">
            <section className="infoCard cardCentral__section--infoCard">
               <InfoCard isFisicCard={isFisicCard}/>
            </section>
            <section className="actionCard cardCentral__section--actionCard">
                <ActionCardList isFisicCard={isFisicCard}/>
            </section>
        </main>
    )
}

export default CardCentral