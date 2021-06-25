import React from "react";
import "./style.scss";

const Referance = () => {
  const referInfo = [
    {
      title: "Chetan Bhalerao",
      subtitle: "Frontend developer",
      phone: "1234567890",
      email: "user@gmail.com",
    },
    {
      title: "Chetan Bhalerao",
      subtitle: "Frontend developer",
      phone: "1234567890",
      email: "user@gmail.com",
    },
    {
      title: "Chetan Bhalerao",
      subtitle: "Frontend developer",
      phone: "1234567890",
      email: "user@gmail.com",
    },
  ];
  return (
    <>
      <section className="referance section">
        <h2 className="section-title">Referance</h2>

        <div className="referance__container bd-grid">
          {referInfo.map((val) => {
            return (
              <div className="referance__content bd-grid">
                <span className="referance__subtitle">{val.subtitle}</span>
                <h3 className="referance__title">{val.title}</h3>
                <ul className="referance__contact">
                  <li>Phone: {val.phone}</li>
                  <li>Email: {val.email}</li>
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Referance;
