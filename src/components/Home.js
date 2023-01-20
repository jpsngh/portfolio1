import React from 'react'
import "../styles/Home.css"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Experience from "./Experience.js"
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import About from './About';
const Home = () => {
  return (
    <div className='home'>
        
        <div className='about'>
 <h2 className='text'>  Jaganpreet 
                Singh </h2> 

        <div className='prompt'> 
       <p> Full Stack Developer</p>
       <a href="https://github.com/jpsngh">   <GitHubIcon></GitHubIcon> </a>
        <a href="https://linkedin.com/in/jpsngh">  <LinkedInIcon></LinkedInIcon> </a>
         <a href="mailto:jpatdesk@gmail.com"> <MarkEmailUnreadIcon ></MarkEmailUnreadIcon> </a>
        
          </div>
        </div>
        <Experience></Experience>
        <About></About>
        <div className='skills'>
        <div class="wrapper">
  <h2>SKILLS </h2>
  <div class="pricing-table">
    <div class="pricing-box">

      <span class="price">Client Side</span>

      <ul>
        <li>HTML</li>
        <li>Css</li>
        <li>Material UI</li>
        <li>BootStrap</li>
        <li>Vanilla JS</li>
        <li>React JS</li>
        <li>Redux</li>
      </ul>
    </div>
    <div class="pricing-box">
     
      <span class="price"> Server Side</span>
    
 
    
      <ul>
        <li>NodeJS</li>
        <li>Express</li>
        <li>MongoDb</li>
        <li>MySql</li>
      </ul>
    </div>
    <div class="pricing-box ">
      
      <span class="price">Other</span>


      <ul>
        <li>Java</li>
        <li>Python</li>
        <li>GIT</li>
        <li>C++</li>
        <li>TypeScript</li>
        <li>C</li>
      </ul>
    </div>
  </div>
</div>
        </div>
      
    </div>
  )
}

export default Home
