import style from "./socialMedia.scss";
import instagramIcon from "../../../../src/assets/Icons/socialIcon/instagramIcon.svg";
import githubIcon from "../../../../src/assets/Icons/socialIcon/githubIcon.svg";
import linkedinIcon from "../../../../src/assets/Icons/socialIcon/linkedinIcon.svg";

const SocialMedias = () => {
  return (
    <div className="content-socialmedial">
      <div>
        <a
          className="box-social"
          href="https://pt.linkedin.com/in/igoremcardoso"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinIcon} alt="" />
        </a>
      </div>
      <div>
        <a
          className="box-social"
          href="https://github.com/igorcardoso74/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="" />
        </a>
      </div>
      <div>
        <a
          className="box-social"
          href="https://www.instagram.com/igorcardoso74/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramIcon} alt="" />
        </a>
      </div>
    </div>
  );
};

export default SocialMedias;
