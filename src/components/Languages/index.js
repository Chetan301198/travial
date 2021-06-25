import React from "react";
import "./style.scss";

const Language = () => {
  const languages = [
    {
      name: "marathi",
    },
    {
      name: "marathi",
    },
    {
      name: "marathi",
    },
  ];
  return (
    <>
      <div className="language section">
        <h2 className="section-title">Language</h2>

        <ul className="language__content bd-grid">
          {languages.map((val) => {
            return (
              <li className="language__name">
                <span className="language__circle"></span>
                <span>{val.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Language;
