import React, { useRef } from 'react';
import { animate,motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import {BsArrowUpRight, BsChevronDown} from "react-icons/bs";
import me from "../assets/logo-removebg-preview.png";
import { GiDuration } from 'react-icons/gi';

const Home = () => {
    const clientCount=useRef(null);
    const projectsCount=useRef(null);
    const animationClientsCount=()=>{
        animate(0,100,{
            duration:1.5,
            onUpdate:(v)=>(clientCount.current.textContent=v.toFixed())
        });
    }
    const animationProjectssCount=()=>{
        animate(0,500,{
            duration:1.5,
            onUpdate:(v)=>(projectsCount.current.textContent=v.toFixed())
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
                            strings: ["A Mern Stack Developer", "A DSA Enthusiast", "A Creative Thinker", "A Computer Science Student"],
                            autoStart: true,
                            loop: true,
                            cursor: "",
                            wrapperClassName: "typewriterpara",
                        }}
                    />
                    <div>
                        <a href="mailto:gargbhoomi01@gmail.com">Get in Touch</a>
                        <a href="#project">Projects <BsArrowUpRight/></a>
                    </div>
                    
                    <aside>
                    <article>
                        <p>+
                             <motion.span whileInView={animationProjectssCount} ref={projectsCount}>500</motion.span>
                        </p>
                        <span>DSA Problems Solved</span>
                    </article>
                    <article data-special>
                        <p>Contact
                        </p>
                        <span>gargbhoomi01@gmail.com</span>
                    </article>
                    </aside>
                </div> 
            </section>
            <section>
                <img src={me} alt="Bhoomi"/>
                <BsChevronDown className='chevron-down'/>
            </section>
        </div>
    );
}

export default Home;
