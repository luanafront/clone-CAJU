import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./mainPage";

const Pages = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<MainPage/>}/>
            </Routes>
        </>
    )
}

export default Pages 