import React, { useDebugValue } from "react";
import "./style.scss";
import profile from "../../assets/my-img.jpg";
import { BiMap } from "react-icons/bi";
import { BiEnvelope } from "react-icons/bi";
import { BiPhone } from "react-icons/bi";

const Home = () => {
  const homeInfo = [
    {
      icon: BiMap,
      desc: "Mumbai",
    },
    {
      icon: BiEnvelope,
      desc: "cbhalerao567@gmail.com",
    },
    {
      icon: BiPhone,
      desc: "9594857472",
    },
  ];

  return (
    <>
      <div className="home">
        <div className="home__container section bd-grid">
          <div className="home__data bd-grid">
            <img src={profile} alt="profile pic" className="home__img" />
            <h1 className="home-title">
              Chetan <b>Bhalerao</b>
            </h1>
            <h3 className="home__profession">Web Developer</h3>

            <div>
              <a href="#" className="home__btn">
                Download
              </a>
            </div>
          </div>
          <div className="home__address bd-grid">
            {homeInfo.map((value) => {
              return (
                <span className="home__info">
                  <value.icon className="home__icon" />
                  {value.desc}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
