import React, {useState} from "react";
import SearchIcon from '@mui/icons-material/Search';
import ContentText from "../contentText";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import "./index.css"

const GenericInput = () => {
    const [click, setClick] = useState(true)
    return (
        click ? 
        <div className="genericInput" onClick={()=> {
            setClick(false)
        }}>
            <SearchIcon/>
            <ContentText className="genericInput__text" content="Buscar"/>
        </div> 
        :
        <div className="genericInput__box">
            <input autoFocus className="genericInput__input" type="text" onBlur={()=> {
                setClick(true)
            }}/>
          <CloseOutlinedIcon/>
        </div>
    )
}

export default GenericInput