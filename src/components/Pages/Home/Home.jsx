import IgorPhoto from "../../../assets/Photos/IgorPhoto.jpg";
import style from "./home.scss";
import Experience from "../../UI/Infos/Experience/Experience";
import Education from "../../UI/Infos/Education/Education";
import star from "../../../assets/Star1.svg";
import detailIcon from "../../../assets/detailIcon.svg";
import btn from "../../../assets/Button.svg";
import MySelf from "../../UI/Infos/MySelf/MySelf";
import { useEffect } from "react";
import { getmyData } from "../../../myData";

const Home = () => {
  useEffect(() => {
    document.title = "CV Igor - Home";
  });
  const myData = getmyData();

  return (
    <div className="content_home">
      <div className="firstBlockInfo">
        <div className="box_photo">
          <img src={IgorPhoto} alt="" />
        </div>
        <div className="myInfos">
          <div className="myInfos_title">
            <img src={star} alt="" />
            <h1>Self-summary</h1>
            <img src={star} alt="" />
          </div>
          <div className="box_info">
            <img src={detailIcon} alt="" />
            <h2>{myData.name}</h2>
            <MySelf />
          </div>
        </div>
      </div>
      <div className="secondBlocInfo">
        <div className="box_experience">
          <h2>Experience</h2>
          <div>
            <h5>2021 - Current</h5>
            <h3>Marketing Manager</h3>
            <h4>Euronics Maia</h4>
          </div>
          <div>
            <h5>March 2020 - May 2020</h5>
            <h3>Digital Marketing Trainee</h3>
            <h4>Workforce-Agency</h4>
          </div>
        </div>
        <div className="box_education">
          <h2>Education</h2>
          <Education />
        </div>
      </div>
      <div className="lastBolckInfo">
        <div className="blockSocialMedia">
          <h1>Stay with me</h1>
          <p>Profiles</p>
          <div className="btn">
            <img src={btn} alt="" />
          </div>
        </div>
        <div className="blockContact" href="/contact">
          <img src={detailIcon} />
          <h1>
            Let’s work <span>together.</span>
          </h1>
          <div className="btn">
            <img src={btn} alt="" />
          </div>
        </div>
        <div className="blockAboutMe">
          <h1>More About me</h1>
          <p>Credentials</p>
          <div className="btn">
            <img src={btn} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
