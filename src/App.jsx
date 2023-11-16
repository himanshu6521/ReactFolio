import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import About from "./Components/About";
import Services from "./Components/Services";
import Expertise from "./Components/Expertise";
import Footer from "./Components/Footer";
// import Footer from './Components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./Components/NoPage";

function App() {
  return (
    <>
     

      <Header />
      <section id="/" ><Banner /></section> 
      <section id="about"> <About /></section>
      <section id="projects"><Services /></section>
      <section id="skills"><Expertise /></section>
      <section id="contact"><Footer /> </section>
       {/* <NoPage />  */}
    </>
  );
}

export default App;
