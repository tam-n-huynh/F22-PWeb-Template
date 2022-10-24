import React from 'react';
import ProfilePic from './../../images/Albert_Gator.png';

import './intro.css';

const Introduction = () => {
    return (
        <body>
            <div class="tile__intro">
                <div class="intro">
                    <img class="self_image" src={ProfilePic}/>
                    <div class="intro__section">
                        <h1 class="intro__title">Hi, my name is Albert Gator</h1>
                        <p class="intro__subtitle">UF Gators Mascot</p>
                        <p class="intro__memo">Proud Gator football fan and husband of Alberta. Go Gators!</p>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Introduction;