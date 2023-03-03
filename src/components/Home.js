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
import Contact from './Contact';
const Home = () => {
  return (
    <div className='home'>
        
        <div className='about'>
 <h2 className='text'>  Jaganpreet 
                Singh </h2> 

        <div className='prompt'> 
       <p className='animation1'> Full Stack Developer</p>

       <a className='github' href="https://github.com/jpsngh">   <GitHubIcon></GitHubIcon> </a>
        <a href="https://linkedin.com/in/jpsngh">  <LinkedInIcon></LinkedInIcon> </a>

        
          </div>
        </div>
        <Experience></Experience>
        <About></About>
     
        <div className='skills'>
        <div className="wrapper">
  <h2 className='skill'>SKILLS </h2>
  <div className='pricing-table' >
    <div className="pricing-box">
  
      <span className="price">Client Side</span>

      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Material UI</li>
        <li>BootStrap</li>
        <li> JavaScript</li>
        <li>React JS</li>
        
      </ul>
    </div>
    <div className="pricing-box">
     
      <span className="price"> Server Side</span>
    
 
    
      <ul>
        <li>NodeJS</li>
        <li>Express Js</li>
        <li>FireBase</li>
        <li>MongoDb</li>
        <li>MySql</li>
      </ul>
    </div>
    <div className="pricing-box ">
      
      <span className="price">Other</span>


      <ul>
       
        <li>GIT</li>
        <li>GitHub</li>
        <li>Redux</li>
        <li>Context API</li>
        <li>Java</li>
      </ul>
    </div>
  </div>
</div>

        </div>
      <div className='tools'> <h1>Tools</h1>
     
      <div className="tools-list">
      <ul >
       <li> IDE : Visual Studio Code / Atom </li>
       <li> Project Management : JIRA </li>
       <li> Version Control : GIT </li>
       <li> Operating System : MACOS,Windows,Linux </li>
      </ul>
      </div>

       </div>
      
    </div>
    
  )
}

export default Home
