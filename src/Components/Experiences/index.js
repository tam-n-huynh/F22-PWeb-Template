import React from 'react';
import {useNavigate} from 'react-router-dom';

import Image1 from './../../images/microsoft.png';
import Image2 from './../../images/ufeng.jpg';
import Image3 from './../../images/publix.png';

import "./Experiences.css";

const Experiences = () => {
    let navigate = useNavigate();

    return (
        <body id="experiences">
            <h1 class="exp__title">Experience</h1>
            <div class="ornament"></div>
            <div class="exp__tile">
                <div class="exp__list">
                    {/* COPY PASTE FROM HERE */}
                    <div class="exp">
                        <img src={Image1}/>
                        <div class="exp__desc">
                            <h1 class="exp__name">Explorer Intern</h1>
                            <p class="exp__body">Microsoft Corporation</p>
                        </div>
                    </div>
                    {/* COPY PASTE END HERE */}
                    <div class="exp">
                        <img src={Image2}/>
                        <div class="exp__desc">
                            <h1 class="exp__name">Web Developer</h1>
                            <p class="exp__body">Florida Institute for Cybersecurity</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="exp-div">
                <button onClick={() => {navigate("/experiences")}} class="exp__btn">See More</button>
            </div>
        </body>

    )
}

export default Experiences;