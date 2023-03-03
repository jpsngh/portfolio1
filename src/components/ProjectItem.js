import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import JavascriptIcon from '@mui/icons-material/Javascript';
import Chip from "@mui/material/Chip"
const ProjectItem = ({image,name,desc,tech,align,icon}) => {
  return (
    <div className='projectItem' >
    <VerticalTimeline lineColor='black'  ><VerticalTimelineElement  iconStyle={{ background: "red", color: "#fff" }}
       className="vertical-timeline-element-education"
     date="2021"
       contentStyle={{ borderTop: "2px solid  red" }} icon={icon}  > 
    <Chip label={tech.map((key)=>(key +","))}> </Chip>
      <h3>{name}</h3> 
      <img src={image} alt='' width="100px"/> 
      <p>{desc}</p>

    </VerticalTimelineElement></VerticalTimeline>
    {tech.forEach((key)=>{return <div>{key}</div>})}
    </div>

  )
}

export default ProjectItem