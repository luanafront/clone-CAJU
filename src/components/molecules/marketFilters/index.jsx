import React from "react";
import MarketFilter from "../../atoms/marketFilter";
import filters from "./filters";
import "./index.css"

const MarketFilters = ({scroll, subScroll}) => {
    let limitSubScroll = -63
    return (
        <>
            {
               (scroll < 1 && subScroll < limitSubScroll) && <div style={{height:50}}></div>
            }
            <ul id="marketFilters" className={`marketFilters ${scroll < 1 && subScroll < limitSubScroll ? "marketFilterFixed" : ""}`}>
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