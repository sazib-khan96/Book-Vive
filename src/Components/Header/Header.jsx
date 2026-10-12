import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About Me", path: "/about" },
  { id: 3, title: "Projects", path: "/projects" },
  { id: 4, title: "Skills", path: "/skills" },
  { id: 5, title: "Contact", path: "/contact" },
];

const Header = () => {
    const [open,setOpen] = useState(false)

    const menuItems = navLinks.map((link) => (
          <li>
            <a href={link.path}>{link.title}</a>
          </li>
        ))
  return (
    // Navlinks
    <nav className="flex justify-between gap-5 p-3 border-b-1 border-amber-100">
        <span onClick={() => setOpen(!open)} className="md:hidden">
           {
            open? <X className="text-red-400"></X> : <Menu></Menu>
           }
        </span>

        {/* menu items for mobile  */}
        <div className={`absolute top-[45px] ${open? 'left-0 opacity-100' : '-left-full opacity-0'} transition-all ease-in-out duration-300 px-5 md:hidden`}>
            <ul className="flex flex-col gap-3 py-4">
            {
               open?  menuItems : ''
            }
        </ul>
        </div>
        <h1 className="hidden md:flex">Logo</h1>
         
        {/* menu Items  for desktop */}
      <ul className="hidden md:flex gap-3">
        {
            menuItems
        }
      </ul>

      {/* button  */}
      <button>Help</button>
    </nav>
  );
};

export default Header;
