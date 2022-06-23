import React, {useState, useEffect} from "react";
import { fisicCardActions, virtualCardActions } from "./cardActions";
import ActionItemCard from "../../atoms/actionItemCard";


const ActionCardList = ({isFisicCard}) => {
    const [cardAction, setCardAction] = useState([])

    useEffect(() => {
        if (isFisicCard){
            setCardAction(fisicCardActions)
        } else {
            setCardAction(virtualCardActions)
        }
    }, [isFisicCard])
    return (
        <ul className="actionsList actionCard__actionsList" >
            {
                cardAction.map((action, index) => {
                    return(
                        <ActionItemCard key={index} action={action}/>
                    )
                })
            }
        </ul>
    )
}

export default ActionCardList