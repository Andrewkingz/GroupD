import React from 'react'
import './Header.css'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const Header = () => {
    return(
        <div className='Header'>
            <div>LOGO</div>
            <div className='Navs'>
                <a href='#' >Home</a>
                <a href='#' >About</a>
                <a href='#' >Best Deals</a>
                <a href='#' >Tools</a>
                <a href='#' >Contact</a>
            </div>

            <div className='Burger'>

            <MenuOpenIcon />
            </div>

           


        </div>




    );
}
export default Header