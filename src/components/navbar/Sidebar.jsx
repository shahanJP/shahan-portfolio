import React from 'react';

import {
    FaHome,
    FaLinkedin,
   FaGithub,
   
  } from 'react-icons/fa';
  import { HashLink } from 'react-router-hash-link';
  import './sidebar.css';

const Sidebar = ({data}) => {
    return (
        <section className='sidenav'>
       <HashLink smooth to="/#home" className='hicon'>
        <FaHome /></HashLink>
        <div className='socio-links'>
        <a href="https://www.linkedin.com/in/shahan-a-2312a2206/" target="_blank"
        rel="noopener noreferrer"  ><FaLinkedin/></a>
        <a href="https://github.com/shahanJP/" target="_blank"
        rel="noopener noreferrer" ><FaGithub/></a>
        </div> 
        <div className="mail">
        <a className='touch' href={`mailto:${data.email}`} target="_blank"
        rel="noopener noreferrer">{data.email}</a>
        </div>
        </section>
       
    )
}

export default Sidebar
