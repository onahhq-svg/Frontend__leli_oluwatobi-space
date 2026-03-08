import { useState } from "react";
import logo from '../assets/Images/logo.svg'

function Header() {
    return (
      <nav className="flex items-center justify-between bg-[#E5F1FA] mx-[64px] mt-[44px] pr-[39px] text-[#0F172A] text-lg border border-[#0088FF] rounded-[8px] leading-[100%] -tracking-[1.1p%] font-[DM Sans">
        <img src={logo} alt="HealTek logo image" />
        <ul className="flex items-center gap-[64px]">
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
        <ul className="flex gap-[40px] items-center">
          <li className="bg-[#0072CE] border rounded-[10px] border-[#E2E8F0] text-[#FFFFFF] p-[10px]">
            <a href="#">Get Started</a>
          </li>
          <li>
            <a href="#">Sign In</a>
          </li>
        </ul>
      </nav>
    );

}
export default Header;