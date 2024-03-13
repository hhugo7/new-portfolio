import React from 'react';
import '../css/navbar.css';

function Navbar(props) {
    return (
        <div className='NavBar'>
            <li><a>Home</a></li>
            <li><a>Cv</a></li>
            <li><a>Stage</a></li>
            <li><a>Projets</a></li>
            <li><a>Compétences</a></li>
            <li><a>Certifications</a></li>
        </div>
    );
}

export default Navbar;