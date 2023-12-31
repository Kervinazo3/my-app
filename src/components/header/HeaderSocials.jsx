import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

const HeaderSocials = () => {
  return (
    <div className="header__sociales">
      <a href="https://www.linkedin.com/in/kervinazo3/" target="_blark">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Kervinazo3" target="_blark">
        <BsGithub />
      </a>
      <a href="#" target="_blark">
        <RiInstagramFill />
      </a>
    </div>
  );
};

export default HeaderSocials;
