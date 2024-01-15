import Link from "next/link";
import { useState, useContext, useEffect } from "react";

const StyledLink = ({ href, children, className }) => (
  <Link href={href}>
    <span className={`${className} `}>{children}</span>
  </Link>
);

export default function NavBar() {
  return (
    <nav className=" slideDown fixed top-0 w-full p-4 pl-16 pr-16 pb-12 flex justify-between items-center pb-4 bg-transparent backdrop-filter backdrop-blur-md z-20 shadow-lg">
      <StyledLink href="/" className="text-white font-bold text-xl ">
        Explore SLHS
      </StyledLink>
      <div className="space-x-7">
        <StyledLink href="/" className="text-white font-bold text-xl hover:underline">
          Home
        </StyledLink>
        <StyledLink href="#about" className="text-white font-bold text-xl hover:underline">
          Timeline
        </StyledLink>
        <StyledLink href="#awards" className="text-white font-bold text-xl hover:underline">
          Awards
        </StyledLink>

        <StyledLink href="#programs" className="text-white font-bold text-xl hover:underline">
          Courses
        </StyledLink>
 
        <StyledLink href="/documentation" className="text-white font-bold text-xl hover:underline">
          Documentation
        </StyledLink>
      </div>
    </nav>
  );
 }
