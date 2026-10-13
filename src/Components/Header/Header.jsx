import React, { useState } from "react";
import { NavLink } from "react-router";
import { Menu,X} from "lucide-react";
const Header = () => {
    // menu open close state here 
    const [open,setOpen] = useState(false)
   
  return (
    <header className="flex justify-between items-center p-3 border-b border-gray-200 md:border-0">
        <span onClick={() => setOpen(!open)} className="md:hidden">
         {
            open?<X className="text-red-400"></X> :<Menu></Menu> 
         }
        </span>
        <h1 className="text-2xl text-[#f1990c] font-bold">Orio</h1>
        {/* desktop  */}
      <nav className="flex gap-5 justify-center hidden md:flex">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      {/* Mobile  */}
      {
        open?
        <nav className={`flex flex-col absolute top-20 md:hidden`}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav> : ''
      }
      <button className="my-custom-btn">help</button>
    </header>
  );
};

export default Header;
