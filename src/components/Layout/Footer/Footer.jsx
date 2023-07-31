import style from "./footer.module.scss";
import { Link } from "react-router-dom";
import myLogo from "../../../assets/myLogo.png";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <img src={myLogo} />
      <ul>
        <li>
          <Link to="">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div>© All rights reserved by Igor Cardoso</div>
    </footer>
  );
};
export default Footer;
