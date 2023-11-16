import React, { useState } from "react";
import "./styles/forServices.css";

function Services() {
  const [data, setData] = useState([
    {
      id: "",
      title: "",
      Description: " ",
      actionButton: {
        title: "",
        Link: "",
      },
    },
  ]);

  return (
    <div className="main-container py-10 ">
      <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-8 transition-transform transform hover:scale-105">
        Projects
      </h1>
      {/* my services */}

      <div className="services-container flex mt-12 space-x-7 px-5">
        <div className="service-card service1  shadow-lg rounded-xl  p-5 text-center space-y-3 cursor-pointer hover:bg-cyan-600">
          <i className="text-4xl fa-solid fa-gear"></i>
          <h1 className="text-3xl">Ecommerce-ProductCatalog</h1>
          <p>
            A Spring Boot-powered microservices architecture for managing and
            showcasing ecommerce products. Java, Springboot ,Microservices,
            Mysql, PostgreSQL, RESTAPIs.
          </p>
          {/* <button className="px-3 py-2 bg-orange-500 rounded-full shadow-lg text-2xl"  >
            Check
          </button> */}
           <br />
          <a className="px-3 py-2 bg-orange-500 rounded-full shadow-lg text-2xl" href="#contact" >
            Check
          </a>
        </div>
        <div className="service-card service2 shadow-lg rounded-xl  p-5 text-center  space-y-3 cursor-pointer hover:bg-cyan-600">
          <i className="text-4xl fa-solid fa-cart-shopping"></i>
          <h1 className="text-3xl">ReactFolio</h1>
          <p>
          ReactFolio is a modern portfolio website developed using React, Vite, Tailwind CSS, and Material-UI
          </p>
          {/* <button className="px-3 py-2 bg-orange-500 rounded-full shadow-lg text-2xl">
            Check
          </button> */}
           <br />
          <a className="px-3 py-2 bg-orange-500 rounded-full shadow-lg text-2xl" href="#contact" >
            Check
          </a>
        </div>
        <div className="service-card service3 shadow-lg rounded-xl p-5 text-center  space-y-3 cursor-pointer hover:bg-cyan-600">
          <i className="text-4xl fa-solid fa-server"></i>
          <h1 className="text-3xl">CardioGuard Sentinel</h1>
          <p>
          Real-time alerts for doctors, notifying them instantly if a patient's heartbeats cease or in the event of a heart attack-induced fall. 
          </p>
          {/* <button className="px-3 py-2 bg-orange-500 rounded-full shadow-lg text-2xl">
            Check
          </button> */}
           <br />
          <a className="px-3 py-2 bg-orange-500 rounded-full shadow-lg text-2xl" href="#contact" >
            Check
          </a>
        </div>
      </div>


        
    </div>
  );
}

export default Services;

// import React, { useState } from "react";
// import forServices from "./styles/forServices.css"

// function Services() {

// const [data,setData]=useState([
//     {
//         id:"",
//         title: "",
//         Description: " ",
//         actionButton:{
//             title: "",
//             Link: ""
//         }
// }])

//   return (
//     <>
//       <div className="main-container py-10 ">
//         <h1 className="text-3xl  font-bold text-center">My services</h1>

//         {/* ===================*/}

//         <div className="services-container flex mt-12 space-x-7 px-5">
//           <div className="service1 space-y-4 shadow-lg rounded-xl bg-slate-200 p-5 text-center space-y-3 cursor-pointer hover:bg-green-300">
//           <i class="text-4xl fa-solid fa-gear"></i>
//             <h1 className="text-3xl">Web Development</h1>
//             <p>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
//               nihil inventore dolores dolorem cum laborum autem rerum porro
//               dignissimos eveniet, modi dicta est dolore molestiae velit
//               distinctio voluptatum odit sapiente.
//             </p>
//             <button className="px-3 py-2 bg-orange-500 rounded-full shadow-lg text-2xl">
//               Check
//             </button>
//           </div>
//           <div className="shadow-lg rounded-xl bg-slate-200 p-5 text-center  space-y-3 cursor-pointer hover:bg-green-300">
//           <i class="text-4xl fa-solid fa-cart-shopping"></i>
//             <h1 className="text-3xl">Android Development</h1>
//             <p>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
//               nihil inventore dolores dolorem cum laborum autem rerum porro
//               dignissimos eveniet, modi dicta est dolore molestiae velit
//               distinctio voluptatum odit sapiente.
//             </p>
//             <button className="px-3 py-2 bg-orange-500 rounded-full shadow-lg text-2xl">
//               Check
//             </button>
//           </div>
//           <div className="shadow-lg rounded-xl bg-slate-200 p-5 text-center  space-y-3 cursor-pointer hover:bg-green-300">
//           <i class="text-4xl fa-solid fa-server"></i>
//             <h1 className="text-3xl">Backend Development</h1>
//             <p>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
//               nihil inventore dolores dolorem cum laborum autem rerum porro
//               dignissimos eveniet, modi dicta est dolore molestiae velit
//               distinctio voluptatum odit sapiente.
//             </p>
//             <button className="px-3 py-2 bg-orange-500 rounded-full shadow-lg text-2xl">
//               Check
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Services;
