import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import AboutMe from "./Components/AboutMe/AboutMe";
import Portfolio from "./Components/Portfolio/Portfolio";
import Experience from "./Components/Experience/Experience";
import Contact from "./Components/Contact/Contact";
import SocialLinks from "./Components/SocialLinks/SocialLinks";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <SocialLinks></SocialLinks>
      <AboutMe></AboutMe>
      <Portfolio></Portfolio>
      <Experience></Experience>
      <Contact></Contact>
    </>
  );
}

export default App;
