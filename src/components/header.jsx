import { useState } from "react";
import logo from '../assets/Icons/logo.svg'
import { Link } from "react-router-dom";


function Header() {
    return (
      <nav className="flex items-center justify-between bg-primary lg:mx-16 sm:mx-5.25 mt-8 lg:pl-6 pl-4 lg:pr-10 pr-8 py-1.75 text-[#FFFFFF] lg:text-lg text-sm border border-[#0088FF] lg:rounded-lg rounded-[6px] leading-[100%] -tracking-[1.1p%] font-dm">
        <img src={logo} alt="HealTek logo image" className="lg:w-12 w-14.5 lg:h-full h-11" />
        <ul className="sm:flex hidden items-center lg:gap-16 gap-11.5">
          <li className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:origin-left after:h-0.5 after:bg-current after:w-full after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
            <a href="#">Features</a>
          </li>
          <li className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:origin-left after:h-0.5 after:bg-current after:w-full after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
            <a href="#">How It Works</a>
          </li>
          <li className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:origin-left after:h-0.5 after:bg-current after:w-full after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
            <a href="#">About</a>
          </li>
        </ul>
        <ul className="sm:flex hidden lg:gap-10 sm:gap-7.5 items-center">
          <li className="bg-primary border rounded-[10px] border-[#E2E8F0] text-[#FFFFFF] lg:py-4 sm:py-3 lg:px-3.75 sm:px-3 hover:scale-90 transition-transform duration-400 cursor-pointer">
            <Link to="/signup">Get Started</Link>
          </li>
          <li className="relative after:content-[''] after:absolute after:h-0.5 after:w-full after:bg-current after:left-0 after:-bottom-1.5 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
            <Link to="/login">Sign In</Link>
          </li>
        </ul>
      </nav>
    );

}
export default Header;