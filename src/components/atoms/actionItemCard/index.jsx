import React from "react";

const ActionItemCard = ({action}) => {
    return(
        <li className="actionItem actionsList__action" >
            <div className="actionItem__icon" >
                <action.Icon/>
            </div>
            <p className="actionItem__text" >{action.label}</p>
        </li>
    )
}

export default ActionItemCard