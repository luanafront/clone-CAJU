import React from "react";
import MainCentral from "../../organism/main/mainCentral";
import MainHeader from "../../organism/main/mainHeader"
import MainFooter from "../../organism/main/mainFooter";

const MainPage = () => {
    return (
        <>
            <MainHeader/>
            <MainCentral/>
            <MainFooter/>
        </>
    )
}

export default MainPage