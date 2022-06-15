import React from "react";
import profileOptions from "./profileOptions";
import ProfileOption from "../../../atoms/profileOption";

const ProfileCentral = () => {
    return (
        <ul>
            {profileOptions.map((option,index)=>{
                return(
                    <ProfileOption Icon={option.Icon} content={option.text} link={option.link}/>
                )
            })}
        </ul>
    )
}

export default ProfileCentral