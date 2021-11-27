import React from "react";
import "./style.scss";

function Education() {
  const academicInfo = [
    {
      title: "Web Developer",
      place: "Mumbai",
      year: "2019",
      isLine: true,
    },
    {
      title: "Web Developer",
      place: "Mumbai",
      year: "2019",
      isLine: true,
    },
    {
      title: "Web Developer",
      place: "Mumbai",
      year: "2019",
      isLine: false,
    },
  ];

  return (
    <>
      <section className="educati section">
        <h2 className="section-title">Education</h2>
        <div className="education__container bd-grid">
          {academicInfo.map((val) => {
            return (
              <div className="education__content">
                <div className="education__time">
                  <span className="education__rounder"></span>
                  <span className={val.isLine && "education__line"}></span>
                </div>
                <div className="education__data bd-grid">
                  <h3 className="education__title">{val.title}</h3>
                  <span className="education__place">{val.place}</span>
                  <span className="education__year">{val.year}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Education;
