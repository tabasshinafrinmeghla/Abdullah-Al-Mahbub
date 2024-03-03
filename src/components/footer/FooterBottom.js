import React from 'react';
import { FaFontAwesome, FaPhone } from 'react-icons/fa';

// import {  } from 'react-icons/fa';

const FooterBottom = () => {
  return (
    <div className="w-full py-10 ">
      <p className="text-center text-gray-500 text-base">
        © 2024. All rights reserved by Abdullah Al Mahbub
      </p>
      <br/>
      <p className="text-center text-gray-500 text-base">
        DEVELOPERS @tabasshin Afrin Meghla 
        <FaFontAwesome icon={FaPhone} />
        +8801745771186
      </p>
    </div>
  );
}

export default FooterBottom