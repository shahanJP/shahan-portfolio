import React from "react";
import "./education.css";

const Education = ({ children, edu, cert, exp }) => {
  const { title, list } = edu;
  const { heading, listC } = cert;
  const { work, listA } = exp;

  return (
    <div className="edu" id="education" >
      <h1>4,</h1>
      <h1>Study and Experience </h1>
      <div className="edu-container">
        <div className="study">
          <div className="education"data-aos="zoom-up"
          data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">
            {children}
            <article>
            <h2>{title}</h2>
            {list.map(({ institution, description }) => (
              <ul key={institution} >
                <h3 key={institution}>{institution}</h3>
                <li key={description}>{description}</li>
              </ul>
            ))}
            </article>
           
          </div>

          <div className="certificate" data-aos="zoom-up"
          data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">
            <article>
            <h2>{heading}</h2>
            {listC.map(({ text }) => (
              <ul>
                <li key={text}>{text}</li>
              </ul>
            ))}
            </article>
          </div>
        </div>
        <div className="experience" data-aos="zoom-right"
        data-aos-easing="ease-out-cubic"
          data-aos-duration="1000">
          <h2>{work}</h2>
          {listA.map(({ company, date, jobTitle, description }) => (
            <div key={company}>
              <h4 key={date}>{company}, {date}</h4>
              <h5 key={jobTitle}>{jobTitle}</h5>
              <p key={description}>{description}</p>
            </div>
          ))}
        </div>
        
      </div>
      <div className="end">
        <p>@shahan porfolio 2022 (React)</p>
        </div>
    </div>
  );
};

export default Education;
