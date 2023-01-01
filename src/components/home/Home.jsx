import React from "react";
import Typical from 'react-typical'
import "./home.css";
import { HashLink } from 'react-router-hash-link';

const Home = ({data}) => {
  console.log(data)
  return (
   
    <div className=" home" id="home">
        <div className="left">
          <h1 >{data.fullName}</h1>
          <Typical className="type"
        steps={[data.role, 4000, 'JUNIOR FRONT-END DEVELOPER', 2000]}
        loop={Infinity}
        wrapper="h5"
      />
          <a className="touch" href={`mailto:${data.email}`} target="_blank"
          rel="noopener noreferrer">{data.email}</a>
          <a className="city" href="https://www.google.com/maps/place/31+Broadhurst+St,+Kilmore+VIC+3764/@-37.3090459,144.9497243,17z/data=!3m1!4b1!4m5!3m4!1s0x6ad7a4af0e013ba1:0x84c62cbd8f854f9b!8m2!3d-37.3090459!4d144.951913"  target="_blank"
          rel="noopener noreferrer">Melbourne</a>
        </div>
        <div className="right">
          <div className="angle "> <HashLink smooth to="/#about" className="link">About </HashLink></div>
          <div className="angle"> <HashLink smooth to="/#skill" className="link"> Skills </HashLink></div>
          <div className="angle"> <HashLink smooth to="/#project" className="link"> Work</HashLink></div>
          <div className="angle"> <HashLink smooth to="/#education" className="link">Study </HashLink></div>
        </div>
      

    </div>
   
  );
};

export default Home;
