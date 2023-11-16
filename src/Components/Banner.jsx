import React, { useRef } from "react";
import Button from "@mui/material/Button";
import image3 from "../assets/image3.jpeg";
import bannerBackground from "../assets/preview.jpg";
import basic from "../Components/styles/basic.css";
import Typed from "typed.js";
import { useEffect } from "react";

function Banner() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Java Developer", "Full Stack Dev", "Springboot Dev"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 500,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
      }}
      className="main-container  flex justify-between items-center py-4"
    >
      <div className="w-full mt-5 justify-center items-center flex">
        <div className="w-2/3 ">
          <h3 className="text-3xl font-semibold font-sans">Hi , I am </h3>
          <h1 className="mt-3 text-5xl font-bold italic transition-transform transform hover:scale-105">Himanshu Sharma</h1>
          <h2 className="mt-3 text-3xl">
            And a{" "}
            <span
              ref={el}
              className="underline font-semibold text-pink-950"
            ></span>{" "}
          </h2>
          <br />
          <p className=" mt-3 ">
            {" "}
            Highly motivated Software Developer 2 years of experience in
            developing and implementing high performance applications. 
          </p>

          {/* -------------------------------------------- */}

          <div className="icons-container flex space-x-5 mt-3">
            <a className="social-icon" href="https://www.facebook.com/natureboy.himanshu">
              <i className="fa-brands text-4xl fa-facebook"></i>
            </a>

            <a className="social-icon" href="https://www.instagram.com/overmightyy">
              <i className="fa-brands text-4xl fa-instagram"></i>
            </a>

            <a className="social-icon" href="https://www.youtube.com/@TheHimanshuSharmaYT">
              <i className="fa-brands text-4xl fa-youtube"></i>
            </a>

            <a className="social-icon" href="https://www.linkedin.com/in/himanshu-sharma-642106158/">
              <i className="fa-brands text-4xl fa-linkedin"></i>
            </a>
          </div>

          {/* =========================================*/}

          <br />

          <a
            className="bg-orange-600 rounded-2xl px-2 py-2 text-white mt-6"
            href="#contact"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="mt-5 w-full flex items-center">
        <img
          className="rounded-full shadow w-1/2 ml-20 justify-center"
          src={image3}
          alt="No image found"
        />
      </div>
    </div>
  );
}

export default Banner;
