import React, { useEffect, useState } from 'react'
import { FaBars, FaRegWindowClose} from 'react-icons/fa'
import './SideBar.css'

function SideBar() {
    const [show, setShow] = useState(false);
    const [icon, setIcon] = useState(<FaBars />)

    const ShowSideBar = () => {
        setShow(!show);
    };

    useEffect(() => {

        show ? setIcon(<FaRegWindowClose/>) : setIcon(<FaBars />);

    }, [show]);

    return (
        <aside className="">
            <div className='menuicon'>
                <button onClick={ShowSideBar}>{icon}</button>
            </div>
            <nav>
                {
                    show ?
                        (<ul className='list-items'>
                            <li >
                                <a href="#homepage">Home</a>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#skill">Skills</a>
                            </li>
                            <li>
                                <a href="#projects">Projects</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>

                        </ul>) : ("")
                }
            </nav>
        </aside>
    )
}

export default SideBar