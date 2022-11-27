import Moon from '/image/moon.png';
import Sun from '/image/sun.png';
import { useState } from 'react';
import '../styles/componentes/Theme.sass'

const Theme = () => {

    const [ darkMode, setDarkmode ] = useState(false);

    const alterTheme = () => {
        setDarkmode(!darkMode)
    }

    return (    
        <div className='theme__container'>
            <button onClick={alterTheme}  type='submit' className={darkMode ? 'dark__mode' : 'light__mode' }>
                <img src={darkMode ? Moon : Sun} alt="" className='image__button'/>
                
            </button> 
        </div>

    )
}

export default Theme