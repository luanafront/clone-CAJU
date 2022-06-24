import React from "react";
import MarketFilter from "../../atoms/marketFilter";
import filters from "./filters";
import "./index.css"

const MarketFilters = ({scroll, subScroll}) => {
    console.log(scroll)
    let limitSubScroll = -40
    return (
        <>
            {
               (scroll < 1 && subScroll < limitSubScroll) && <div style={{height:60}}></div>
            }
            <ul id="marketFilters" className={`marketFilters ${scroll <= 0 && subScroll < limitSubScroll ? "marketFilterFixed" : ""}`}>
                {filters.map((filter, index)=> {
                    return (
                        <MarketFilter key={index} content={filter}/>
                    )
                })}
            </ul>
        </>
    )
}

export default MarketFilters