import React from "react";
import OptionPage from "../../molecules/optionPage";
import "./index.css"
import options from "./options";

const Options = () => {
    return (
        <div className="options">
            {options.map((option, index)=> {
                return (
                    <OptionPage key={index} path={option.path} Icon={option.icon} text={option.label}/>
                )
            })}
        </div> 
    )
}

export default Options 