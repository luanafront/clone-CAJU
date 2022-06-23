import React from "react";
import MarketFilter from "../../atoms/marketFilter";
import filters from "./filters";
import "./index.css"

const MarketFilters = ({scroll, subScroll}) => {
    return (
        <ul id="marketFilters" className={`marketFilters ${scroll < 1 && subScroll < 1 ? "marketFilterFixed" : ""}`}>
            {filters.map((filter, index)=> {
                return (
                    <MarketFilter key={index} content={filter}/>
                )
            })}
        </ul>
    )
}

export default MarketFilters