import React, { useState } from 'react'
import emailjs from "@emailjs/browser";
import Toast from "react-hot-toast";
import "./home.css";

const Contact = ({darkMode}) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        msg: "",
    });

    const changeHandler = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        emailjs.send(process.env.REACT_APP_SERVICE_KEY, process.env.REACT_APP_TEMPLATE_KEY, {
            name: formData.name,
            email: formData.email,
            msg: formData.msg,
        }, process.env.REACT_APP_KEY).then( () => {
            Toast.success("Response Recieved Successfully");
            setFormData({
                name: "",
                email: "",
                msg: "",
            });
        }, (error) => {
            console.log(error);
            Toast.error("Something went wrong");
        } )


        console.log(formData);
    };

  return (
    <div 
    id='contact' className='py-10 min-h-[100vh] w-10/12 mx-auto flex flex-col gap-y-5 items-center'>
        <h1 className={`poppins font-bold max-md:text-[2rem] text-[3rem] ${darkMode ? "text-[#CCCCCC]" : "text-solidHeading"}`}>Contact</h1>
        <p className={`poppins max-md:text-[1.25rem] text-[2rem] ${darkMode ? "text-lightContent" : "text-darkContent"} font-medium uppercase text-center`}>Get in Touch</p>
      <form onSubmit={submitHandler} className={`flex flex-col max-phone:w-full max-md:w-11/12 w-8/12 gap-y-5 ${darkMode ? "noShadow bg-[black]" : "customShadow"} max-sm:p-4 p-6`}>
        <div className='flex flex-col gap-y-3'>
            <label htmlFor="name" className={`font-semibold ${darkMode ? "text-[#CCCCCC]" : "text-solidHeading"} max-md:text-base text-lg poppins`}>Your Name</label>
            <input required id="name" name='name' type="text"
                onChange={changeHandler}
                placeholder='Enter your name'
                className={`max-md:text-base max-sm:px-2 px-4 py-2 font-medium ${darkMode ? "text-lightContent bg-[#363636]" : "text-darkContent bg-slate-200"} rounded-md outline-none`}
              />
        </div>

        <div className='flex flex-col gap-y-3'>
            <label htmlFor="email" className={`font-semibold ${darkMode ? "text-[#CCCCCC]" : "text-solidHeading"} text-lg poppins max-md:text-base`}>Your Email</label>
            <input required id='email' name='email' type="email"
                onChange={changeHandler}
                placeholder='Enter Your Email'
                className={`max-md:text-base px-4 py-2 font-medium ${darkMode ? "text-lightContent bg-[#363636]" : "text-darkContent bg-slate-200"} rounded-md outline-none`}
            />
        </div>

        <div className='flex flex-col gap-y-3'>
            <label htmlFor="msg" className={` max-md:text-base font-semibold ${darkMode ? "text-[#CCCCCC]" : "text-solidHeading"} text-lg poppins`}>Your Message</label>
            <textarea required name="msg" id="msg" cols="20" rows="8"
                onChange={changeHandler}
                placeholder='Enter your message'
                className={`max-md:text-base px-4 py-2 font-medium ${darkMode ? "text-lightContent bg-[#363636]" : "text-darkContent bg-slate-200"} rounded-md outline-none`}
            />
        </div>

        <button className={`${darkMode ? "bg-[#363636] text-[#CCCCCC] hover:bg-[#3f3f3f]" : "bg-slate-200 text-solidHeading hover:bg-slate-100"} mt-5 hover:scale-[1.04] transition-all duration-[0.3s] ease-linear  w-fit mx-auto px-4 py-2 max-md:text-base text-xl poppins rounded-lg  font-semibold`}>
            Submit
        </button>
      </form>
    </div>
  )
}

export default Contact
