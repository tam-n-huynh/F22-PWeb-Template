import React from 'react';
import {useNavigate} from 'react-router-dom';

import logo from '../../images/logo.PNG';


import './Header.css'

const Header = () => {
    let navigate = useNavigate();

    return (
        <body>
            <header>
                <img class="logo" src={logo}/>
                <nav class="nav">
                    <u1 class="nav__list">
                        <l1 class="nav__item" onClick={() => {navigate("/")}}><a href="#home" class="nav__link">Home</a></l1>
                        <l1 class="nav__item" onClick={() => {navigate("/")}}><a href="#experiences" class="nav__link">Experience</a></l1>
                        <l1 class="nav__item" onClick={() => {navigate("/")}}><a href="#portfolio" class="nav__link">Portfolio</a></l1>
                        <l1 class="nav__item" onClick={() => {navigate("/")}}><a href="#contacts" class="nav__link">Contact</a></l1>
                    </u1>
                </nav>
            </header>
        </body>
    )
}

export default Header;