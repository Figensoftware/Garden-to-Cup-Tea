import React, { useState } from 'react'
import '../Styles/Header.css';
import logoImg from '../assets/naturelogo.png';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightIcon from '@mui/icons-material/Nightlight';
import Badge from '@mui/material/Badge';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { IoIosSearch } from "react-icons/io";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/authSlice';
import MenuIcon from '@mui/icons-material/Menu';
import { searchProducts } from '../store/productSlice';
import { setDrawer } from '../store/basketSlice';

function Header() {
    const [theme, setTheme] = useState(true);
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const { isAuthenticated } = useSelector(state => state.auth);
    const { products } = useSelector(state => state.basket);
    const dispatch = useDispatch();

    const handleSearch = (event) => {
        const searchQuery = event.target.value;
        setQuery(searchQuery)
        dispatch(searchProducts(searchQuery));
    }

    const changeTheme = () => {
        const root = document.getElementById('root');
        const dropdown = document.getElementById('dropdown');

        if (theme) {
            root.style.backgroundColor = 'black';
            root.style.color = '#fff';
            dropdown.style.backgroundColor = 'black'
        } else {
            root.style.backgroundColor = '#fff';
            root.style.color = 'black';
            dropdown.style.backgroundColor = '#fff';
        }
        setTheme(!theme);
    }

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#77a02a"
    }

    const handleLogout = () => {
        dispatch(authActions.logout());
        navigate('/');
    }

    return (
        <div className='header'>
            <div className='flex-row cursor'
                onClick={() => navigate('/')}
            >
                <img src={logoImg} alt="tea logo" className='logoImg' />
                <h1>Garden-to-Cup Tea</h1>
            </div>
            {/* over 1000 */}
            <div>
                <NavLink
                    to='/product-list'
                    className='menu'
                    style={({ isActive }) => isActive ? activeStyles : null}
                >Products</NavLink>
                <NavLink
                    to='/favorites'
                    className='menu'
                    style={({ isActive }) => isActive ? activeStyles : null}
                >Favorites</NavLink>
            </div>
            <div className="flex-row">
                <div className='input'>
                    <IoIosSearch className='icon' id='icon' />
                    <input type="text" placeholder='search something...' value={query} onChange={handleSearch} />
                </div>

                <div className='shape'>
                    {theme ?
                        <NightlightIcon className='icons' onClick={changeTheme} /> : <WbSunnyIcon className='icons' onClick={changeTheme} />}

                    <Badge badgeContent={products.length} color="success" onClick={() => dispatch(setDrawer())} >
                        <ShoppingBasketIcon className='icons' style={{ marginRight: "3px" }} />
                    </Badge>
                    <li>
                        <AccountBoxIcon className='icons' style={{ width: '25px', height: '25px', marginLeft: "5px", marginTop: "5px" }} />
                        <ul className="dropdown" id='dropdown'>
                            {isAuthenticated ? (
                                <li >
                                    <a className="link2" onClick={handleLogout}>Signout</a>
                                </li>
                            ) : (
                                <> <li >
                                    <a className="link1" onClick={() => navigate('/signin')}>Signin</a>
                                </li>
                                    <li >
                                        <a className="link2" onClick={() => navigate('/signup')}>Signup</a>
                                    </li>
                                </>
                            )}

                        </ul>
                    </li>
                    {/* under 1000 */}
                    <li className="bar">
                        <MenuIcon className='icons' style={{ width: '30px', height: '30px', marginLeft: '5px', }} />
                        <ul className='dropdown' id='dropdown'>
                            <NavLink
                                to='/product-list'
                                className='link1'
                            >Products</NavLink>
                            <NavLink
                                to='/favorites'
                                className='link2'
                            >Favorites</NavLink>
                        </ul>
                    </li>
                </div>
            </div>
        </div>

    )
}

export default Header;
