import React from "react";
import "./project.css";
const Project = ({data}) => {
  const {page,project,list}=data;
return (
  <div className="mywork" id="project">
  <h1>{page},</h1>
  <h1>{project}</h1>
   {list.map(({title ,story,img,tools,demo,repo})=>(
      <section className="project" key={title}>
      <div className="item" data-aos="fade-right"
      data-aos-duration="1000" >
   <div className="card">
      <div className="card__content">
        <div className="card__front">
          <img src={img} alt=""/>
        </div>
        <div className="card__back">
          <img src={title} className="card__body" alt=""/>
           </div>
      </div>
    </div>
    </div>
    <div className="story" data-aos="fade-left"
    data-aos-duration="1000" >
    <p className="desc">{story}</p>
    <p className="tools">{tools.join(" - ")}</p>
    <div className="connect">
    <a href={demo}target="_blank"
    rel="noopener noreferrer" >Live Demo</a>
     <a href={repo}target="_blank"
     rel="noopener noreferrer" >Github Repo</a>
 </div>
  </div>
 </section>
  ))}
  
  </div>
  
);
};

export default Project;

