import React from 'react';
import {useNavigate} from 'react-router-dom';


import Proj1 from '../../images/project1.png';
import Proj2 from '../../images/project2.png';

import './portfolio.css';

const Portfolio = () => {
    let navigate = useNavigate();

    return (
        <body id="portfolio" class="port__tile">
            <h1 class="port__title">Portfolio</h1>
            <section class="port__grid">
                <div class="proj">
                    <img src={Proj1}/>
                    <h3>React Personal Website</h3>
                </div>

                <div class="proj">
                    <img src={Proj2}/>
                    <h3>edYOU Mobile Application</h3>
                </div>

            </section>

            <div class="port-div">
                <button onClick={() => {navigate("/projects")}} class="port__btn">See More</button>
            </div>
        </body>
    )
}

export default Portfolio;
