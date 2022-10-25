import React from 'react';
import ProfilePic from './../../images/headshot2.jpg';

import './intro.css';

const Introduction = () => {
    return (
        <body>
            <div class="tile__intro">
                <div class="intro">
                    <img class="self__image" src={ProfilePic}/>
                    <div class="intro__section">
                        <h1 class="intro__title">Hi, my name is Antonio Villarreal</h1>
                        <p class="intro__subtitle">Aspiring Software Engineer studying Computer Science at UF</p>
                        <p class="intro__memo">Proud Gator football fan and husband of Alberta. Go Gators!</p>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Introduction;