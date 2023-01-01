import React from "react";
import skills from "../../assets/skills.jpg";
import "./skills.css";
import Icons from "./Icons";

const Skills = ({ data }) => {
  const { listA,  } = data;
 
  return (
    <section id="skill">
      <div
        data-aos="fade-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Icons />
      </div>

      <div
        className="book"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <input type="checkbox" id="c1" />
        <input type="checkbox" id="c2" />
        <input type="checkbox" id="c3" />
        <input type="checkbox" id="c4" />
        <input type="checkbox" id="c5" />
        <input type="checkbox" id="c6" />
        <input type="checkbox" id="c7" />
        <input type="checkbox" id="c8" />
        <input type="checkbox" id="c9" />
        <input type="checkbox" id="c10" />

        <div id="cover">
          <img src={skills} alt='Skill pic' />
        </div>

        <div className="flip-book">
          {listA.map(({ id, text, img, desc,details ,fo }) => (
            <div className="flip" id={id} key={id}>
              <div className="front" key={id}>
                <h2>{text}</h2>
                <h3>{desc}</h3>
                {
                  details.map((list)=>(
                    <ul className="lists">
                      <li key = {list}>{list}</li>
                    </ul>
                  ) )
                }

                <label htmlFor={fo} className="next-btn">
                  Next
                </label>
              </div>
              <div className="back">
                <img src={img} alt="" />
                <label className="back-btn" htmlFor={fo}>
                  Back
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
