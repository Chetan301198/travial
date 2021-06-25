import React from "react";
import "./style.scss";

const Skills = () => {
  const skillsData = [
    {
      name: "html",
    },
    {
      name: "css",
    },
    {
      name: "javascript",
    },
    {
      name: "react",
    },
    {
      name: "wordpress",
    },
    {
      name: "node",
    },
  ];

  return (
    <>
      <div className="skills section">
        <h2 className="section-title">Skills</h2>

        <ul className="skills__content bd-grid">
          {skillsData.map((val) => {
            return (
              <li className="skills__name">
                <span className="skills__circle"></span>
                <span>{val.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Skills;
