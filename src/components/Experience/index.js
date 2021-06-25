import React from "react";
import "./style.scss";

const Experience = () => {
  const experienceInfo = [
    {
      title: "Web Developer",
      company: "Mumbai",
      duration: "2019 to 2021",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Web Developer",
      company: "Mumbai",
      duration: "2019 to 2021",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Web Developer",
      company: "Mumbai",
      duration: "2019 to 2021",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  return (
    <>
      <section className="experience section">
        <h2 className="section-title">Experience</h2>

        <div className="experience__container bd-grid">
          {experienceInfo.map((val) => {
            return (
              <div className="experience__content">
                <div className="experience__time">
                  <span className="experience__rounder"></span>
                  <span className={"experience__line"}></span>
                </div>
                <div className="experience__data bd-grid">
                  <h3 className="experience__title">{val.title}</h3>
                  <span className="experience__company">
                    {val.duration} | {val.company}
                  </span>
                  <p className="experience__description">{val.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Experience;
