import React from "react";

const ContentText = ({className, content, onClick=() => {}}) => {
    return (
        <p className={className} onClick={onClick}>
             {content} 
        </p>
    )
}

export default ContentText