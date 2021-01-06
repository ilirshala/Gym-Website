import React from 'react';
import '../css/Navbar.css';
import logo from '../img/logo.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
                
            </div>

            <div className="navbar__navigation" >
                <ul style={{ transform: showMenu ? 'translateX(0px)' : '' }}>
                    <Link to="/"> <li>OUR FACILTY</li></Link>
                    <Link to="/rates"><li>RATES</li></Link>
                    <Link to="/gallery"><li>GALLERY</li></Link>
                    <Link to="/contact"><li>CONTACT</li></Link>




                </ul>
                <div className="shoppingCart">
                    <SearchIcon style={{ color: 'red', fontSize: '25px', fontWeight: 'bold', cursor: 'pointer' }} />
                    <p>|</p>
                    <ShoppingCartIcon style={{ fontSize: '25px', cursor: 'pointer' }} />
                    <span>0</span>
                </div>
                <div className="menuIcon">
                    <MenuOutlinedIcon onClick={() => setShowMenu(!showMenu)} className="menuIcon" style={{ color: 'white', fontSize: '40px' }} />
                </div>
            </div>
        </div>
    )
}

export default Navbar
