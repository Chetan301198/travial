import React, { useState } from "react";
import "./style.scss";
import { BiHome } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { BiBook } from "react-icons/bi";
import { BiReceipt } from "react-icons/bi";
import { BiBriefcase } from "react-icons/bi";
import { BiAward } from "react-icons/bi";
import { BiLinkExternal } from "react-icons/bi";
import { BiGridAlt } from "react-icons/bi";

const Header = () => {
  const menuData = [
    {
      icon: BiHome,
      name: "Home",
    },
    {
      icon: BiUser,
      name: "Profile",
    },
    {
      icon: BiBook,
      name: "Education",
    },
    {
      icon: BiReceipt,
      name: "Skills",
    },
    {
      icon: BiBriefcase,
      name: "Experience",
    },
    {
      icon: BiAward,
      name: "Certificates",
    },
    {
      icon: BiLinkExternal,
      name: "References",
    },
  ];

  const [show, setShow] = useState(false);

  return (
    <>
      <header className="header">
        <nav className="nav bd-container">
          <button href="#" className="nav__logo">
            Chetan
          </button>

          <div className={`nav__menu ${show ? "nav__show" : ""}`}>
            <ul className="nav__list">
              {menuData.map((value) => {
                return (
                  <li className="nav__item">
                    <button
                      className="nav__link"
                      onClick={() => setShow(!show)}
                    >
                      <value.icon className="nav__icon" />
                      <sapn>{value.name}</sapn>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="nav__toggle" onClick={() => setShow(!show)}>
            <BiGridAlt />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
