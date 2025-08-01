import React from 'react'
import Pin from '../Asset/Pin.jpg'
import gmail from '../Asset/gmail.png'
import sof from '../Asset/sof.png'
import ecomm from '../Asset/ecomm.jpg'
import behance from '../Asset/behance.png'
import comment from '../Asset/comment.png'
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

          <div class="work_img col-lg-3 col-md-4 col-sm-10" data-aos="fade-down" data-aos-duration="1000">
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
              <a rel="noopener noreferrer" href="https://pinterest-delta.vercel.app/" target="_blank"><button type="button" class="Live">
                <LinkSharpIcon fontSize='small' />View Live Site</button></a>
              <a rel="noopener noreferrer" href="https://github.com/aakj2010/pinterest" target="_blank"><button type="button"
                class="Code"><CodeSharpIcon fontSize='small' />Github Code</button></a>
              {/* <a rel="noopener noreferrer" href="https://github.com/aakj2010/pinterest-server" target="_blank"><button type="button"
                class="Code"><CodeSharpIcon fontSize='small' /> Backend Code</button></a> */}
            </form>
          </div>

         

          <div class="work_img col-md-6" data-aos="fade-down" data-aos-duration="1000">
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
              <a rel="noopener noreferrer" href="https://akj-gmail.netlify.app/" target="_blank"><button type="button" class="Live">
                <LinkSharpIcon fontSize='small' /> View Live Site</button></a>
              <a rel="noopener noreferrer" href="https://github.com/aakj2010/gmail_clone" target="_blank"><button type="button"
                class="Code"><CodeSharpIcon fontSize='small' />Github Code</button></a>
              {/* <a rel="noopener noreferrer" href="https://github.com/aakj2010/gmail_clone" target="_blank"><button type="button"
                class="Code"><CodeSharpIcon fontSize='small' /> Backend</button></a> */}
            </form>
          </div>

          {/* <div class="work_img col-lg-3 col-md-4 col-sm-10" >
            <img src={ecomm} alt="e-commerce" class="src" />
            <div class="proHead">
              <p class="color"><strong><em>
                <h3>E-Commerce</h3>
              </em></strong></p>
            </div>
            <div style={{ fontSize: '18px' }}>
              React/ Bootstrap
              MongoDB/Express/Nodejs
            </div>
            <form class="project">
              <a rel="noopener" href="http://13.233.163.63:8000" target="_blank"><button type="button" class="Live">
                <LinkSharpIcon fontSize='small' /> View Live Site</button></a>
              <a rel="noopener" href="https://github.com/aakj2010/Arima/tree/master/client" target="_blank"><button type="button"
                class="Code"><CodeSharpIcon fontSize='small' />Github Code</button></a>

            </form>
          </div> */}

          <div class="work_img col-md-6" data-aos="fade-down" data-aos-duration="1000">
            <img src={behance} alt="stackoverflow" class="src" />
            <div class="proHead">
              <p class="color"><strong><em>
                <h3>Fisdom Mobile Responsive App</h3>
              </em></strong></p>
            </div>
            <div style={{ fontSize: '18px' }}>
              Html/ Sass/ css
            </div>
            <form class="project">
              <a rel="noopener noreferrer" href="https://akj-behance.netlify.app" target="_blank"><button type="button" class="Live" >
                <LinkSharpIcon fontSize='small' />View Live Site</button></a>
              <a rel="noopener noreferrer" href="https://github.com/aakj2010/fintech" target="_blank" ><button
                className="Code"><CodeSharpIcon fontSize='small' />Github Code</button></a>

              {/* <a rel="noopener noreferrer" href="https://github.com/aakj2010/fintech" target="_blank"><button
                className="Code"><CodeSharpIcon fontSize='small' /> Backend</button></a> */}
            </form>
          </div>

          <div class="work_img col-md-6" data-aos="fade-up" data-aos-duration="1000">
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
              <a rel="noopener noreferrer" href="https://akj-sofc-c.netlify.app/" target="_blank"><button type="button" class="Live">
                <LinkSharpIcon fontSize='small' /> View Live Site</button></a>
              <a rel="noopener noreferrer" href="https://github.com/aakj2010/sofcfd" target="_blank" ><button
                className="Code"><CodeSharpIcon fontSize='small' />Github Code</button></a>

              {/* <a rel="noopener noreferrer" href="https://github.com/aakj2010/sofcbd" target="_blank"><button
                className="Code"><CodeSharpIcon fontSize='small' /> Backend</button></a> */}
            </form>
          </div>

          <div class="work_img col-lg-3 col-md-4 col-sm-10" data-aos="fade-up" data-aos-duration="1000">
            <img src={comment} alt="Comments" class="src" />
            <div class="proHead">
              <p class="color"><strong><em>
                <h3>Interactive Comment System</h3>
              </em></strong></p>
            </div>
            <div style={{ fontSize: '18px' }}>
              React/ Custom Hook
            </div>
            <form class="project">
              <a rel="noopener noreferrer" href="https://akj-comments.netlify.app/" target="_blank"><button type="button" class="Live">
                <LinkSharpIcon fontSize='small' /> View Live Site</button></a>
              <a rel="noopener noreferrer" href="https://github.com/aakj2010/comments" target="_blank"><button type="button"
                class="Code"><CodeSharpIcon fontSize='small' />Github Code</button></a>
            </form>
          </div>

        </div>
      </section>
    </>
  )
}

export default Projects