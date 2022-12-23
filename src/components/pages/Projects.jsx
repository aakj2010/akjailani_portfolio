import React from 'react'
import Pinterest from '../Asset/Pinterest.png'
import gmail1 from '../Asset/gmail1.png'
import StackOverflow from '../Asset/StackOverflow.png'
import sof from '../Asset/sof.png'
import { FaCode, FaLink } from 'react-icons/fa'
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import CodeSharpIcon from '@mui/icons-material/CodeSharp';
import LinkSharpIcon from '@mui/icons-material/LinkSharp';
import './Pages.css'

function Projects() {
  return (
    <>
      <section id='projects' className='projects work'>
        <div>
          <h2 className="text-center mt-5 mb-5"><u>Projects</u></h2>
        </div>
        <div className='work_container container bd_grid '>

          <div class="work_img col-md-6" >
            <img src={Pinterest} alt="pinterest" class="src" />
            <div class="proHead">
              <p class="color"><strong><em>
                <h3>Pinterest Clone</h3>
              </em></strong></p>
            </div>
            <div style={{ fontSize: '18px' }}>
              React/ Bootstrap
              MongoDB/Express/Nodejs
            </div>
            <form class="project">
              <a rel="noopener" href="https://github.com/Ramraghul/Pizza_App_Frontend" target="_blank"><button type="button"
                class="Code"><CodeSharpIcon fontSize='small' /> Frontend</button></a>
              <a rel="noopener" href="https://pizza-hunt-my.netlify.app" target="_blank"><button type="button" class="Live">
                <LinkSharpIcon fontSize='small' /> Live</button></a>
              <a rel="noopener" href="https://github.com/Ramraghul/Pizza_App_Backend" target="_blank"><button type="button"
                class="Code"><CodeSharpIcon fontSize='small' /> Backend</button></a>
            </form>
          </div>

          <div class="work_img col-md-6">
            <img src={gmail1} alt="gmail" class="src" />
            <div class="proHead">
              <p class="color"><strong><em>
                <h3>Gmail Clone</h3>
              </em></strong></p>
            </div>
            <div style={{ fontSize: '18px' }}>
              React/ Context <br />
              Bootstrap
            </div>
            <form class="project">
              <a rel="noopener" href="https://github.com/Ramraghul/Pizza_App_Frontend" target="_blank"><button type="button"
                class="Code"><CodeSharpIcon fontSize='small' /> Frontend</button></a>
              <a rel="noopener" href="https://pizza-hunt-my.netlify.app" target="_blank"><button type="button" class="Live">
                <LinkSharpIcon fontSize='small' /> Live</button></a>
              <a rel="noopener" href="https://github.com/Ramraghul/Pizza_App_Backend" target="_blank"><button type="button"
                class="Code"><CodeSharpIcon fontSize='small' /> Backend</button></a>
            </form>
          </div>

          <div class="work_img col-md-6">
            <img src={sof} alt="stackoverflow" class="src" />
            <div class="proHead">
              <p class="color"><strong><em>
                <h3>Stackoverflow Clone</h3>
              </em></strong></p>
            </div>
            <div style={{ fontSize: '18px' }}>
              React/ Bootstrap/
              MongoDB/Express/Nodejs
            </div>
            <form class="project">
              <a rel="noopener" href="https://github.com/Ramraghul/Pizza_App_Frontend" target="_blank"><button type="button"
                class="Code"><CodeSharpIcon fontSize='small' /> Frontend</button></a>
              <a rel="noopener" href="https://pizza-hunt-my.netlify.app" target="_blank"><button type="button" class="Live">
                <LinkSharpIcon fontSize='small' /> Live</button></a>
              <a rel="noopener" href="https://github.com/Ramraghul/Pizza_App_Backend" target="_blank"><button type="button"
                class="Code"><CodeSharpIcon fontSize='small' /> Backend</button></a>
            </form>
          </div>

        </div>
      </section>
    </>
  )
}

export default Projects