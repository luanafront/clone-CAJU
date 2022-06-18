import React from "react";
import cardFrontImg from "./images/caju-card-front.png";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import visaLogoImg from "./images/visa-logo.png";
import { fisicCardActions, virtualCardActions } from "./cardActions";
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
                <div className="subInfo infoCard__box">
                    <p className="subInfo__text--label">Data de vencimento</p>
                    <p className="subInfo__text--date">
                        {
                            isFisicCard ? 
                            "10/2048" :
                            "11/2048"
                        }
                    </p>
                </div> 
                {
                    isFisicCard ? <></> :
                    <div className="subInfo infoCard__box">
                        <p className="subInfo__text--label">Código de segurança</p>
                        <p className="subInfo__text--date">123</p>
                    </div>
                }
            </section>
            <section className="actionCard cardCentral__section--actionCard">
                <ul className="actionsList actionCard__actionsList" >
                    {
                        isFisicCard ? 
                        fisicCardActions.map((action, index) => {
                            return(
                                <li className="actionItem actionsList__action" >
                                    <div className="actionItem__icon" >
                                        <action.Icon/>
                                    </div>
                                    <p className="actionItem__text" >{action.label}</p>
                                </li>
                            )
                        })
                        :
                        virtualCardActions.map((action, index) => {
                            return(
                                <li className="actionItem actionsList__action" >
                                    <div className="actionItem__icon" >
                                        <action.Icon/>
                                    </div>
                                    <p className="actionItem__text" >{action.label}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        </main>
    )
}

export default CardCentral