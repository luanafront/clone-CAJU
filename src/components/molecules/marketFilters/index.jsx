import React from "react";
import MarketFilter from "../../atoms/marketFilter";
import filters from "./filters";
import "./index.css"

const MarketFilters = () => {
    return (
        <ul className="marketFilters">
            {filters.map((filter, index)=> {
                return (
                    <MarketFilter content={filter}/>
                )
            })}
        </ul>
    )
}

export default MarketFilters