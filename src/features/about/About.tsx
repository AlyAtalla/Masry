import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <section className="about">
      <h2>About This App</h2>
      <p>
        This app is designed to teach <strong>real Egyptian Arabic</strong>
        in a fun and interactive way. Learn phrases, expressions, and
        pronunciation that are actually used on the street!
      </p>
    </section>
  );
};

export default About;
