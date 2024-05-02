import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
         Anurag project portfolio showcases his proficiency in developing
         dynamic and responsive user interfaces using React.js, managing data with MongoDB,
          and building robust backend services with Node.js and Express.js.
           He is adept at version control using Git and collaborating with teams using agile methodologies.
        </p>

        <br />

        <p className="text-xl">
        In addition to his technical skills,
          excellent problem-solving abilities and a keen eye for detail,
          allowing him to deliver high-quality solutions that meet client requirements and exceed expectations.


        </p>
      </div>
    </div>
  );
};

export default About;
 