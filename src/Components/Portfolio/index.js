import React from 'react';
import Proj from '../../images/project.png';

import './portfolio.css';

const Portfolio = () => {
    return (
        <body class="port__tile">
            <h1 class="port__title">Portfolio</h1>
            <section class="port__grid">
                <div class="proj">
                    <img src={Proj}/>
                    <h3>Project Name</h3>
                    <p>Short Descrption of the project. Hi this is some random description for this technical workshop.</p>

                </div>

                <div class="proj">
                    <img src={Proj}/>
                    <h3>Project Name</h3>
                    <p>Short Descrption of the project. Hi this is some random description for this technical workshop.</p>

                </div>
                
                <div class="proj">
                    <img src={Proj}/>
                    <h3>Project Name</h3>
                    <p>Short Descrption of the project. Hi this is some random description for this technical workshop.</p>

                </div>

            </section>

            <button class="port__btn">See More</button>
        </body>
    )
}

export default Portfolio;
