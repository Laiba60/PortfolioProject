import React from 'react'
import {FaReact} from react-icons/fa;
import {Link} from react-router-dom;
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
  return (
    <div>
      <nav className=""> 
<div className="">
<Link to={'/'} className="">
<FaReact size={30}/>
</Link>
</div>
<ul className="">
  {
    data.map((item,key)=>()
  (
    <li key={key} className="">
      <Link to={item.to}>
      {item.lable}
      </Link>
    </li>
  ))
  }

</ul>
<div className="">

</div>
      </nav>
    </div>
  )
}

export default NavBar
