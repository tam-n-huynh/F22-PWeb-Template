import React from 'react';
import ProfilePic from './../../images/headshot2.jpg';
import './intro.css';

const Introduction = () => {
    return (
        <body>
            <div class="tile__intro">
                <div class="intro">
                    <img class="self__image" alt='' src={ProfilePic}/>
                    <div class="intro__section">
                        <h1 class="intro__title">Hi, my name is Antonio Villarreal</h1>
                        <p class="intro__subtitle">Aspiring Software Engineer Studying CS at UF</p>
                        {/* <p class="intro__memo">Proud Gator football fan and husband of Alberta. Go Gators!</p> */}
                        <div>
                            <h2>Languages</h2>
                                <span>C++, Java, TypeScript, JavaScript, Python, SQL</span>
                        </div>
                        <div>
                            <h2> Front-End</h2>
                                <span>ReactJS (MaterialUI, Redux), Angular, Flutter, HTML, CSS </span>
                        </div>
                        <div>
                            <h2>Back-End</h2>
                                <span> NodeJS, GraphQL, MySQL, MongoDB, AWS, Azure, Docker</span>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Introduction;