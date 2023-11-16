import { useState } from "react";
import "./styles/basic.css";
import Button from "@mui/material/Button";
import { Outlet, Link } from "react-router-dom";

const Header = () => {

  function openCv() {
     // Replace 'CV.pdf' with the actual name of your PDF file
  var pdfPath = process.env.PUBLIC_URL + '/assets/CV.pdf';

  // Open the PDF in a new tab
  window.open(pdfPath, '_blank');
}

  const [brandName, setBrandName] = useState("Himanshu Sharma");

  const [menuLinks, setMenuLinks] = useState([
    {
      title: "Home",
      link: "/",
      id: 1,
    },
    {
      title: "About",
      link: "#about",
      id: 2,
    },
    {
      title: "Skills",
      link: "#skills",
      id: 3,
    },
    {
      title: "Projects",
      link: "#projects",
      id: 4,
    },
    {
      title: "Contact",
      link: "#contact",
      id: 5,
    },
  ]);

  const [actionButton, setActionButton] = useState({
    title: "Talk To Me",
    // Link: "/hire-me",
  });

  const LinkedInChatButton = () => {
    const linkedinMessagingUrl = 'https://www.linkedin.com/in/himanshu-sharma-642106158/';
  
    const openLinkedInChat = () => {
      window.open(linkedinMessagingUrl, '_blank');
    };

    openLinkedInChat();
  }

  return (
    <>
      <div
        className="header flex justify-between items-center 
             navbar-expand-custom navbar-mainbg"
      >
        {/* h-14  main  flex justify-between items-center   px-16 */}

        <div>
          {" "}
          {/* brand logo or name */}
          <h2 className="text-2xl navbar ">
            <span className="ml-3 text-3xl italic font-semibold font-serif text-orange-600 ">
              ReactFolio
            </span>{" "}
            {/* {brandName}  */}
          </h2>
        </div>

        <div className="nav-links">
  {/* nav bar links */}
  {menuLinks.map((link) => (
    <a
      href={link.link}
      className="hover:text-orange-600 transition duration-300"
      key={link.id}
    >
      {link.title}
    </a>
          ))}
          {/* 
                <a href="/home" className="hover:text-orange-600">Home</a> 

                <a href="/About" className="hover:text-orange-600">About</a>

                <a href="/Skills" className="hover:text-orange-600">Skills</a>

                <a href="/Portfolio" className="hover:text-orange-600">Portfolio</a>

                <a href="/Contact" className="hover:text-orange-600">Contact</a>  */}
        </div>

        <div>
          <Button variant="contained" onClick={LinkedInChatButton}>
            {actionButton.title}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
