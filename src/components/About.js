import React from "react";
import { DownloadOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "../styles/About.css";
import { Button } from "antd";
import { Avatar } from "@mui/material";
import Jp from "../assets/jp.jpeg";
import { Stack } from "@mui/material";
import { border, borderColor } from "@mui/system";


const About = () => {
  return (
    <div className="about2">
      <Stack
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={4}
      >
        <h1> ABOUT ME</h1>
        <Avatar
          src={Jp}
          sx={{ width: 126, height: 126, border: "50px", borderColor: "green" }}
        ></Avatar>
        <p>
          {" "}
          Computer science graduate with a strong foundation in full stack
          development using the MERN stack and an eagerness to learn and grow in
          a professional environment. Seeking an software development role where
          I can put my academic knowledge into practice, work with a team of
          experienced developers, and gain hands-on experience while making a
          meaningful contribution to the organization."
        </p>
        <div className="buttons">
          <Button
            className="button2"
            type="primary"
            shape="round"
            size="large"
          danger
          >
            <a size="large" href="/resume.pdf"   download="file">
            Resume
            </a>{" "}
          </Button>

          <Button
            className="button2"
            type="primary"
            shape="round"
            size="large"
            href="mailto:jpatdesk@gmail.com"
          >
            Hire Me
          </Button>
        </div>
      </Stack>
    </div>
  );
};

export default About;
