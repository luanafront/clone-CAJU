import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Eye = ({click, toggleEye}) => {
   
    return (
        click ? 
        <VisibilityOffIcon onClick={toggleEye}/> :
        <VisibilityIcon onClick={toggleEye} />
    )
}

export default Eye 