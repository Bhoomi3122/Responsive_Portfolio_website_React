import React, { useState } from 'react';
import "../styles/Contact.scss";
import image from "../assets/contact.png";
import { motion } from "framer-motion";
import { addDoc, collection } from "firebase/firestore";
import toast from "react-hot-toast";
import { db } from "../Firebase"; // Assuming you have Firebase initialized here

const Contact = () => {
  const [name, Setname] = useState("");
  const [email, Setemail] = useState("");
  const [message, Setmessage] = useState("");
  const [disableBtn, SetdisableBtn] = useState(false);

  const submithandler = async (e) => {
    e.preventDefault();
    SetdisableBtn(true);
    try {
      await addDoc(collection(db, "contacts"), { name, email, message });
      toast.success("Message sent");
      Setname("");
      Setemail("");
      Setmessage("");
      SetdisableBtn(false);
    } catch (error) {
      toast.error("Error sending message");
      console.log(error);
      SetdisableBtn(false);
    }
  };

  const animations = {
    form: {
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
      transition: {
        delay: 0.5,
      },
    },
  };

  return (
    <div id="contact">
      <section>
        <motion.form onSubmit={submithandler} {...animations.form}>
          <h2>Contact Me</h2>
          <input 
            type="text" 
            placeholder="Your name" 
            value={name} 
            onChange={(e) => Setname(e.target.value)} 
            required 
          />
          <input 
            type="email" 
            placeholder="Your email" 
            value={email} 
            onChange={(e) => Setemail(e.target.value)} 
            required 
          />
          <input 
            type="text" 
            placeholder="Your message" 
            value={message} 
            onChange={(e) => Setmessage(e.target.value)} 
            required 
          />
          <motion.button 
            disabled={disableBtn} 
            className={disableBtn ? "disableBtn" : ""} 
            {...animations.button} 
            type="submit"
          >
            Send
          </motion.button>
        </motion.form>
      </section>
      <aside>
        <img src={image} alt="Graphics" />
      </aside>
    </div>
  );
};

export default Contact;
