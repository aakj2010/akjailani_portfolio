// import React from 'react'
// import './Pages.css'
// import html from '../Asset/html.png'
// import css from '../Asset/css.png'
// import javascript from '../Asset/javascript.png'
// import bootstrap from '../Asset/bootstrap.png'
// import react from '../Asset/react.png'
// import redux from '../Asset/redux.png'
// import mysql from '../Asset/mysql.png'
// import mongodb from '../Asset/mongodb.png'
// import nodejs from '../Asset/nodejs.png'
// import postman from '../Asset/postman.png'
// import github from '../Asset/github.png'
// import ex from '../Asset/ex.png'
// import heroku from '../Asset/heroku.png'
// import netlify from '../Asset/netlify.png'
// import AWS from '../Asset/AWS.png'

// function Skill() {
//     let skill = [
//         {
//             // icon: <img src="./Asset/html.png" alt="" className="HTML" />
//             icon: <img src={html} alt="" className="HTML" />
//         },
//         {
//             icon: <img src={css} alt="" className="HTML" />
//         },
//         {
//             icon: <img src={javascript} alt="" className="HTML" />
//         },
//         {
//             icon: <img src={bootstrap} alt="" className="HTML" />
//         },
//         {
//             icon: <img src={react} alt="" className="HTML" />
//         },
//         {
//             icon: <img src={redux} alt="" className="HTML" />
//         },
//         {
//             icon: <img src={mysql} alt="" className="HTML" />
//         },
//         {
//             icon: <img src={mongodb} alt="" className="HTML" />
//         },
//         {
//             icon: <img src={nodejs} alt="" className="HTML" />
//         },
//         {
//             icon: <img src={ex} alt="" className='HTML' />
//         },
//         {
//             icon: <img src={postman} alt="" className="HTML" />
//         },
//         {
//             icon: <img src={github} alt="" className="HTML" />
//         },
//         {
//             icon: <img src={heroku} alt="" className='HTML' />
//         },
//         {
//             icon: <img src={netlify} alt="" className="HTML" />
//         },
//         {
//             icon: <img src={AWS} alt="" className="HTML" />
//         }
//     ]
//   return (
//     <>
//             {/* <SideBar /> */}
//             <section id='skill' className="skill">
//                 <h2 class="text-center mt-5"><u>Skills</u></h2>
//                 <div class="container">
//                     {/* <!-- p-lg-3 p-0 mb-lg-3 mb-0 --> */}
//                     <div class="row d-flex justify-content-center">
//                         {/* <img src={html} alt="" /> */}
//                         {
//                             skill.map((img) => {
//                                 return (
//                                     <>
//                                         <div class=" rounded shadow border-5 mb-2 mt-5 p-3 m-5" style={{ width: "7rem", height: "7rem" }} >
//                                             <li style={{ display: "inline" }}>
//                                                 {img.icon}
//                                             </li>
//                                         </div>
//                                     </>
//                                 )

//                             })
//                         }
//                     </div>
//                 </div>
//             </section>
//         </>
//   )
// }

// export default Skill



import React from 'react'
import './Pages.css'
import {
    SiCss3,
    SiJavascript,
    SiReact,
    SiBootstrap,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
} from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoNpm, IoLogoGithub } from "react-icons/io";

function Skill() {
    return (
        <>
            <section id="skill" className=''>
                <h2 className="text-center mt-5"><u>Skills</u></h2>
                <div className="container">
                    <br />
                    <br />
                    <div className="col-lg-12 col-10 skill-items">
                        <div data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000"
                            className="skill-container"
                            style={{ backgroundColor: "rgb(148, 89, 21)" }}
                        >
                            HTML
                            <TiHtml5 color="orange" size={35} />
                        </div>
                        <div data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000"
                            className="skill-container"
                            style={{ backgroundColor: "rgb(12, 58, 128)", gap: "3px" }}
                        >
                            CSS
                            <SiCss3 color="white" size={25} />
                        </div>
                        <div data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000"
                            className="skill-container"
                            style={{ backgroundColor: "rgb(133, 134, 38)", gap: "3px" }}
                        >
                            JavaScript
                            <SiJavascript color="rgb(245, 221, 7)" size={25} />
                        </div>
                        <div data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000"
                            className="skill-container"
                            style={{ backgroundColor: "rgb(87, 70, 105)", gap: "3px" }}
                        >
                            Bootstrap
                            <SiBootstrap color="#080135" size={30} />
                        </div>
                        <div data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000"
                            className="skill-container"
                            style={{ backgroundColor: "rgb(28, 92, 97)", gap: "3px" }}
                        >
                            React
                            <SiReact color="#61DBFB" size={27} />
                        </div>
                        <div data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000"
                            className="skill-container"
                            style={{ backgroundColor: "rgb(61, 21, 21)", gap: "3px" }}
                        >
                            Node
                            <SiNodedotjs color="#8f8f8f" size={30} />
                        </div>
                        <div data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000"
                            className="skill-container"
                            style={{ backgroundColor: "rgb(28, 61, 21)", gap: "3px" }}
                        >
                            Express
                            <SiExpress color="#9da39f" size={30} />
                        </div>
                        <div data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000"
                            className="skill-container"
                            style={{ backgroundColor: "rgb(48, 131, 32)", gap: "3px" }}
                        >
                            Mongodb
                            <SiMongodb color="#103d0e" size={30} />
                        </div>
                        <div data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000"
                            className="skill-container"
                            style={{ backgroundColor: "rgb(185, 0, 0)", gap: "3px" }}
                        >
                            <IoLogoNpm color="#fffffff" size={50} />
                        </div>
                        <div data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000"
                            className="skill-container"
                            style={{ backgroundColor: "rgb(133, 105, 105)", gap: "3px" }}
                        >
                            Github
                            <IoLogoGithub color="#171515" size={30} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skill