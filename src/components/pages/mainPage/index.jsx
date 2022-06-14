import React, {useEffect} from "react";
import MainCentral from "../../organism/main/mainCentral";
import MainHeader from "../../organism/main/mainHeader"
import MainFooter from "../../organism/main/mainFooter";

const MainPage = () => {
    useEffect(() => {
        let topColor = document.getElementById("topColor")
        topColor.content = "#ffffff"
    })
    return (
        <>
            <MainHeader/>
            <MainCentral/>
            <MainFooter/>
        </>
    )
}

export default MainPage