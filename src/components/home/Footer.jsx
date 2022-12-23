import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import '../pages/Pages.css'

function Footer() {
    return (
        <>
            <div className='footer text-center'>
                <h2 className='mt-5'>Ak Jailani</h2>
                <div className='footer-icon'>
                    <a href="https://github.com/aakj2010" target="_blank"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/dev-jailani/" target="_blank"><FaLinkedinIn /></a>
                </div>
                <div>
                    <p style={{fontWeight:'500'}}> &#169; copyright Ak Jailani</p>
                </div>
            </div>
        </>
    )
}

export default Footer