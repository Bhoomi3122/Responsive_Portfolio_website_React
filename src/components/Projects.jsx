import React from 'react';
import data from "../assets/data.json";
import "../styles/Projects.scss";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Projects = () => {
  return (
    <div id='project'>
      <h2>Projects</h2>
      <section>
        <article>
          <Carousel 
            showArrows={false} 
            showIndicators={true} 
            showStatus={false} 
            showThumbs={false} 
            interval={2000} 
            infiniteLoop={true} 
            autoPlay={true}
          >
            {
              data.projects.map(({ title, image_src, status, tech_stack, description, key_features_heading, key_features, project_url }) => (
                <div key={title} className='workItem'>
                  <img 
                    src={image_src} 
                    alt={`${title} project preview`} 
                    onError={(e) => { e.target.onerror = null; e.target.src = "path/to/default-image.jpg"; }} 
                  />
                  <aside>
                    <h3 className='project_head'>{title}</h3>
                    <span className={`status-label ${status.replace(" ", "-").toLowerCase()}`}>{status}</span>
                    <p className="tech-stack">
                      <strong>Tech Stack:</strong> {tech_stack.join(", ")}
                    </p>
                    <p className="description">{description}</p>
                    
                    {/* Key Features Section */}
                
                    <ul className="key-features">
                      {key_features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>

                    <a className="view-details-btn" target='_blank' rel='noopener noreferrer' href={project_url}>
                      View Details
                    </a>
                  </aside>
                </div>
              ))
            }
          </Carousel>
        </article>
      </section>
    </div>
  );
};

export default Projects;
