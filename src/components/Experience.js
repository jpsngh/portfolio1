import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkIcon from '@mui/icons-material/Work';
import StarsIcon from '@mui/icons-material/Stars';
const Experience = () => {
  return (
    <div className="experience">
      <div align="center" className="text">
        {" "}
        <h2>Education and Work Experiences</h2>{" "}
      </div>
      <VerticalTimeline lineColor="blue">
        <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="2015 - 2019"
          iconStyle={{ background: "#3e497b", color: "#fff" }}
          contentStyle={{ borderTop: "2px solid  rgb(33, 150, 243)" }}
  
          icon={<SchoolOutlinedIcon></SchoolOutlinedIcon>}
        >
          <h3> Bachelor of Engineering in Computer Science</h3>
          <h4>
            <LocationOnOutlinedIcon> </LocationOnOutlinedIcon> India
          </h4>
          <p> MBS COLLEGE OF ENGINEERING AND TECHNOLOGY</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element-work"
          date="2020 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon ></WorkIcon>}
          contentStyle={{ borderTop: "3px solid  gray" }}
        >
          <h3> Web Developer</h3>
          <h4>
            <LocationOnOutlinedIcon> </LocationOnOutlinedIcon> India
          </h4>
          <p> Tech Mahindra</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="2021 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolOutlinedIcon></SchoolOutlinedIcon>}
          contentStyle={{ borderTop: "3px solid  red" }}
        >
          <h3> Mobile Application Developer</h3>
          <h4>
            <LocationOnOutlinedIcon> </LocationOnOutlinedIcon> Canada
          </h4>
          <p> Canadore College</p>
        </VerticalTimelineElement>
    
      <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="2021 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolOutlinedIcon></SchoolOutlinedIcon>}
          contentStyle={{ borderTop: "3px solid  red" }}
        >
          <h3> Project Management</h3>
          <h4>
            <LocationOnOutlinedIcon> </LocationOnOutlinedIcon> Canada
          </h4>
          <p> Canadore College</p>
        </VerticalTimelineElement >
        <VerticalTimelineElement lineColor="white"  iconStyle={{ background: "#3e297a", color: "white", }} icon={<StarsIcon></StarsIcon>}></VerticalTimelineElement>
      </VerticalTimeline>
      
      
    </div>
  );
};

export default Experience;
