// import React from "react";
// import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
// import installNode from "../assets/portfolio/installNode.jpg";
// import navbar from "../assets/portfolio/navbar.jpg";
// import reactParallax from "../assets/portfolio/reactParallax.jpg";
// import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
// import reactWeather from "../assets/portfolio/reactWeather.jpg";

// const Portfolio = () => {
//   const portfolios = [
//     {
//       id: 1,
//       src: arrayDestruct,
//     },
//     {
//       id: 2,
//       src: reactParallax,
//     },
//     {
//       id: 3,
//       src: navbar,
//     },
//     {
//       id: 4,
//       src: reactSmooth,
//     },
//     {
//       id: 5,
//       src: installNode,
//     },
//     {
//       id: 6,
//       src: reactWeather,
//     },
//   ];

//   return (
//     <div
//       name="portfolio"
//       className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
//     >
//       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500">
//             Portfolio
//           </p>
//           <p className="py-6">Check out some of my work right here</p>
//         </div>

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
//           {portfolios.map(({ id, src }) => (
//             <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
//               <img
//                 src={src}
//                 alt=""
//                 className="rounded-md duration-200 hover:scale-105"
//               />
//               <div className="flex items-center justify-center">
//                 <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
//                   Demo
//                 </button>
//                 <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
//                   Code
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;

import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      //Ecommerce
      id: 1,
      src: arrayDestruct,
      demoLink: "https://e-commerce-nc5f0hjpo-anurag-lowanshis-projects.vercel.app/",
      codeLink: "https://github.com/anuraglowanshi007/E-commerce.git"
    },
    {  
      //parallax
      id: 2,
      src: reactParallax,
      demoLink: "https://parallax-website-962a3upry-anurag-lowanshis-projects.vercel.app/",
      codeLink: "Uhttps://github.com/anuraglowanshi007/parallax-website.git"
    },
    {  
      //crypto verse
      id: 3,
      src: navbar,
      demoLink: "https://crypto-verse-rho.vercel.app/",
      codeLink: "https://github.com/anuraglowanshi007/CryptoVerse.git"
    },
    {
      //profile viewers
      id: 4,
      src: reactSmooth,
      demoLink: "https://profile-viewer-rho.vercel.app/",
      codeLink: "https://github.com/anuraglowanshi007/Profile-viewer.git"
    },
    {
      //bussiness card 
      id: 5,
      src: installNode,
      demoLink: "https://bussiness-card-9fxup25yh-anurag-lowanshis-projects.vercel.app/",
      codeLink: "https://github.com/anuraglowanshi007/TicTacToe.git"
    },
    {
      //weather app
      id: 6,
      src: reactWeather,
      demoLink: "https://weather-9xuj970nm-anurag-lowanshis-projects.vercel.app/",
      codeLink: "https://github.com/anuraglowanshi007/Weather-app"
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demoLink} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" target="_blank" rel="noopener noreferrer">
                  Demo
                </a>
                <a href={codeLink} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" target="_blank" rel="noopener noreferrer">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

