import React from 'react';
import '../styles/Navbar.scss';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = ({menuopen,setMenuOpen}) => {
  return (
    <>
    <nav>
      <NavContent setMenuOpen={setMenuOpen}/>
      
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
      <h2 className='Bhoomi'>Bhoomi</h2>
      <div>
        <a onClick={()=>{setMenuOpen(false)}} href="#home">Home</a>
        <a onClick={()=>{setMenuOpen(false)}} href="#skills">Skills</a>
        <a onClick={()=>{setMenuOpen(false)}} href="#project">Projects</a>
        <a onClick={()=>{setMenuOpen(false)}} href="#achievements">Achievements</a>
        <a onClick={()=>{setMenuOpen(false)}} href="#connect">Connect</a>
        <a onClick={()=>{setMenuOpen(false)}} href="#contact">Contact</a>
      </div>
      <a href="https://drive.google.com/file/d/1N7WsvUg6HFjQ3Akx11Zd9_L1a31YHaFU/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        <button className="resume-btn">Resume</button>
      </a> 
    </>
  );
};

export default Navbar;