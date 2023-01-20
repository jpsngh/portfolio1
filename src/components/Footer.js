import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css"
const Footer = () => {
  return (
    <div className='footer'>
      <div className='social'>
      <GitHubIcon></GitHubIcon>
      <LinkedInIcon></LinkedInIcon>
      <p>&copy; JP</p>
      </div>
    </div>
  )
}

export default Footer
