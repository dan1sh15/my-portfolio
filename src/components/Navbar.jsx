import React, { useState } from 'react';
// import img from "../assets/image.png";
import linkedin from "../assets/linkedin.svg"
import github from "../assets/github.svg"
import './navbar.css'
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

const Navbar = (props) => {
    const githubUrl = process.env.REACT_APP_GITHUB_URL;
    const linkedInUrl = process.env.REACT_APP_LINKEDIN_URL;

    const darkMode = props.darkMode;
    const setDarkMode = props.setDarkMode;

    const [showNavbar, setShowNavbar] = useState(false);

    const toggleHandler = () => {
        setShowNavbar(!showNavbar);
    }

    const clickHandler = () => {
        setDarkMode(!darkMode); 
    }

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if(section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    
  return (
    <div className={`w-full ${darkMode ? 'bg-[#191919]' : 'bg-[#fff]'} h-[3.6875rem] mx-auto flex flex-col items-center justify-between z-10 fixed`}>
        <div className={`w-10/12 pt-3 flex relative items-center justify-between`}>
            <button onClick={() => {
                scrollToSection('home')
            }}>
                {/* <img src={img} className='rounded-full border-4 border-darkContent' height="60px" width="60px" alt="profileImage" /> */}
                <p className={`textFamily ${darkMode ? "text-slate-200 hover:text-[#fff] markTextDark" : "text-solidHeading hover:text-black markText"}  font-semibold hover:font-bold  ease-in-out tracking-wide text-xl`}>{ `<Danish />` }</p>
            </button>

            <nav className={`flex max-md:absolute ${showNavbar ? "max-md:top-[60px]" : "max-md:-top-[900px]"} max-md:z-5 ${darkMode ? "max-md:bg-[#191919]" : "max-md:bg-white"}  max-phone:items-center max-phone:text-center max-phone:text-[0.75rem] max-md:w-[100vw] max-md:-left-8  max-md:p-5 max-md:items-start max-md:justify-center items-center gap-5 max-phone:flex-col transition-all duration-300 ease-in-out`}>
                <ul className={`flex gap-5 max-md:flex-col max-md:gap-y-2 max-md:text-[1.5rem] ${darkMode ? "text-lightContent" : "text-[#666]"} max-md:font-bold textFamily`}>
                    <li>
                        <button className={`${darkMode ? "markTextDark" : "markText"} hover:font-semibold ${darkMode ? "hover:text-slate-100" : "hover:text-black"} transition-all duration-100 ease-in-out`} onClick={() => {scrollToSection('home')}}>Home</button>
                    </li>
                    <li> 
                        <button className={`${darkMode ? "markTextDark" : "markText"} hover:font-semibold ${darkMode ? "hover:text-slate-100" : "hover:text-black"} transition-all duration-100 ease-in-out`} onClick={() => {scrollToSection('tech-stack')}}>Tech Stack</button>
                    </li>
                    <li>
                        <button className={`${darkMode ? "markTextDark" : "markText"} hover:font-semibold ${darkMode ? "hover:text-slate-100" : "hover:text-black"} transition-all duration-100 ease-in-out`} onClick={() => {scrollToSection('project')}}>Project</button>
                    </li>
                    <li>
                        <button className={`${darkMode ? "markTextDark" : "markText"} hover:font-semibold ${darkMode ? "hover:text-slate-100" : "hover:text-black"} transition-all duration-100 ease-in-out`} onClick={() => {scrollToSection('contact')}}>Contact</button>
                    </li>
                </ul>

                <a href={githubUrl} target='_blank' rel="noopener noreferrer" className='links'>
                    <img src={github} alt="" />
                </a>

                <a href={linkedInUrl} target='_blank' rel='noopener noreferrer' className='links'>
                    <img src={linkedin} alt="" />
                </a>

                <button onClick={clickHandler} className={`text-2xl ${darkMode ? "text-[#272727] bg-[#8d8d8de6] hover:bg-[gray]" : "text-[#fff] bg-[#686868]"} rounded-full p-[3px] hover:cursor-pointer iconLinks`}>
                    {
                        darkMode ? <CiLight /> : <MdOutlineDarkMode />
                    }
                </button>
            </nav>

            <div onClick={toggleHandler} className={`hidden cursor-pointer absolute z-50 right-0 max-md:block text-3xl ${darkMode ? "text-[#fff]" : "text-solidHeading"}`}>
                {
                    showNavbar ? <RxCross1 /> : <RiMenu3Fill /> 
                }
            </div>
        </div>

        <div className='w-full h-[4px] gradientBorder z-10'></div>
    </div>
  )
}

export default Navbar
