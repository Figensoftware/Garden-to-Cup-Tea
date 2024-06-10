import React, { useState } from 'react'
import '../Styles/Header.css';
import logoImg from '../assets/naturelogo.png';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightIcon from '@mui/icons-material/Nightlight';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { IoIosSearch } from "react-icons/io";
import AccountBoxIcon from '@mui/icons-material/AccountBox';

function Header() {
    const [theme, setTheme] = useState(true);

    const changeTheme = () => {
        const root = document.getElementById('root');
        if (theme) {
            root.style.backgroundColor = 'black';
            root.style.color = '#fff';
        } else {
            root.style.backgroundColor = '#fff';
            root.style.color = 'black';
        }
        setTheme(!theme);
    }


    return (
        <div className='header'>
            <div className='flex-row cursor'>
                <img src={logoImg} alt="tea logo" className='logoImg' />
                <h1>Garden-to-Cup Tea</h1>
            </div>
            <div>
                <a href="#" className='menu'>Prdoducts</a>
                <a href="#" className='menu'>Favorites</a>
            </div>
            <div className="flex-row">
                <div className='input'>
                    <IoIosSearch className='icon' id='icon' />
                    <input type="text" placeholder='search something...' />
                </div>
                <div>
                    {theme ?
                        <NightlightIcon className='icons' onClick={changeTheme} /> : <WbSunnyIcon className='icons' onClick={changeTheme} />}

                    <ShoppingBasketIcon className='icons' style={{ marginRight: "3px" }} />
                    <AccountBoxIcon className='icons' />
                </div>
            </div>
        </div>
    )
}

export default Header;
