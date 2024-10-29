import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGeeksforgeeks } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import "../styles/Connect.scss"; // Make sure this path is correct
import LeetCodeIcon from "../assets/leetcode.png"
const Connect = () => {
  return (
    <div id="connect">
      <h2>Connect with Me</h2>
      <ul className="connect-list">
        <li>
          <a href="https://www.linkedin.com/in/bhoomi-garg-244b52219" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
            <span className="label">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://www.geeksforgeeks.org/user/gargbhow8ef/" target="_blank" rel="noopener noreferrer">
            <SiGeeksforgeeks className="icon" />
            <span className="label">GeeksforGeeks</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/Bhoomi3122" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a href="https://leetcode.com/u/Bhoomi_3122/" target="_blank" rel="noopener noreferrer">
            <img src={LeetCodeIcon} alt="LeetCode" className="icon" />
            <span className="label">LeetCode</span>
          </a>
        </li>
        <li>
          <a href="mailto:gargbhoomi01@gmail.com">
            <MdEmail className="icon" />
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Connect;
