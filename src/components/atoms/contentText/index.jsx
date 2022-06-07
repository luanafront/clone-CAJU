import React from "react";

const ContentText = ({class, conteudo}) => {
    return (
        <p className={class}>
             {conteudo} 
        </p>
    )
}

export default ContentText