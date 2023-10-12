import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb--8">
          <p className="text-4xl font font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20 ">
        Hello, I'm Muhammad Huzaifa Saleem, and I'm a Software Engineering student at UIT (NED). I'm really passionate about learning how to create computer programs. Alongside my studies, I also work as a freelance designer. I enjoy combining my creativity with practicality to make designs that not only look good but are also easy for people to use.
        </p>

        <br />

        <p className="text-xl">
        I also enjoy building the websites using ReactJs. Currently, I'm learning about the MERN stack to make websites and apps that are dynamic and functional. I'm always open to meeting new people and working on exciting projects together, so please feel free to connect with me. My goal is to contribute to the world of digital design and software engineering in innovative ways.
        </p>
      </div>
    </div>
  );
};

export default About;
