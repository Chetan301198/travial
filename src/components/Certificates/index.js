import React from "react";
import "./style.scss";

const Certificate = () => {
  const certificateInfo = [
    {
      title: "web development",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "web development",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "web development",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  return (
    <>
      <section className="certificate section">
        <h2 className="section-title">Certificate</h2>

        <div className="certificate__container bd-grid">
          {certificateInfo.map((val) => {
            return (
              <div className="certificate__content">
                <h3 className="certificate__title">{val.title}</h3>
                <p className="certificate__discription">{val.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Certificate;
