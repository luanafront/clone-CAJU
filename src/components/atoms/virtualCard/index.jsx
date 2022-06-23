import React from "react";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import visaLogoImg from "./images/visa-logo.png";


const VirtualCard = () => {
    return (
        <div className="virtualCard infoCard__box" >
            <div className="virtualCard__imgBox">
                <img className="virtualCard__img" src={visaLogoImg} alt=""/>
            </div>
            <div className="cardData virtualCard__cardDataBox">
                <p className="cardData__text--name">LUANA R L MEDEIROS</p>
                <div className="cardNumber cardData__cardNumber">
                    <p className="cardNumber__number">1234 5678 9012 3456</p>
                    <ContentCopyIcon/>
                </div>
            </div>
        </div>
    )
}

export default VirtualCard