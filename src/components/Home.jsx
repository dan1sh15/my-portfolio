import React from 'react'
import './home.css';
import img from "../assets/image.png";
import resumeFile from "../assets/Resume_Danish.pdf";
import { TypeAnimation } from 'react-type-animation';

const Home = ({darkMode}) => {
    
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resumeFile;
        link.download = 'Danish_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

  return (
    <div id='home' className='w-10/12 pt-[6.25rem] min-h-[100vh] mx-auto mb-10  flex flex-col gap-y-14 items-center justify-center'>
      <div className='flex items-center max-md:flex-col h-auto  justify-between w-10/12'>
        
        <div className={` max-md:text-[1.75rem] max-md:w-full text-[2.75rem]  ${darkMode ? "text-[#D9D9D9]" : "text-black"} poppins font-bold max-md:leading-[3rem] max-md:tracking-normal leading-[4.375rem] tracking-tighter`} >
            <p>
                Hi 👋,
            </p>
            <p>My name is</p>
            <p className='highlightText'>Mohammad Danish</p>
            <p>I am a <TypeAnimation
                sequence={[
                  "Front-End Developer", 1000,
                  "Back-End Developer", 1000,
                  "Full Stack Developer", 1000,
                ]}
                speed={50}
                repeat={Infinity}
                wrapper='span'
                className=' mx-1'
                cursor={false}
               />
            </p>
        </div>

        <div className='rounded-full p-3 flex  items-center max-md:w-full w-[40%] relative justify-center h-[21rem]'>
            <img src={img} className='rounded-full absolute' height={250} width={250} alt="" />
        </div>

      </div>

      <button onClick={handleDownload} className='btn'>
        Download CV
      </button>
    </div>
  )
}

export default Home
