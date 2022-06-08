import React, {useState} from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Eye = () => {
    const [click, setClick] = useState(false)

    const toggleEye = () => {
        setClick(!click)
    }
    return (
        click ? 
        <VisibilityOffIcon onClick={toggleEye}/> :
        <VisibilityIcon onClick={toggleEye} />
    )
}

export default Eye 