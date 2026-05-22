import { useState } from "react";
import logo from '../assets/Icons/logo.svg'
import { Link } from "react-router-dom";


function Header() {
    return (
      <nav className="flex items-center justify-between bg-[#0072CE] mx-16 mt-8 pl-6 pr-10 py-1.75 text-[#FFFFFF] text-lg border border-[#0088FF] rounded-lg leading-[100%] -tracking-[1.1p%] font-dm">
        <img src={logo} alt="HealTek logo image" />
        <ul className="flex items-center gap-16">
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
        <ul className="flex gap-10 items-center">
          <li className="bg-[#0072CE] border rounded-[10px] border-[#E2E8F0] text-[#FFFFFF] py-4 px-3.75 hover:scale-90 transition-transform duration-400 cursor-pointer">
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