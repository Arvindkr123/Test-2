import React from 'react'
import classes from './header.module.css'
import HeaderCartButton from './HeaderCartButton.jsx'
import shoe from '../../assets/shoes.jpg'
const Header = () => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>ReactShoes</h1>
                <HeaderCartButton />
            </header>
            <img src={shoe} className={classes['main-image']} alt="A table full of delicius food" />
        </React.Fragment>
    )
}

export default Header;
