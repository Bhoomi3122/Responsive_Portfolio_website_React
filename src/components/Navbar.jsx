import React from 'react';
import '../styles/Navbar.scss';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = ({menuopen,setMenuOpen}) => {
  return (
    <>
    <nav>
      <NavContent setMenuOpen={setMenuOpen}/>
      {/* Hamburger button, initially hidden, shown on smaller screens */}
      
    </nav>
    <button className="hamburger-btn" aria-label="Menu" onClick={()=>{setMenuOpen(!menuopen)}}>
    <AiOutlineMenu /> 
  </button>
  </>
  );
};

export const HeaderPhone = ({ menuopen,setMenuOpen }) => {
  return (
    <div className={`navphone ${menuopen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen}/>
    </div>
  );
}


const NavContent = ({setMenuOpen}) => {
  return (
    <>
      <h2>Bhoomi</h2>
      <div>
        <a onClick={()=>{setMenuOpen(false)}} href="#home">Home</a>
        <a onClick={()=>{setMenuOpen(false)}} href="#skills">Skills</a>
        <a onClick={()=>{setMenuOpen(false)}} href="#project">Projects</a>
        <a onClick={()=>{setMenuOpen(false)}} href="#connect">Connect</a>
        <a onClick={()=>{setMenuOpen(false)}} href="#contact">Contact</a>
      </div>
      {/* Resume button */}
      <a href="https://drive.google.com/file/d/18TNyUHGQ57GHQWvMJF73-LahC9XuRsdk/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        <button className="resume-btn">Resume</button>
      </a> 
    </>
  );
};

export default Navbar;