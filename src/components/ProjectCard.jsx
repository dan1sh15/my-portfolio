import React from 'react';
import attachLink from "../assets/attachLink.svg";
import attachLinkDark from "../assets/attachLinkDark.svg"
import attachGitLink from "../assets/attachGitLink.svg";
import attachGitLinkDark from "../assets/attachGitLinkDark.svg"
import "./home.css";

const ProjectCard = (props) => {
    const {title, description, techStack, link, githubLink, img} = props;
    const darkMode = props.darkMode;
  return (
    <div className={`flex h-[100%] mx-auto gap-3 flex-col ${darkMode ? "bg-[#363636]" : "bg-[#fff]"} items-center max-phone:w-[90%] max-sm:w-[70%] mb-7 rounded-xl ${darkMode ? "noShadow" : "customShadow"} hover:scale-[1.04] transition-all duration-300 ease-in-out justify-between`}>
      <div className={`flex h-full flex-col gap-4 poppins`} >
        <img className=' rounded-tl-xl rounded-tr-xl object-cover' src={img} height="40%" width="100%" alt="project" />
        <h1 className={` ${darkMode ? "text-[#CCCCCC]" : "text-solidHeading"} max-md:text-[1.25rem] text-[1.75rem] font-semibold text-center`}>{title}</h1>
        <p className={`${darkMode ? "text-[#CCCCCC]" : "text-darkContent"} px-5 max-md:text-[1rem] text-[1.125rem] font-light leading[1.625rem]`}>
            {description.length <= 150 ? (description) : (description.substring(0, 150)) + "..."}
        </p>
        <div className={`px-5 ${darkMode ? "text-[#CCCCCC]" : "text-solidHeading"} max-md:text-[0.875rem] text-[1rem] font-semibold`}>Tech Stack: <span className={`${darkMode ? "text-[#CCCCCC]" : "text-solidHeading"} max-md:text-[0.75rem] text-[0.875rem] font-light`}>{techStack}</span></div>
      </div>
      <div className='flex w-full px-5 max-sm:gap-y-3 max-ipad:flex-col flex-row items-center justify-between mb-5 '>
          <div className='flex  gap-3 items-center max-sm:w-[full]'>
              {
                darkMode ? (<img src={attachLinkDark} alt="attach link dark" />) : (<img src={attachLink} alt="attach link symbol" />)
              }
              <a className={`underline ${darkMode ? "text-[#CCCCCC]" : "text-solidHeading"} max-md:text-[0.75rem] font-semibold`} href={link} target='_blank' rel='noreferrer noopener'>Live Preview</a>
          </div>

          <div className='flex gap-3 items-center'>
              {
                darkMode ? <img src={attachGitLinkDark} alt="github symbol dark" /> : <img src={attachGitLink} alt="github symbol" />
              }
              <a className={`underline ${darkMode ? "text-[#CCCCCC]" : "text-solidHeading"} max-md:text-[0.75rem]  font-semibold`} href={githubLink} target='_blank' rel='noreferrer noopener'>View Code</a>
          </div>
      </div>
    </div>
  )
}

export default ProjectCard
