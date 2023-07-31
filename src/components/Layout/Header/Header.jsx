import style from "./header.module.scss";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styleActive from "./header.css";
import myLogo from "../../../assets/myLogo.png";

//assets

const Header = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const location = useLocation();

  useEffect(() => {
    const handlePageChange = () => {
      // Para obter a URL atual da página
      const currentURL = location.pathname;

      // Definir a página ativa correspondente com base na URL atual
      if (currentURL === "/") {
        setCurrentPage("home");
      } else if (currentURL === "/about") {
        setCurrentPage("about");
      } else if (currentURL === "/contact") {
        setCurrentPage("contact");
      }
    };

    // Evento para detectar mudanças de página
    window.addEventListener("popstate", handlePageChange);

    // Chamar a função para definir a página inicial
    handlePageChange();
  }, [location]);

  const handleNavItemClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <header className={style.header}>
      <Link
        to="/"
        className={currentPage === "home" ? style.homeActive : ""}
        onClick={() => setCurrentPage("home")}
      >
        <img src={myLogo} alt="" />
      </Link>
      <ul>
        <li
          className={currentPage === "home" ? "active" : ""}
          onClick={() => handleNavItemClick("home")}
        >
          <Link to="">Home</Link>
        </li>
        <li
          className={currentPage === "about" ? "active" : ""}
          onClick={() => handleNavItemClick("about")}
        >
          <Link to="/about">About</Link>
        </li>
        <li
          className={currentPage === "contact" ? "active" : ""}
          onClick={() => handleNavItemClick("contact")}
        >
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <button>
        <Link to="/contact">Let's talk</Link>
      </button>
    </header>
  );
  window.removeEventListener("popstate", handlePageChange);
};

export default Header;
