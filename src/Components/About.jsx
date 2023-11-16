// About.jsx

import React, { useState } from "react";
import image2 from "../assets/image2.jpeg";
import stock1 from "../assets/stock1.jpg";
import "./styles/basic.css"; // Import the modern-animations.css file

function About() {
  const [showFullContent, setShowFullContent] = useState(false);

  const data = {
    title: 'Certified Full Stack Java Developer',
    desc1: `Experienced Java developer skilled in designing and implementing web-based application features. Worked on Spring Boot, Hibernate, and relational databases like MySQL . Collaborative team player with strong communication and problem-solving abilities.`,
    desc2: `Recognized for outstanding performance, including being awarded Star of the Month in 2022 and achieving academic honors Two times Medal of Merit. Certified Full Stack Java Developer by Profound Edutech Pune. I have Good Knowledge of Networking, use of AI and skills like communication, teamwork, problem-solving and more....`,
    actionButton: {
      title: 'Read More...',
      Link: '/read-more',
    },
  };

  const styles = {
    container: {
      backgroundImage: `url(${stock1})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '10px',
      padding: '40px',
      color: 'white',
    },
    title: {
      fontSize: '2em',
      marginBottom: '10px',
    },
    h1: {
      fontSize: '2.5em',
      fontWeight: 'bold',
      color: 'White', // Gold color
      transition: 'color 0.3s ease',
      cursor: 'pointer',
    },
    h1Hover: {
      color: '#FFA500', // Orange color on hover
    },
    description: {
      fontSize: '1.2em',
    },
    button: {
      backgroundColor: '#FF4500', // Red-Orange color
      color: 'white',
      padding: '8px 16px',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#FF6347', // Lighter red on hover
    },
  };

  const handleReadMoreClick = () => {
    setShowFullContent(true);
  };

  return (
    <>
      <div className="main-container border py-6 bg-gray-200">
        <h1 className="text-center text-3xl text-pink-900 font-bold pb-2 transition-transform transform hover:scale-105" style={styles.title}>
          About Me
        </h1>

        <div className="flex items-center" style={styles.container}>
          <div className="w-full flex justify-center">
            <img className="w-1/2 rounded-full" src={image2} alt="image not found" />
          </div>

          <div className="w-full flex justify-center about-content">
            <div className="space-y-5 w-2/3">
              <h1
                className="text-4xl font-semibold"
                style={{ ...styles.h1, ...(showFullContent && styles.h1Hover) }}
              >
                {data.title}
              </h1>
              <p>{!showFullContent ? data.desc1 : `${data.desc1} ${data.desc2}`}</p>
              {!showFullContent && (
                <button
                  className="bg-orange-500 px-3 py-2 rounded-full shadow-2xl"
                  style={styles.button}
                  onClick={handleReadMoreClick}
                >
                  {data.actionButton.title}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

// import basic from "./styles/basic.css"

// import React, { useState } from "react";
// import image2 from "../assets/image2.jpeg";
// import stock1 from "../assets/stock1.jpg"

// function About() {

//     const [data, setData] = useState({
//         // image: bannerImage,  //
//         // if you want dynamic image
//         title: "Java Developer & Springboot Developer",
//         desc1: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
//           ab animi neque veritatis tempore cumque cum sequi dolores
//           voluptatem. Iusto odit dolorum veniam molestias molestiae cumque
//           voluptates inventore rerum est?`,
//         desc2: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
//           non a in maiores, quod dicta suscipit accusantium rerum soluta
//           rem tenetur ipsam, neque, quasi quae ducimus dolorem sint
//           provident dolorum.`,
//           actionButton:{
//             title:"Read More...",
//             Link: "/read-more"
//           }
//       });

//       const styles = {
//         container: {
//           backgroundImage: `url(${stock1})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           borderRadius: '10px',
//           padding: '40px', // Add padding as needed
//           color: 'white', // Text color on top of the background
//         },
//         title: {
//           fontSize: '2em',
//           marginBottom: '10px',
//         },
//         description: {
//           fontSize: '1.2em',
//         },
//       };

//   return (
//     <>
//       {/* ----------------------- */}
//       <div className="main-container border py-6 bg-gray-200"  >
//         <h1 className="text-center text-3xl text-pink-900 font-bold pb-2 " style={styles.title}>
//           {" "}
//           About Me
//         </h1>

//         <div className="flex items-center" style={styles.container}  >
//           {/* image1 */}
//           <div className=" w-full flex justify-center">
//             <img
//               className="w-1/2 rounded-full"
//               src={image2}
//               alt="image not found "
//             />
//           </div>

//           {/* about text */}
//           <div className="w-full flex justify-center" >
//             <div className="space-y-5 w-2/3">
//               <h1 className="text-4xl font-semibold ">
//                 {" "}
//                 {data.title}
//               </h1>
//               <p>
//                 {data.desc1}
//               </p>
//               <p>
//                 {data.desc2}
//               </p>
//               <button className="bg-orange-500 px-3 py-2 rounded-full shadow-2xl"
//               onClick={data.actionButton.Link}>
//                 {" "}
//                 {data.actionButton.title}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default About;
