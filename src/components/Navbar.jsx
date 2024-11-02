import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import ptulogo from "./ptu-logo.png"
import Home from '../pages/Home';
import { Link, NavLink } from 'react-router-dom';


function Navbar() {

    const [isOpen, setISOpen] = useState(false);

    const toggleMenu = () => {
        setISOpen(!isOpen);
    };




    return (
        <>
            <header>
                <div className={isOpen ? "tap" : "tab-back"} onClick={toggleMenu}></div>

                <div className='container'>
                    <nav>
                        <div className="ptulogo">
                            <img src={ptulogo} alt="" />
                        </div>
                        <div className='logo'>
                            <h2>Puducherry Technological University (EEE)</h2>
                        </div>
                        <div className='logo1'>
                            <h2>PTU (EEE)</h2>
                        </div>
                        <ul className={isOpen ? "nav-link active" : "nav-link"}>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/curriculum">Curriculum</NavLink></li>
                            <li><NavLink to="/events">Events</NavLink></li>
                            <li><NavLink to="/tandp">T & P</NavLink></li>
                            <li><NavLink to="/feedback">Feedback</NavLink></li>
                        </ul>
                        <div className="icon"  onClick={toggleMenu}>
                            <FaBars />
                        </div>
                    </nav>
                </div>
            </header>
            
            

            
        </>
    )
}

export default Navbar