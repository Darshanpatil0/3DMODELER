import { motion, spring } from "framer-motion";
import React from "react";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <div className="h-full  hero99 bg-[#1a1919] align w-full flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="left h-full w-full p-4">
        <div className="sidebar w-[90%] md:w-[32%] rounded-full relative p mt-16 ml-4 h-[10%] flex items-center justify-center bg-[#2e3033]">
          <motion.div
            initial={{ x: "270%" }}
            animate={{ x: "0%" }}
            transition={{ duration: "2", type: "tween" }}
            className="h-[80%] rounded-full absolute ml-2 left-0 w-[26%] bg-[#1a1919]"
          ></motion.div>
          <div className="z-20 town font-medium text-[5vw] md:text-[1.2vw]">
            THE BEST 3D MODELER IN INDIA
          </div>
        </div>
        <div className="textheding">
          <h1 className="text-4xl md:text-7xl z-20 mainheding font-semibold py-8 px-4 leading-[140%]">
            <div className="heding m-0 p-0 inline-block">AROX 
            </div> 3D <br />
             MODELER <div className="heding m-0 p-0 inline-block"></div>
            <p className="sunheding font-medium font-serif md:text-lg mt-4 ml-2 md:ml-8">
              The best 3D modeler in india with more then 3 year+ experience with in your budget
               
            </p>
          </h1>
        </div>
        <div className="number h-[16%] num2 w-full md:w-[60%] p-4 ml-0 md:ml-4 flex flex-col md:flex-row items-center justify-between">
          <div className="text flex flex-col items-center">
            <h1 className="text-xl md:text-2xl">
              <CountUp start={0} end={120} duration={4} prefix="+" />
            </h1>
            <h3 className="text-[#999998]">HAPPY CLINT</h3>
          </div>
          <div className="text flex flex-col items-center">
            <h1 className="text-xl md:text-2xl">
              <CountUp start={800} end={984} duration={4} prefix="+" />
            </h1>
            <h3 className="text-[#999998]">TOTLE PROJECT MADE</h3>
          </div>
          <div className="text flex flex-col items-center">
            <h1 className="text-xl md:text-2xl">
              <CountUp start={0} end={3} duration={4} prefix="+" />
            </h1>
            <h3 className="text-[#999998]">YEARS OF EXPERIENCE</h3>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="heroright relative h-full  bg-[#1a1919] w-full md:w-[30%] p-4">
        <motion.div
          initial={{ right: "0" }}
          animate={{ right: "4rem" }}
          transition={{ duration: 3, type: "spring", delay: 0.1 }}
          className="hart h-[100px] md:h-[140px] p-4 relative w-[100px] md:w-[120px] rounded-md border-2 border-zinc-800 mx-auto"
        >
          <img className="w-[8vh] flex items-center justify-center h-[8vh]" src="./img/icon1.png" alt="app" />
          <p className="text-md mt-2 text-[#999998] font-bold">blander </p>
          <p className=" text-xl font-bold">  </p>
        </motion.div>
        <motion.div
          initial={{ left: "-26rem", top: "10px" }}
          animate={{ left: "-18rem", top: "10px" }}
          transition={{ duration: 3, type: "spring", delay: 0.1 }}
          className="crelers flex flex-col items-center gap-6 rounded-xl mt-6 md:mt-[55%] w-full bg-[#1a1919] p-4"
        >

          <div className="ml-[58%] mt-[10%] flex items-center justify-center flex-col mx-12 ">

          <img className="w-[7rem]" src="./img/unreal.png" alt="app" />
          <p className="text-xl font-mono text-center">
          unreal for animetion
          </p>
          </div>


        </motion.div>

        <motion.img
          initial={{ right: "12rem" }}
          whileInView={{ right: "18rem" }}
          transition={{ duration: 3, type: "spring", delay: 0.1 }}
          className="hidden md:block h-[70%] w-[70%] absolute right-[91%] top-0"
          src="./img/hero_image_back.png"
          alt=""
        />

        <img
          className="hero-img  object-cover mr-12 p-7 z-10 -mt-4"
          src="./img/img.png"
          alt="Hero Image"
        />
      </div>
    </div>
  );
};

export default Hero;
