import React from "react";
import ContentText from "../../atoms/contentText";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./index.css"

const Actions = ({text, Icon}) => {
    return (
        <div className="action">
            <div>
                <div className="action__icon">
                    <Icon/>
                </div>
                <ContentText className="action__text" content={text}/>
            </div>
            <div className="action__icon--arrow">
                <ArrowForwardIosIcon/>
            </div>
        </div>
    )
}

export default Actions