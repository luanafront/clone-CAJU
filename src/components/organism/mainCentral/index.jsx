import React from "react";
import "./index.css";
import Actions from "../../molecules/actions";
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import Title from "../../atoms/title";


const MainCentral = () => {
    return (
        <>
            <Title className="mainCentral__title" content="AÇÕES"/>
            <Actions text="Transferir saldo entre benefícios" Icon={CompareArrowsIcon}/>
            <Actions text="Pagar boleto" Icon={RequestPageIcon}/>
        </>
       
    )
}

export default MainCentral