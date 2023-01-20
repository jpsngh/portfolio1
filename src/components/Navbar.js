import React,{useEffect,useState} from 'react'

import "../styles/Navbar.css"
import { Link,useLocation } from 'react-router-dom'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Navbar = () => {
    const location = useLocation();
    useEffect(() => {
     
    
      setExpandNavbar(false);
      
    }, [location])
    
    const [expandNavbar,setExpandNavbar] =useState(false)
  return (
    <div className='navbar' id={expandNavbar?"open":"close"}>
        <div className='toggleButton'>
        <Button variant="outlined" onClick={()=>{setExpandNavbar((prev)=>(!prev))}}  > <MenuOutlinedIcon/></Button>
        </div >
        
        <div className='links'>
  
        <Link color="inherit" className='exp-link' to="/"> Home </Link>
  <Link  color="primary" variant="inherit" className='project-link' to="/projects"> Projects </Link>
      
  </div>
  
   
    </div>
  )
}

export default Navbar
