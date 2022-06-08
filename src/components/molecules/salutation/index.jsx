import React from "react";
import Title from "../../atoms/title";
import Eye from "../../atoms/eye";

const Salutation = () => {
    return (
        <>
            <div className="salutation mainHeader__title">
                <span className="salutation__text--hi">Oi, </span>
                <Title className={"salutation__text--name"} content={"Luana"}/>
            </div>
            <div className="visibility mainHeader__visibility">
                <Eye/>
            </div>
        </>
    )
}
export default Salutation