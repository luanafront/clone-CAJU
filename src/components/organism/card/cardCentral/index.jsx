import React from "react";
import cardFrontImg from "./images/caju-card-front.png";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import visaLogoImg from "./images/visa-logo.png";
import "./index.css";

const CardCentral = ({isFisicCard = true}) => {
    return (
        <main className="cardCentral">
            <section className="infoCard cardCentral__section--infoCard">
                {
                    isFisicCard ? 
                    <>
                        <div className="infoCardImgBox">
                            <img className="infoCard__image" alt="" src={cardFrontImg}/>
                        </div>
                    </> :
                    <>
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
                    </>
                }
                <div className="dateBox infoCard__box">
                    <p className="dateBox__text--label">Data de vencimento</p>
                    <p className="dateBox__text--date">
                        {
                            isFisicCard ? 
                            "10/2048" :
                            "11/2048"
                        }
                    </p>
                </div>
            </section>
            <section className="actionCard cardCentral__section--actionCard">
                <p>oi</p>
            </section>
        </main>
    )
}

export default CardCentral