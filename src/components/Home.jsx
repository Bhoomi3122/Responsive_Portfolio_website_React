import React, { useRef } from 'react';
import { animate, motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/Picsart_24-12-04_16-29-58-312-removebg-preview (1).png";

const Home = () => {
    const problemsCount = useRef(null);

    const animationProblemCount = () => {
        animate(0, 600, {
            duration: 1.5,
            onUpdate: (v) => (problemsCount.current.textContent = v.toFixed())
        });
    }

    const animations = {
        h1: {
            initial: {
                x: "-100%",
                opacity: 0,
            },
            whileInView: {
                x: 0,
                opacity: 1,
            },
        },
        button: {
            initial: {
                y: "-100%",
                opacity: 0,
            },
            whileInView: {
                y: 0,
                opacity: 1,
            },
        }
    };

    return (
        <div id='home'>
            <section>
                <div>
                    <motion.h1 {...animations.h1}>
                        Hi, I Am <br /> Bhoomi Garg
                    </motion.h1>
                    <Typewriter
                        options={{
                            strings: [
            
                                "A Computer Science Student",
                                "A MERN Stack Developer",
                                "A Problem Solver",
                                "A Tech Enthusiast",
                        
                                "An Innovative Thinker"
                            ],
                            autoStart: true,
                            loop: true,
                            cursor: "",
                            wrapperClassName: "typewriterpara",
                        }}
                    />
                    <div>
                        <a href="https://www.linkedin.com/in/bhoomi-garg-244b52219/">Get in Touch</a>
                        <a href="https://github.com/Bhoomi3122?tab=repositories">Projects <BsArrowUpRight /></a>
                    </div>

                    <aside>
                        <article>
                            <p>
                                <motion.span whileInView={animationProblemCount} ref={problemsCount}>600</motion.span>+
                            </p>
                            <span>DSA Problems Solved</span>
                        </article>
                        <article data-special>
                            <p>Contact</p>
                            <span>gargbhoomi01@gmail.com</span>
                        </article>
                    </aside>
                </div>
            </section>
            <section>
                <img src={me} alt="Bhoomi" />
                <BsChevronDown className='chevron-down' />
            </section>
        </div>
    );
}

export default Home;
