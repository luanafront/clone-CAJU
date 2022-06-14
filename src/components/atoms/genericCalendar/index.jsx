import React from "react";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ContentText from "../contentText";
import "./index.css"

const GenericCalendar = () => {
    return (
        <div className="genericCalendar">
            <CalendarMonthOutlinedIcon/>
            <ContentText className="genericCalendar__text" content="Período"/>
        </div>
    )
}

export default GenericCalendar