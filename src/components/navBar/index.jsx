import React from 'react'
import { FaReact,FaBars } from 'react-icons/fa';
import {HiX} from 'react-icons/hi';
import {Link} from 'react-router-dom';
import { useState } from 'react';
const data = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Portfolio",
    to: "/portfolio",
  },
  {
    label: "Skills",
    to: "/skills",
  },
  {
    label: "Resume",
    to: "/resume",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];
const NavBar = () => {
  const [toogleIcon, settoogleIcon] = useState();
  const handleToggleIcon= () =>{
settoogleIcon(!toogleIcon);
  }
  return (
    <div>
      <nav className="navbar"> 
<div className="navbar_container flex items-center w-[100%] px-[20px] py-[0px]">
<Link to={'/'} className="navbar_container_logo cursor-poniter text-yellow-700">
<FaReact size={30}/>
</Link>
</div>
<ul className="navbar_container_menu flex list-none text-center">
  {
    data.map((item, key) => {
      return (
        <li key={key} className="navbar_container_menu mr-[1.5rem] leading-[40px] text-[1.6rem] ">
          <Link to={item.to} className="navbar_container_menu_links">
            {item.label}
          </Link>
        </li>
      );
    })
  }
</ul>

<div className="nav_icons">
{
  toogleIcon ? <Hix size={30}/> :<FaBars size={30}/>
}
</div>
      </nav>
    </div>
  )
}

export default NavBar
