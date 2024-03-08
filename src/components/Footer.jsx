import React from 'react'
import "./navbar.css";
import linkedin from "../assets/linkedin.svg"
import github from "../assets/github.svg"

const Footer = ({darkMode}) => {

    const githubUrl = process.env.REACT_APP_GITHUB_URL;
    const linkedInUrl = process.env.REACT_APP_LINKEDIN_URL;

  return (
    <div className='w-full '>
      <footer className='w-full flex flex-col gap-y-3 items-center h-[3.675rem]'>
        <div className='w-full h-[4px] gradientBorder z-10'></div>
        <div className='w-10/12 flex  items-center justify-around'>
            <div className='flex max-md:hidden gap-5'>
                <a href={githubUrl} target='_blank' rel="noopener noreferrer" className='links'>
                    <img src={github} alt="" />
                </a>

                <a href={linkedInUrl} target='_blank' rel='noopener noreferrer' className='links'>
                    <img src={linkedin} alt="" />
                </a>
            </div>

            <p className={`poppins  text-sm ${darkMode ? "text-[#D9D9D9]" : "text-black"}`}>Designed and build by <span className='customText text-sm'>Mohammad Danish</span></p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
