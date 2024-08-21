import React from 'react';
import './loader.css';

const Loader = ({ color }) => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <span className={`loader border-[${color}]`}></span>
    </div>
  )
}

export default Loader
