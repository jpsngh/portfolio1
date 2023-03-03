import React from "react";
import ProjectItem from "./ProjectItem";
import { ProjectList } from "../Helpers/ProjectList";
import "../styles/Projects.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Chip from "@mui/material/Chip";
import { Button } from "@mui/material";
import { Carousel } from "antd";
const Projects = () => {
  const contentStyle = {
    width: "300px",
    height: "300px",
    display: "flex",

   
  };
  return (
    <div className="projects">
      <h1> My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((key) => {
          return (
            <VerticalTimeline lineColor="black" className="projectItem">
              <VerticalTimelineElement
                iconStyle={{ background: "red", color: "#fff" }}
                className="vertical-timeline-element-education"
                date={ <Carousel autoplay className="carousel">
                  <div>
                    <h3 style={contentStyle}><img src={key.image}></img></h3>
                  </div>
                  <div>
                    <h3 style={contentStyle}><img src={key.image2}></img></h3>
                  </div>
                  <div>
                    <h3 style={contentStyle}><img src={key.image3}></img></h3>
                  </div>
                
                </Carousel>}
                intersectionObserverProps={key.desc}
                position={key.align}
                contentStyle={{
                  borderTop: "2px solid  red",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent:"center",
                   alignContent:"center",
                   flexWrap:"nowrap",
                   alignItems:"center",
                   gap:"10px"
                }}
                icon={key.icon}
              >
                <h3>{key.name}</h3>
                <img src={key.image} alt="" height="120px" width="180px"  />
                <p>{key.desc}</p>
                <div style={{display:"flex" ,gap:"5px"}}> 
                <Button href={key.github} variant="outlined" width="60px">
                  {" "}
                  GITHUB{" "}
                </Button>
                <Button href={key.deployed} variant="outlined" width="60px"> Live View </Button>
                </div>
                <Chip label={key.tech.map((key) => key + "  ")}> </Chip>
              </VerticalTimelineElement>{" "}
            </VerticalTimeline>
          );
        })}
      </div>
      <div>
        <h3> To be Continued </h3>
      </div>
    </div>
  );
};

export default Projects;
