import { useState } from "react";
import logo from '../assets/Icons/logo.svg'
import { Link } from "react-router-dom";


function Header() {
    return (
      <nav className="flex items-center justify-between bg-[#E5F1FA] mx-16 mt-11 pr-9.75 text-[#0F172A] text-lg border border-[#0088FF] rounded-lg leading-[100%] -tracking-[1.1p%] font-dm">
        <img src={logo} alt="HealTek logo image" />
        <ul className="flex items-center gap-16">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">How It Works</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
        <ul className="flex gap-10 items-center">
          <li className="bg-[#0072CE] border rounded-[10px] border-[#E2E8F0] text-[#FFFFFF] p-2.5">
            <Link to="/signup">Get Started</Link>
          </li>
          <li>
            <a href="#">Sign In</a>
          </li>
        </ul>
      </nav>
    );

}
export default Header;