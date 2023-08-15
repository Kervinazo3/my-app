import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>¿Qué habilidades tengo?</h5>
      <h2>Mis experiencias</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend developement</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>CSS</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons"/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light"></small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>backend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons"/>
              <div>
                <h4>PHP</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons"/>
              <div>
                <h4>NODEJS</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons"/>
              <div>
                <h4>PostgreSQL</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons"/>
              <div>
                <h4>MySQL</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons"/>
              <div>
                <h4>NextJS</h4>
                <small className="text-light"></small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
