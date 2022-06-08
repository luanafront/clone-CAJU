import React from "react";
import ContentText from "../../atoms/contentText";
import "./index.css"

const TotalBenefit = ({value}) => {
    return (
        <div>
            <section className="totalBenefit">
                <ContentText className="totalBenefit__text" content="Total em benefícios"/>
                <p className="totalBenefit__price">R$ {value},00</p>
            </section>
            <section className="totalBenefit">
                <ContentText className="totalBenefit__text--flex" content="Valor flexível"/>
                <p className="totalBenefit__price--flex">R$ 0,00</p>
            </section>
        </div>
    )
}

export default TotalBenefit