import React from 'react'
// import { Link } from 'react-router-dom';
// import '../App.css';
import './MainPage.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Mainpage() {
    return (
        <>
            <div id='homepage' className="homepage">
                <div className='header'>
                    <h1>Ak Jailani</h1>
                    <p id='p1'>
                        MERN Stack Devoloper
                    </p>
                    <button type="button" className="btn btn-outline-dark text-bold">
                        <a href={require("../Asset/Resume.pdf")} className="resume" download="Resume">Resume</a>
                    </button>
                </div>
                <br />

                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <ul className="list-inline text-center">
                                <li className="list-inline-item">
                                    <a href="https://github.com/aakj2010" target="_blank" className='socialicons'>
                                        <FaGithub />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.linkedin.com/in/dev-jailani/" target="_blank" className='socialicons' >
                                        <FaLinkedin />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <br /><br /><br /><br /><br /><br />
                <div className='d-flex justify-content-center'>
                       <a href="#about"><i className="arrow down " ></i></a> 
                </div>

            </div>
        </>
    )
}

export default Mainpage