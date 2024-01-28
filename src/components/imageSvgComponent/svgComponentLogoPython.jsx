import { useState } from "react";

const SvgComponentLogoPython = (props) => {
    const [darkMode, setDarkMode] = useState(true);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      {...props}
      viewBox="0 0 64 64"
    >
      <linearGradient
        id="BVfSkcHaucNDvMxtSzwJza_uLDrtp8o8zTG_gr1"
        x1="27"
        x2="27"
        y1="11.043"
        y2="14.639"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor={darkMode ? '#ffffff' : '#000000'}></stop>
        <stop offset="1" stopColor={darkMode ? '#ffffff' : '#000000'}></stop>
      </linearGradient>
      <circle
        cx="27"
        cy="13"
        r="2"
        fill="url(#BVfSkcHaucNDvMxtSzwJza_uLDrtp8o8zTG_gr1)"
      ></circle>
      <linearGradient
        id="BVfSkcHaucNDvMxtSzwJzb_uLDrtp8o8zTG_gr2"
        x1="37"
        x2="37"
        y1="49.128"
        y2="52.83"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor={darkMode ? '#ffffff' : '#000000'}></stop>
        <stop offset="1" stopColor={darkMode ? '#ffffff' : '#000000'}></stop>
      </linearGradient>
      <circle
        cx="37"
        cy="51"
        r="2"
        fill="url(#BVfSkcHaucNDvMxtSzwJzb_uLDrtp8o8zTG_gr2)"
      ></circle>
      <linearGradient
        id="BVfSkcHaucNDvMxtSzwJzc_uLDrtp8o8zTG_gr3"
        x1="32"
        x2="32"
        y1="6.66"
        y2="56.873"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor={darkMode ? '#ffffff' : '#000000'}></stop>
        <stop offset="1" stopColor={darkMode ? '#ffffff' : '#000000'}></stop>
      </linearGradient>
      <path
        fill="url(#BVfSkcHaucNDvMxtSzwJzc_uLDrtp8o8zTG_gr3)"
        d="M51,21h-7v-8c0-3.859-3.14-7-7-7H27c-3.86,0-7,3.141-7,7v8h-7c-3.86,0-7,3.141-7,7v8	c0,3.859,3.14,7,7,7h7v8c0,3.859,3.14,7,7,7h10c3.86,0,7-3.141,7-7v-8h7c3.86,0,7-3.141,7-7v-8C58,24.141,54.86,21,51,21z M13,41	c-2.757,0-5-2.243-5-5v-5h7v-2H8v-1c0-0.342,0.035-0.677,0.101-1H23v-2H9.026c0.914-1.207,2.348-2,3.974-2h16v-2h-7v-8	c0-2.757,2.243-5,5-5h10c2.757,0,5,2.243,5,5v15c0,1.654-1.346,3-3,3h-5.489h-3.021H25c-2.757,0-5,2.243-5,5v5H13z M51,41H35v2h7v8	c0,2.757-2.243,5-5,5H27c-2.757,0-5-2.243-5-5V36c0-1.654,1.346-3,3-3h5.489h3.021H39c2.757,0,5-2.243,5-5v-5h7c2.757,0,5,2.243,5,5	v5h-7v2h7v1c0,0.342-0.035,0.677-0.101,1H41v2h13.974C54.061,40.207,52.627,41,51,41z"
      ></path>
    </svg>
  );
};

export default SvgComponentLogoPython;
