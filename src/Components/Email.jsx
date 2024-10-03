import React from "react";
import { FaUser, FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // Importing Font Awesome Icons

const Email = () => {
  return (
    <div className="w-full h-[40%] mainj bg-[#1a1919] Email" id="Email">
      <div className="container rightcontener h-full w-full flex items-center join justify-between">
        <div className="relative">
          <div className="line"></div>
          <div className="text rightj text-5xl leading-[140%] ml-10 font-bold gap-5">
            <div>
              <span className="heding">READY TO</span>
              <span className="ml-8">CREATE</span>
            </div>
            <div>
              <span className="ml-4"> 3D MODELER</span>
              <span className="heding ml-8">WITH US?</span>
            </div>
          </div>
        </div>

        {/* Replacing form with text and icons */}
        <div className="flex leftj items-center mr-32  bg-zinc-800   p-12 px-12 rounded-xl">
          <div className="flex flex-col gap-4 text-white">
            

            {/* Phone Number */}
          

            {/* Email Address */}
            <div className="flex items-center gap-2">
              <FaEnvelope />
              <span>Email Address: ayushbagwale@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
