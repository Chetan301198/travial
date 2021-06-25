import React from "react";
import "./style.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const Interest = () => {
  const interestData = [
    {
      icon: FaFacebookF,
      desc: "facebook",
    },
    {
      icon: FaInstagram,
      desc: "instagram",
    },
    {
      icon: FaLinkedin,
      desc: "linkedin",
    },
    {
      icon: FaTelegram,
      desc: "telegram",
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
