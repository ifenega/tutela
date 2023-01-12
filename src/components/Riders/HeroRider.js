import React from "react";
import rider from "../../img/riders2.svg";
import logo from "../../img/logo.svg";
import Button from "../Home/Button";
import { Link } from "react-router-dom";
const HeroRider = () => {
  return (
    <>
      <div className='flex items-center justify-center'>
        <Link to='/' >
          <img src={logo} alt='logo' />
        </Link>
      </div>
      <div className=' 2xl:max-w-[1600px] flex justify-center mx-auto  '>
        <div className="flex gap-5 md:gap-10 flex-col md:flex-row items-center justify-center px-5 md:px-10">
          <img src={rider} alt="" className='w-[200px] sm:w-[400px] lg:w-full' />

          <div className='text-left'>
            <h1 className='text-[#20262A] text-3xl sm:text-5xl lg:text-6xl mb-4 sm:mb-8 font-bold text-center md:text-left'>Riders protection plan</h1>
            <p className='mb-4 sm:mb-8'>Riders protection plan, is a type of protection plan  designed to cover you against damages that may happen to you and your bike due to events like accidents, fires, or natural disasters.</p>
            <div className='flex  gap-3   flex-row justify-center'>
              <div className='border border-[#008080] p-2  flex items-center justify-center text-black'>
                <p className="text-sm font-normal">Zero  Paper Work</p>
              </div>
              <div className='border border-[#008080] p-3  flex items-center justify-center text-black'>
                <p className="text-sm font-normal">Quick Claim Process</p>
              </div>
              <div className='border border-[#008080] p-3  flex items-center justify-center text-black'>
                <p className="text-sm font-normal">Affordable Premium</p>
              </div>
            </div>

            <div className='mt-5 w-full flex items-center justify-center'>
              <button className='text-white bg-[#008080] px-2 py-3 rounded-xl font-medium '>Start for Free</button>
            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default HeroRider;
