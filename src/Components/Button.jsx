import React from 'react';

const Button = ({ btnTxt, icon }) => {
  return (
    <button className="gap-1 flex items-center p-4 bg-primary rounded-r-full rounded-t-full text-[14px] text-white font-secondary font-semibold hover:bg-[#116e63] hover:text-white transition-colors ease-in-out duration-300 relative ">{btnTxt}
      <span className='text-white text-xl'>{icon}</span>
    </button>
  );
};

export default Button;