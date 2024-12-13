import React from 'react';
import '../styles/Achievements.scss';

const achievementsData = [
  {
    title: "Top Scorer in NPTEL Exam",
    description: "Achieved the top 1% score in the NPTEL exam for 'Demystifying Networks', showcasing deep understanding of networking concepts.",
    skills: "Skills: Networking",
    side: "left"
  },
  
  {
    title: "Marketing Lead at GFG",
    description: "Currently serving as the Marketing Lead for the GeeksforGeeks Student Chapter at MITS, leading campaigns and organizing events.",
    skills: "Skills: Leadership, Communication Skills, Strategic Planning",
    side: "right"
  },
  {
    title: "Third Place in Innovation Challenge",
    description: "Secured 3rd place in the Innovation Challenge of MPYSC-32, organized at MITS Gwalior, for developing a smart home automation IoT project.",
    skills: "Skills: Home Automation, IoT",
    side: "left"
  },
  {
    title: "Completed 600+ DSA Problems",
    description: "Solved over 600+ DSA problems across various platforms like GFG, HackerRank, LeetCode, and Coding Ninjas, enhancing problem-solving skills.",
    skills: "Skills: Problem Solving, Consistency",
    side: "right"
  }
];

const Achievements = () => {
  return (
    <div className="achievements-container" id='achievements'>
      <h2 className="achievements-title">ACHIEVEMENTS</h2>
      <div className="timeline">
        <div className="central-line"></div>

        {achievementsData.map((achievement, index) => (
          <div className={`timeline-item ${achievement.side}`} key={index}>
            <div className="horizontal-line"></div>
            <div className="timeline-content">
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
              <div className="skills">{achievement.skills}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
