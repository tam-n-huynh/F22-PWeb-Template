//Components
import React from 'react';

import Header from './Header';
import Introduction from './Introduction';
import Experiences from './Experiences';
import Portfolio from './Portfolio';
import Contacts from './Contacts';
import HeroSection from './HeroSection/HeroSection';
import Navbar from './Navbar/Navbar';

const HomePage = () => {

    return (
        <div class="App">

            <Navbar/>
            <HeroSection/>
            {/* <Introduction/> */}
            {/* <Experiences/>
            <Portfolio/> */}
            <Contacts/>
        </div>
    )
}

export default HomePage;