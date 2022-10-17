import React from 'react';

import SaseLogo from './../../images/sase_logo.png'
import './Header.css'

const Header = () => {
    return (
        <body>
            <header>
                <div class="logo">ALBERT</div>
                <nav class="nav">
                    <u1 class="nav__list">
                        <l1 class="nav__item"><a href="#" class="nav__link">Home</a></l1>
                        <l1 class="nav__item"><a href="#" class="nav__link">Portfolio</a></l1>
                        <l1 class="nav__item"><a href="#" class="nav__link">Contact</a></l1>
                    </u1>
                </nav>
            </header>
        </body>
    )
}

export default Header;