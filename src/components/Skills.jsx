import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGitAlt, FaCuttlefish } from 'react-icons/fa';
import { DiNodejs } from 'react-icons/di';
import { AiOutlineCluster } from 'react-icons/ai';
import { SiExpress, SiMongodb } from 'react-icons/si'; 
import '../styles/Skills.scss';

const skills = [
  { name: 'HTML', icon: <FaHtml5 size={50} /> },
  { name: 'CSS', icon: <FaCss3Alt size={50} /> },
  { name: 'JavaScript', icon: <FaJs size={50} /> },
  { name: 'React', icon: <FaReact size={50} /> },
  { name: 'Bootstrap', icon: <FaBootstrap size={50} /> },
  { name: 'Git', icon: <FaGitAlt size={50} /> },
  { name: 'C++', icon: <FaCuttlefish size={50} /> },
  { name: 'DSA', icon: <AiOutlineCluster size={50} /> },
  { name: 'Node.js', icon: <DiNodejs size={50} /> },
  { name: 'Express', icon: <SiExpress size={50} /> }, 
  { name: 'MongoDB', icon: <SiMongodb size={50} /> }, 
];

const Skills = () => {
  return (
    <div id="skills">
      <h2 className="skills-heading">SKILLS</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
