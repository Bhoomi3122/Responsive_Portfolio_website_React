import "./styles/app.scss";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Connect from "./components/Connect";
import Contact from "./components/Contact";
import Achievements from "./components/Achievements";
import { Toaster } from "react-hot-toast"; // Make sure to import this
import { useState } from "react";
import { HeaderPhone } from "./components/Navbar";


function App() {
  const [menuopen,setMenuOpen] = useState(false);
  console.log(menuopen);
  return (
    <>
      <HeaderPhone menuopen={menuopen} setMenuOpen={setMenuOpen}/>
      <Navbar menuopen={menuopen} setMenuOpen={setMenuOpen}/>
      <Home />
      <hr />
      <Skills />
      <hr />
      <Projects   />
      <hr />
      <Achievements/>
      <hr />
      <Connect />
      <hr />
      <Toaster /> {/* This should be placed here to show toasts across the app */}
      <Contact />
    </>
  );
}

export default App;
