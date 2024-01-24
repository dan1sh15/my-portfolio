import React, { useEffect } from 'react'
import projects from '../data/Projects'
import ProjectCard from './ProjectCard'
import "./home.css";
import { motion, useAnimation } from 'framer-motion';

const Projects = ({darkMode}) => {

  const controls = useAnimation();

  useEffect(() => {
    // Trigger animations when the component mounts
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);
    
  return (
    <motion.div
        initial={{ opacity: 0, y: 100 }} 
        animate={controls}
        id='project' className='w-10/12 max-lg:w-[95%] mx-auto flex flex-col gap-5 items-center'>
        <h1 className={`poppins font-bold max-md:text-[2rem] text-[3rem] ${darkMode ? "text-[#CCCCCC]" : "text-solidHeading"}`}>Projects</h1>
        <p className={`poppins max-md:text-[1.25rem] text-[2rem] ${darkMode ? "text-lightContent" : "text-darkContent"} font-medium`}>Things I've built so far</p>

        <div className='grid grid-cols-3 gap-x-10 max-ipad:grid-cols-2 max-sm:grid-cols-1 place-items-center max-md:gap-x-6 max-phone:gap-3'>
            {
                projects.map( (project, idx) => {
                    return <ProjectCard darkMode={darkMode} key={idx} title={project.title} img={project.img} description={project.description} techStack={project.techStack} link={project.link} githubLink={project.githubLink} />
                })
            }
        </div>

    </motion.div>
  )
}

export default Projects
