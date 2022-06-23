import React from "react";

const ContentText = ({className, content, id="", onClick=() => {}}) => {
    return (
        <p id={id} className={className} onClick={onClick}>
             {content} 
        </p>
    )
}

export default ContentText