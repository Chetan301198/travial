import React from "react";
import "./style.scss";

const Certificate = () => {
  const certificateInfo = [
    {
      title: "web development",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    },
    {
      title: "graphic designer",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    },
    {
      title: "devops",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
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
