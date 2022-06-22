import React, {useEffect, useState} from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import MainPage from "./mainPage";
import BenefitPage from "./benefitPage";
import ProfilePage from "./profilePage";
import Options from "../organism/options";
import CardPage from "./cardPage";
import MarketPage from "./marketPage";

const Pages = () => {
    const location = useLocation()
    const [path, setPath] = useState(location.pathname)
    useEffect(() => {
        setPath(location.pathname)
    },[location])
    return (
        <>
            <Routes>
                <Route exact path="/" element={<MainPage/>}/>
                <Route path="/benefit-page/:benefitName" element={<BenefitPage/>}/>
                <Route path="/profile/" element={<ProfilePage/>}/>
                <Route path="/card/" element={<CardPage/>}/>
                <Route path="/market/" element={<MarketPage/>}/>
            </Routes>
            {path.includes("benefit-page") ? "" : <Options/> }
        </>
    )
}

export default Pages 