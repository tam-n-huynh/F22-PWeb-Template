import React from 'react';
import { useNavigate } from 'react-router-dom';
//images
import Image1 from '../images/SASEball.png';

//Components
import Header from './Header';

import './ExperiencePage.css';


const ExperiencePage = () => {
    let navigate = useNavigate();
    return (
        <div >
            <Header/>
            <section class="experiences">

                <div class="project">
                    <img src={Image1}/>
                    <h3>SASE - Member</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                         a type specimen book
                    </p>
                </div>


                <button onClick={() => {navigate("/")}} class="exp_btn">Go Home</button>
            </section>
        </div>
    )
}

export default ExperiencePage;
