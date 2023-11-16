import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const contactLinks = {
    email: "mailto:Bro6521.himanshu@gmail.com",
    linkedin: "https://www.linkedin.com/in/himanshu-sharma-642106158/",
    github: "https://github.com/himanshu6521",
  };

  const projects = [
    {
        name: "Ecommerce Product Catalog",
        link: "https://github.com/himanshu6521/Ecommerce-ProductCatalogProject.git"
    },
    {
        name: "ReactFolio",
        link: "https://github.com/himanshu6521"
    },
    {
      name: "CardioGuard Sentinel",
      link: " This is an IOT project, Embedded using Arduino."
    },
    {
      name:"Enterprise Onboarding Nexus",
      link: ""
    }


]

  return (
    <>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left Side: Project Details */}
          <div className="text-left">
            <h2 className="text-3xl font-bold text-orange-400">Projects</h2>
            <br />
            <ul className="list-disc ml-4">
              <li>
                <a href={projects[0].link} target="blank">
                  {projects[0].name}
                </a>
              </li>
              <li>
                <a href={projects[1].link} target="blank">{projects[1].name}</a>
              </li>
              <li>
                <a href={projects[2].link} target="blank">
                  {projects[2].name}
                </a>
              </li>
              <li>
                <a href={projects[3].link} target="blank">
                  {projects[3].name}
                </a>
              </li>
              {/* Add more projects as needed */}
            </ul>
          </div>

          {/* Right Side: Contact Information and Social Media Links */}
          <div className="text-right space-y-4">
            <div>
              <h2 className="text-4xl font-bold text-orange-400">Contact Me</h2>
              <p className=" text-lg text-orange-400">
                Email:{" "}
                <a
                  className="cursor-pointer text-white italic hover:text-orange-600"
                  href={contactLinks.email}
                >
                  Bro6521.himanshu@gmail.com
                </a>
              </p>
              <p className=" text-lg text-orange-400">
                Address:{" "}
                <span className="text-white italic">
                  {" "}
                  Shreenath Apartment, Pimple Nilakh , Pune ,Maharashtra{" "}
                </span>
              </p>
            </div>

            <div className="flex space-x-9 justify-end ">
              <a
                href={contactLinks.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-3xl" />
              </a>
              <a
                href={contactLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-3xl" />
              </a>
              {/* <a
                href="https://twitter.com/your-twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-3xl" />
              </a> */}
              <a href={contactLinks.email}>
                <FaEnvelope className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
