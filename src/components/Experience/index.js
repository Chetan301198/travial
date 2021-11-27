import React from "react";
import "./style.scss";

const Experience = () => {
  const experienceInfo = [
    {
      title: "Web Developer",
      company: "Mumbai",
      duration: "2020 to 2021",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      isLine: true,
    },
    {
      title: "graphic Developer",
      company: "Mumbai",
      duration: "2019 to 2020",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      isLine: true,
    },
    {
      title: "full stack Developer",
      company: "Mumbai",
      duration: "2018 to 2019",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      isLine: false,
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
                  <span className={val.isLine && "experience__line"}></span>
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
