import React from "react";
import "./index.css";
import ContentText from "../../atoms/contentText";
import Title from "../../atoms/title";

const FlexibleValueModal = ({click, setClick}) => {
    let titleContent = "Valor flexível"
    let textContent = "A flexibilidade para transferências entre benefícios é definida pela sua empresa a cada nova recarga de créditos. Caso tenha alguma dúvida sobre o valor flexível, recomendamos que converse diretamente com seu RH. "
    return (
        click ? 
        <div className="modalBoxShadow" onClick={setClick}>
            <div className="modalBox">
                <Title className="modalBox__title" content={titleContent}/>
                <ContentText className="modalBox__text" content={textContent}/>
                <button onClick={setClick} className="modalBox__button">Entendi</button>
            </div>
        </div> : 
        <></>
    )
}

export default FlexibleValueModal