import React from 'react';
import { useNavigate } from 'react-router-dom';
//images
import Project1 from "../../images/project1.png"
import Project2 from "../../images/project2.png"
import Project3 from "../../images/project3.png"

//Components
import Navbar from '../../Components/Navbar/Navbar';

import './ProjectPage.css';


const ProjectPage = () => {
    let navigate = useNavigate();
    return (
        <div >
            <Navbar/>
            <section class="projects">

                <div class="project">
                    <img src={Project1}/>
                    <h3>Project title</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                         a type specimen book
                    </p>
                </div>

                <div class="project">
                    <img src={Project2}/>
                    <h3>Project title</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                         a type specimen book
                    </p>
                </div>

                <div class="project">
                    <img src={Project3}/>
                    <h3>Project title</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                         a type specimen book
                    </p>
                </div>

                <button onClick={() => {navigate("/")}} class="proj_btn">Go Home</button>
            </section>
        </div>
    )
}

export default ProjectPage;
