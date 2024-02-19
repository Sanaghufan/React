import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div id="container1">
          <a href="#placements"><div>Placements</div></a>
          <a href="#facilities"><div>Facilities</div></a>
          <a href="#careers"><div>Careers</div></a>
          <a href="#alumni"><div>Alumni</div></a>
          <a href="#covocation"><div>Covocation</div></a>
          <a href="#sdgs"><div>SDGs@IGDTUW</div></a>
          <a href="#csd"><div>CSD</div></a>
          <a href="#newsletters"><div>Newsletters</div></a>
          <a href="#tech-collaborations"><div>Tech Collaborations</div></a>
          <a href="#g20"><div>G20@IGDTUW</div></a>
          <a href="#viksit-bharat"><div>Viksit Bharat@2047</div></a>
          <a href="#research-award"><div>Research Award</div></a>
        </div>

        <div id="container2">
          <div >
            <img id="collegeLogo" src="log.jpg" alt="Logo"></img>
          </div>
          <div id="collegeName" >
            <div id="heading1"><div>Indira Gandhi Delhi Technical University For Women</div></div>
            <div id="heading2">(Established by Govt. of Delhi vide Act 9 of 2012)</div>
            <div id="heading3">ISO 9001:2015 Certified University</div>
          </div>
          <div id="logo">
            <div id="sticker">
              <div><img src="g20-image.jpg" alt="Logo"></img></div>
              <div><img src="nationalflag.png" alt="Logo"></img></div>
              <div><img src="azadi.png" alt="Logo"></img></div>
            </div>
            <div id="link">
              <div><a href="https://www.facebook.com/igdtuw.delhi.5" target="_blank"><i className="fa fa-facebook"></i></a></div>
              <div><a href="https://www.youtube.com/channel/UCKmYhevZ59gJJP0ZbpReBKA" target="_blank"><i className='fa fa-youtube'></i></a></div>
              <div><a href="https://www.linkedin.com/school/indira-gandhi-delhi-technical-university-for-women-new-delhi/" target="_blank"><i className="fa fa-linkedin"  ></i></a></div>
            </div>
          </div>

        </div>
        <div id='container3' >
          <div>Home</div>
          <div>About Us</div>
          <div>Daepartments</div>
          <div>Academics</div>
          <div>Student Life</div>
          <div>Research</div>
          <div>Admissions</div>
          <div>Examinations</div>
        </div>
        <div className="moving text" id="container4">
          <marquee width="100%" direction="left" onmouseout="this.start();" onmouseover="this.stop();">
            <img src="new.gif" alt="" height="15px" width="15px"></img>
            <a href="https://www.igdtuw.ac.in/Updates.php?nid=2233" target="_blank">Advertisement for the post of JRF Automatic Approach for Real-Time Facial Recognition Using Deep Neural-Network (RTFR-DNN)</a>
          </marquee>

        </div>
        <div id="container5">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item">
                <img src="frontimg1.jpeg" alt="..."></img>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>...</h5>
                    <p>...</p>
                  </div>
              </div>
              <div className="carousel-item">
                <img src="frontimg2.jpeg" alt="..."></img>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>...</h5>
                    <p>...</p>
                  </div>
              </div>
              <div className="carousel-item">
                <img src="frontimg4.jpeg" alt="..."></img>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>...</h5>
                    <p>...</p>
                  </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
        <div></div>
        <div></div>


      </div>
    </>
  )
}

export default App
