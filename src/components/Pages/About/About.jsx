import style from "./about.scss";
import IgorPhoto from "../../../assets/Photos/IgorPhoto.jpg";
import SocialMedias from "../../UI/SocialMedias/SocialMedias";
import Experience from "../../UI/Infos/Experience/Experience";
import Education from "../../UI/Infos/Education/Education";
import { Link } from "react-router-dom";
import MySelf from "../../UI/Infos/MySelf/MySelf";
import Skills from "../../UI/Infos/Skills/Skills";
import { useEffect } from "react";
import { getmyData } from "../../../myData";

const About = () => {
  useEffect(() => {
    document.title = "CV Igor - About";
  });
  const myData = getmyData();

  return (
    <div className="content_about">
      <div className="left_content_about">
        <img src={IgorPhoto} alt="" />
        <h2>{myData.name}</h2>
        <p>{myData.title}</p>
        <SocialMedias />
        <button>
          <Link to="/contact">Contact me</Link>
        </button>
      </div>
      <div className="right_content_about">
        <div className="about_me">
          <h1>About me</h1>
          <MySelf />
        </div>
        <div>
          <h1>Experience</h1>
          <Experience />
        </div>
        <div>
          <h1>Education</h1>
          <Education />
        </div>
        <div className="container_skills">
          <h1>Skills</h1>
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default About;
