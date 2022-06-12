import React, {useState} from "react";
import ContentText from "../../atoms/contentText";
import FlexibleValueModal from "../flexibleValueModal";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import "./index.css"

const TotalBenefit = ({value, click}) => {
    const [modal, setModal] = useState(false)
    const clickModal = () => {
        setModal(!modal)
    }
    return (
        <div className="totalBenefitBox">
            <FlexibleValueModal click={modal} setClick={clickModal} />
            <section className="totalBenefit">
                <ContentText className="totalBenefit__text" content="Total em benefícios"/>
                <p className="totalBenefit__price">
                    R$ {click ? "•••••" : `${value},00`} 
                </p>
            </section>
            <section className="totalBenefit">
                <div className="totalBenefit__textBox">
                    <ContentText onClick={clickModal} className="totalBenefit__text--flex" content="Valor flexível"/>
                    <HelpOutlineIcon onClick={clickModal}/>
                </div>
                <p className="totalBenefit__price--flex" >
                    R$ {click ? "•••••" : "0,00"}
                </p>
            </section>
        </div>
    )
}

export default TotalBenefit




