import React from "react";
import "./style.scss";
import Home from "../../components/Home";
import Social from "../../components/Social";
import Profile from "../../components/Profile";
import Education from "../../components/Education";
import Skills from "../../components/Skills";
import Experience from "../../components/Experience";
import Certificate from "../../components/Certificates";
import Language from "../../components/Languages";
import Referance from "../../components/Referances";
import Interest from "../../components/Interest";

const Resume = () => {
  return (
    <>
      <div className="resume" id="cv">
        <div className="resume__left">
          <Home />
          <Social />
          <Profile />
          <Education />
          <Skills />
        </div>
        <div className="resume__right">
          <Experience />
          <Certificate />
          <Referance />
          <Language />
          <Interest />
        </div>
      </div>
    </>
  );
};

export default Resume;
