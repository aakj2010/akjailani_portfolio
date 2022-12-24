import React from 'react'
import Pin from '../Asset/Pin.jpg'
import gmail from '../Asset/gmail.png'
import sof from '../Asset/sof.png'
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

          <div class="work_img col-lg-3 col-md-4 col-sm-10" >
            <img src={Pin} alt="pinterest" class="src" />
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
              <a rel="noopener" href="https://github.com/aakj2010/pinterest" target="_blank"><button type="button"
                class="Code"><CodeSharpIcon fontSize='small' /> Frontend</button></a>
              <a rel="noopener" href="https://superb-daifuku-4177a8.netlify.app/" target="_blank"><button type="button" class="Live">
                <LinkSharpIcon fontSize='small' /> Live</button></a>
              <a rel="noopener" href="https://github.com/aakj2010/pinterest-server" target="_blank"><button type="button"
                class="Code"><CodeSharpIcon fontSize='small' /> Backend</button></a>
            </form>
          </div>

          <div class="work_img col-md-6">
            <img src={gmail} alt="gmail" class="src" />
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
              <a rel="noopener" href="https://github.com/aakj2010/gmail_clone" target="_blank"><button type="button"
                class="Code"><CodeSharpIcon fontSize='small' /> Frontend</button></a>
              <a rel="noopener" href="https://tourmaline-mandazi-02ffb1.netlify.app/" target="_blank"><button type="button" class="Live">
                <LinkSharpIcon fontSize='small' /> Live</button></a>
              <a rel="noopener" href="https://github.com/aakj2010/gmail_clone" target="_blank"><button type="button"
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
              <a  href="https://github.com/aakj2010/sofcfd" target="_blank"><button
                className="Code"><CodeSharpIcon fontSize='small' /> Frontend</button></a>
              <a href="https://superb-sprite-48c5a0.netlify.app" target="_blank"><button className="Live">
                <LinkSharpIcon fontSize='small' /> Live</button></a>
              <a href="https://github.com/aakj2010/sofcbd" target="_blank"><button
                className="Code"><CodeSharpIcon fontSize='small' /> Backend</button></a>
            </form>
          </div>

          {/* <div class="work_img col-lg-3 col-md-4 col-sm-10" >
            <img src={Pin} alt="pinterest" class="src" />
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
          </div> */}

        </div>
      </section>
    </>
  )
}

export default Projects