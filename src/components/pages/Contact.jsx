import React from 'react'
import { FaLinkedin } from 'react-icons/fa'

function Contact() {
    return (
        <>
            <section id='contact' className='mt-5 mb-5'>
                <div>
                    <h2 className="text-center mt-5 mb-5"><u>Contact</u></h2>
                </div>
                <div className="text-center mb-5">
                    <h5 className='mt-3'>Mobile No: 8072056095</h5>
                    <h5 className='mt-3'>E-mail: dev.jailani@gmail.com</h5>
                    <h5 className='mt-3 contact-deatails'>
                        <a href="https://www.linkedin.com/in/dev-jailani/" target="_blank">LinkedIn: AK Jailani </a>
                    </h5>
                    <h5 className='mt-3 contact-deatails'>
                        <a href="https://github.com/aakj2010" target="_blank">GitHub: AK Jailani/aakj2010 </a>
                    </h5>
                </div>
            </section>
        </>
    )
}

export default Contact