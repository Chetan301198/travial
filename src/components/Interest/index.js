import React from "react";
import "./style.scss";
import { GiMeditation } from "react-icons/gi";
import { BiDumbbell } from "react-icons/bi";
import { BiBook } from "react-icons/bi";
import { FaPlane } from "react-icons/fa";

const Interest = () => {
  const interestData = [
    {
      icon: GiMeditation,
      desc: "meditation",
    },
    {
      icon: BiDumbbell,
      desc: "exercise",
    },
    {
      icon: BiBook,
      desc: "reading",
    },
    {
      icon: FaPlane,
      desc: "travel",
    },
  ];

  return (
    <>
      <section className="interest section">
        <h2 className="section-title">interest</h2>
        <div className="interest__container bd-grid">
          {interestData.map((val) => {
            return (
              <div className="interest__content">
                <val.icon className="interest__icon" />
                <span className="interest__name">{val.desc}</span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Interest;
