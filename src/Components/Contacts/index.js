import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';


import './contacts.css'

const Contacts = () => {
    return (
        <body id="contacts" class="cont__tile">
            <h2 class="cont_title">Contact Me</h2>
            <section class="contacts">
                <div class="icon">
                <a href="https://www.linkedin.com/in/antoniovillarreal2024/" rel="noreferrer" target="_blank">
                    <LinkedInIcon></LinkedInIcon>
                </a>
                <a href="mailto:tonyjv10@gmail.com" rel="noreferrer" target="_blank">
                    <EmailIcon></EmailIcon>
                </a>
                <a href="https://github.com/Antonio-Villarreal" rel="noreferrer" target="_blank">
                    <GitHubIcon></GitHubIcon>
                </a>
                </div>
            </section>
        </body>
    )
}

export default Contacts;