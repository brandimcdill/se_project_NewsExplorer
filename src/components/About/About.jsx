import React from "react";
import "./About.css";
import brandiAvatar from "../../assets/brandi-avatar.jpg";

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <div className="about__avatar-container">
          <img
            className="about__avatar"
            src={brandiAvatar}
            alt="Brandi - Full-Stack Software Engineer"
          />
        </div>

        <div className="about__text-content">
          <h2 className="about__title">About the author</h2>
          <p className="about__paragraph">
            Hello! I'm Brandi, a Full-Stack Software Engineer with a deep passion for building
            robust, end-to-end web applications and exploring the intricate world of digital
            infrastructure. From architecting secure server gateways to creating fluid user
            experiences, I love breaking down complex puzzles.
          </p>
          <p className="about__paragraph">
            Through my journey mastering modern development practices, I've engineered persistent
            database structures, automated tracking pipelines, and responsive interface matrices.
            When I'm not writing clean code blocks, you can find me reading up on cybersecurity
            trends or diving into tech literature!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
