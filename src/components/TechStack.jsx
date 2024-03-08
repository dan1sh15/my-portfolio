import React from 'react'
import "./home.css";
import icons from '../data/Icons';

const TechStack = ({darkMode}) => {
  return (
    <div
     id='tech-stack' className='w-10/12 mx-auto flex flex-col gap-5 items-center'>
      <h1 className={`poppins font-bold max-md:text-[2rem] text-[3rem] ${darkMode ? "text-[#CCCCCC]" : "text-solidHeading"}`}>My Tech Stack</h1>
      <p className={`poppins text-center max-md:text-[1.25rem] text-[2rem] ${darkMode ? "text-lightContent" : "darkContent"} font-medium`}>Technologies I've been working with recently</p>
      <div className=' grid max-md:grid-cols-3 grid-cols-6 my-10 gap-8 w-[80%]'>
        
        {
            icons.map( (icon, index) => (
                <div className='hover:scale-[1.1] transition-all duration-300 ease-in-out' key={index}>
                    <img src={icon} height={100} width={100} alt="" />
                </div>
            ))
        }

      </div>
    </div>
  )
}

export default TechStack
