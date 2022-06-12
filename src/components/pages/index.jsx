import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./mainPage";
import BenefitPage from "./benefitPage";

const Pages = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<MainPage/>}/>
                <Route path="/benefit-page/:benefitName" element={<BenefitPage/>}/>
            </Routes>
        </>
    )
}

export default Pages 