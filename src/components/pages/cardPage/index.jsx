import React, {useState} from "react";
import CardHeader from "../../organism/card/cardHeader";
import CardCentral from "../../organism/card/cardCentral";

const CardPage = () => {
    const [isFisicCard, setIsFisicCard] = useState(true)
    
    const fisicCard = () => {
        setIsFisicCard(true)
    }
    const virtualCard = () => {
        setIsFisicCard(false)
    }
    return (
        <>
            <CardHeader isFisicCard={isFisicCard} virtualCard={virtualCard} fisicCard={fisicCard}/>
            <CardCentral/>
        </>
    )
}

export default CardPage