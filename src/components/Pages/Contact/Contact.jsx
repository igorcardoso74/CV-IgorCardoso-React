//import style from "./contact.module.scss";
import mailIcon from "../../../assets/Icons/contactIcon/mailIcon.svg";
import phoneIcon from "../../../assets/Icons/contactIcon/phoneIcon.svg";
import locationIcon from "../../../assets/Icons/contactIcon/locationIcon.svg";
import SocialMedias from "../../UI/SocialMedias/SocialMedias";
import detailIcon from "../../../assets/detailIcon.svg";
import css from "./contact.scss";
import { useEffect, useState } from "react";
import emailJs from "@emailjs/browser";
import { getmyData } from "../../../myData";

//import formContact from "../UI/Forms/Form";

const Contact = () => {
  useEffect(() => {
    document.title = "CV Igor - Contact";
  });
  const myData = getmyData();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "") {
      alert("Fill in all fields!");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailJs
      .send(
        "service_ti2kteh",
        "template_u51zned",
        templateParams,
        "a4h50ljhdAqI7fJbs"
      )
      .then((response) => {
        console.log("e-mail enviado", response.status, response.text);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      }),
      (err) => {
        console.log("Erro:", err);
      };
  }

  return (
    <div className="container_contact">
      <div className="container_info">
        <div>
          <h1>Contact info</h1>
          <div>
            <div className="rectangle">
              <img src={mailIcon} />
            </div>
            <div>
              <h2>E-mail</h2>
              <p>{myData.email}</p>
            </div>
          </div>
          <div>
            <div className="rectangle">
              <img src={phoneIcon} alt="" />
            </div>
            <div>
              <h2>Contact me</h2>
              <p>{myData.phone}</p>
            </div>
          </div>
          <div>
            <div className="rectangle">
              <img src={locationIcon} alt="" />
            </div>
            <div>
              <h2>Location</h2>
              <p>{myData.location}</p>
              <p>{myData.country}</p>
            </div>
          </div>
        </div>
        <div>
          <h1>SOCIAL INFO</h1>
          <SocialMedias />
        </div>
      </div>
      <div className="container-form">
        <form onSubmit={sendEmail}>
          <div>
            <h1>
              Let’s work <span>together.</span>
            </h1>
            <img src={detailIcon} />
          </div>
          <div className="form_inputs">
            <div>
              <input
                type="text"
                placeholder="Name *"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="E-mail *"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Your Subject *"
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
              />
            </div>
            <div>
              <input
                type="text"
                className="input_form"
                placeholder="Your message *"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
            </div>
            <div className="btn">
              <input
                className="btn_form"
                type="submit"
                placeholder="SEND Message"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
