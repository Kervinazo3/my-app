import React from "react";
import "./nav.css";
import { AiFillHome } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { FcServices } from "react-icons/fc";
import { BiMessage } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
  const [activeNav, SetactiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => SetactiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiFillHome />
      </a>
      <a
        href="#about"
        onClick={() => SetactiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FaUserCircle />
      </a>
      <a
        href="#experience"
        onClick={() => SetactiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => SetactiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <FcServices />
      </a>
      <a
        href="#contact"
        onClick={() => SetactiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessage />
      </a>
    </nav>
  );
};

export default Nav;
