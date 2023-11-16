import React from "react";
import "./styles/forExpertise.css"; // Import the expertise styles
import stock1 from "../assets/stock1.jpg";
import stock2 from "../assets/stock2.jpg";
import stock4 from "../assets/stock4.jpg";

function Expertise() {
  return (
    <div className="expertise-container my-1">
      <h1 className="expertise-heading text-4xl font-bold text-center transition-transform transform hover:scale-105">
        Skills
      </h1>

      <div className="box-container flex my-16 items-center">
        <div className="flex justify-center">
          <div className="w-2/3 text-center">
            <h2 className="text-3xl font-bold space-y-3">
              I love these Technologies
            </h2>
            <p className="expertise-description italic font-thin">
              "Beyond my passion for cutting-edge technologies and AI, I find
              joy in the art of learning and quickly adapting to new
              innovations. This curiosity extends to my love for photo editing,
              where I explore creativity and attention to detail. Embracing both
              the analytical and creative sides allows me to bring a unique and
              well-rounded perspective to every endeavor.
            </p>
            {/* <button className="hire-button">Hire me</button> */}
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex   flex-wrap w-2/3 skills-container">
          <p className="skill-tag mt-2">C</p>
          <p className="skill-tag mt-2">C++</p>
            <p className="skill-tag  mt-2">Core Java</p>
            <p className="skill-tag mt-2">Advance Java</p>
            <p className="skill-tag mt-2">J2EE</p>
            <p className="skill-tag mt-2">Hibernate (ORM Tool)</p>
            <p className="skill-tag mt-2">Spring Framework</p>
            <p className="skill-tag mt-2">Spring Boot Framework</p>
            <p className="skill-tag mt-2">Microservices</p>

            <p className="skill-tag mt-2">Junit</p>
            <p className="skill-tag mt-2">Mockito</p>

            <p className="skill-tag mt-2">RDMS</p>
            <p className="skill-tag mt-2">Mysql</p>

            <p className="skill-tag mt-2">Git</p>
            <p className="skill-tag mt-2">Github</p>

            <p className="skill-tag mt-2">HTML</p>
            <p className="skill-tag mt-2">CSS</p>
            <p className="skill-tag mt-2">Javascript</p>
            <p className="skill-tag mt-2">Angular</p>
            <p className="skill-tag mt-2">React</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;

// import React from "react";
// import stock1 from "../assets/stock1.jpg"
// import stock2 from "../assets/stock2.jpg"
// import stock3 from "../assets/stock3.jpg"
// // import Paper from '@mui/material/Paper';

// function Expertise() {
//   return (
//     <>
//       <div className="my-14 " >

//       {/* style={{
//         backgroundImage: `url(${stock3})`,
//         backgroundSize: "cover",
//         borderRadius: "10px",

//       }}   */}

//         <h1 className=" text-3xl font-bold text-center">My Expertise</h1>

//         {/* expertise section */}

//         <div className="box-container flex my-16"  >
//           <div className="flex justify-center"
//       >

//             <div className=" w-2/3 text-center">
//             <h2 className="text-3xl font-bold space-y-3 ">I love these Technologies</h2>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. In animi
//               repellat fugit magni ut eaque a porro ipsam, tenetur alias quis
//               odit repudiandae harum. Aspernatur iure commodi soluta iste nulla.
//             </p>
//             <button className="px-4 py-2 bg-orange-600 rounded-full shadow-lg ">Hire me</button>
//             </div>
//           </div>

//           <div className="flex justify-center"  >

//             <div className="flex space-x-3  space-y-3 flex flex-wrap w-2/3 ">
//         <p className="bg-gray-300 w-fit px-3 py-2 rounded-full"> Core Java</p>
//         <p className="bg-gray-300 w-fit px-3 py-2 rounded-full"> Advance Java</p>
//         <p className="bg-gray-300 w-fit px-3 py-2 rounded-full"> J2EE</p>
//         <p className="bg-gray-300 w-fit px-3 py-2 rounded-full"> Hibernate (ORM Tool)</p>
//         <p className="bg-gray-300 w-fit px-3 py-2 rounded-full"> Spring Framework</p>
//         <p className="bg-gray-300 w-fit px-3 py-2 rounded-full"> Spring Boot Framework</p>
//         <p className="bg-gray-300 w-fit px-3 py-2 rounded-full"> Microservices</p>

//         <p className="bg-gray-300 w-fit px-3 py-2 rounded-full"> Junit</p>
//         <p className="bg-gray-300 w-fit px-3 py-2 rounded-full"> Mockito</p>

//         <p className="bg-gray-300 w-fit px-3 py-2 rounded-full"> RDMS</p>
//         <p className="bg-gray-300 w-fit px-3 py-2 rounded-full"> Mysql</p>

//         <p className="bg-gray-300 w-fit px-3 py-2 rounded-full"> Git</p>
//         <p className="bg-gray-300 w-fit px-3 py-2 rounded-full"> Github</p>

//         <p className="bg-gray-300 w-fit px-3 py-2 rounded-full"> HTML</p>
//         <p className="bg-gray-300 w-fit px-3 py-2 rounded-full"> CSS</p>
//         <p className="bg-gray-300 w-fit px-3 py-2 rounded-full"> Javascript</p>
//         <p className="bg-gray-300 w-fit px-3 py-2 rounded-full"> Angular</p>
//         <p className="bg-gray-300 w-fit px-3 py-2 rounded-full"> React</p>

//         </div>

//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Expertise;

// Expertise.jsx
