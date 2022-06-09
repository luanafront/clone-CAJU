import React from "react";
import ContentText from "../../atoms/contentText";
import "./index.css"

const TotalBenefit = ({value, click}) => {
    return (
        <div className="totalBenefitBox">
            <section className="totalBenefit">
                <ContentText className="totalBenefit__text" content="Total em benefícios"/>
                <p className="totalBenefit__price">
                    R$ {click ? "•••••" : `${value},00`} 
                </p>
            </section>
            <section className="totalBenefit">
                <ContentText className="totalBenefit__text--flex" content="Valor flexível"/>
                <p className="totalBenefit__price--flex">
                    R$ {click ? "•••••" : "0,00"}
                </p>
            </section>
        </div>
    )
}

export default TotalBenefit




