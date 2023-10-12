import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdKeyboardArrowRight } from "react-icons/md"; 
import {Link} from 'react-scroll';

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a React Js Developer</h2>
          <p className="text-white py-4">
          I have spent 2 years working as a UI/UX Designer and ReactJs Developer. Currently, my passion lies in crafting amazing web applications that deliver outstanding results.
          </p>
          <div>
            <Link to="Portfolio" smooth duration={500}  className=" group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to to-blue-400 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={26} className="ml-1" /> 
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img src={HeroImage} alt="my profile pic" className="rounded-2xl mx-auto w-1/2 md:w-2/1"/>
        </div>
      </div>
    </div>
  );
};

export default Home;

