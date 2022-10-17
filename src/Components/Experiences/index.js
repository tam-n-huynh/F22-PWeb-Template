import React from 'react'
import Image1 from './../../images/SASEball.png';
import Image2 from './../../images/azure.png';
import Image3 from './../../images/publix.png';

import "./Experiences.css";

const Experiences = () => {
    return (
        <body>
            <h3 class="exp__title">Experiences</h3>
            <div class="ornament"></div>
            <div class="exp__tile">
                <div class="exp__list">
                    {/* COPY PASTE FROM HERE */}
                    <div class="exp">
                        <img src={Image1}/>
                        <div class="exp__desc">
                            <h1 class="exp__name">SASE - Technical Chair</h1>
                            <p class="exp__body">Does whatever technical chair does</p>
                        </div>
                    </div>
                    {/* COPY PASTE END HERE */}
                    <div class="exp">
                        <img src={Image2}/>
                        <div class="exp__desc">
                            <h1 class="exp__name">Azurion - SWE Intern</h1>
                            <p class="exp__body">Developed middle end super cloud server. </p>
                        </div>
                    </div>

                    <div class="exp">
                        <img src={Image3}/>
                        <div class="exp__desc">
                            <h1 class="exp__name">Publix - Self Checkout Intern</h1>
                            <p class="exp__body">Helped customers find coupons on the blockchain</p>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Experiences;