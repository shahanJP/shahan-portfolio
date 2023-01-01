import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import data from "./portfolio";
import Skills from "./components/skills/Skills";
import Sidebar from "./components/navbar/Sidebar";
import Project from "./components/project/Project";
import Education from "./components/education/Education";

function App() {
  console.log()
  return (
   <>
      <Sidebar data={data} />
      <Home data={data} />
      <About data={data.aboutMe} />
      <Skills data={data.skills} />
      <Project data={data.myProject} />
      <Education
        edu={data.education}
        cert={data.certificates}
        exp={data.workExperience}
      />
   </>
  );
}

export default App;
