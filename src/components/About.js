import React from 'react'
import {Link} from "react-router-dom"
import "../styles/About.css"
import { Button } from '@mui/material'
import {Avatar } from '@mui/material'
import Jp from "../assets/jp.jpeg"
import {Stack} from '@mui/material'

const About = () => {
  return (
    <div className='about2'>
<Stack
  direction="column"
  justifyContent="space-evenly"
  alignItems="center"
  spacing={4}
>
<h1> ABOUT ME</h1>
<Avatar   src={Jp} sx={{ width: 126, height: 126 }} ></Avatar>
<p > Enthusiastic Web Developer having problem
solving and solution driven skills with the ability to
perform in collaborative work environment. </p>
<div  className='buttons'>
    <button><a className="button"href="/resume.pdf" download="file">Resume</a> </button>
                    
                    <Button className='button2'variant='outlined' size="large" href='mailto:jpatdesk@gmail.com'>Hire Me</Button>
                </div>
</Stack>
        
    </div>
  )
}

export default About