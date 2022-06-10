import React from "react";
import Title from "../../../atoms/title";
import ContentText from "../../../atoms/contentText";
import "./index.css"

const MainFooter = () => {
    return (
        <footer className="mainFooter">
            <Title className="mainFooter__title" content="ÚLTIMAS TRANSAÇÕES"/>
            <div className="mainFooter__textBox">
                <ContentText className="mainFooter__text" content="Nenhuma transação"/>
            </div>
        </footer>
    )
}

export default MainFooter
