import React from "react";
import "./index.css"

const ProfileOption = ({Icon, content, link}) => {
    return (
        <li className="profileOption">
            <div className="profileOption__icon">
                <Icon />
            </div>
            <a href={link} target="_blank" className="profileOption__link">
               {content}
            </a>
        </li>
    )
}

export default ProfileOption