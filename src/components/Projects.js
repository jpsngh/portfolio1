import React from 'react'
import ProjectItem from './ProjectItem'
import { ProjectList } from '../Helpers/ProjectList'
import "../styles/Projects.css"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Chip from "@mui/material/Chip"
import { Button } from '@mui/material';
const Projects = () => {
  return (
    <div className='projects'>
        <h1> My Personal Projects</h1>
        <div className='projectList'>
  { ProjectList.map((key=>{ return   <VerticalTimeline lineColor='black' className='projectItem'  ><VerticalTimelineElement  iconStyle={{ background: "red", color: "#fff" }}
       className="vertical-timeline-element-education"
       date={ <Chip label={key.tech.map((key)=>(key +"  "))}> </Chip>}
       intersectionObserverProps={ key.desc}
      position={key.align}

       contentStyle={{ borderTop: "2px solid  red" }} icon={key.icon}  > 
   
   <h3>{key.name}</h3> 
       <img src={key.image} alt='' height="20px"/> 
       <p>{key.desc}</p>
       <Button variant='outlined'> GITHUB </Button>
    </VerticalTimelineElement> </VerticalTimeline> }))}
        </div> 
        <div>
          <h3> To be Continued </h3>
        </div>
      
    </div>
  )
}

export default Projects
