import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {

 const menuItems = (
   <>
     <li>
       <Link to="/" className="text-2xl">
         Home
       </Link>
     </li>

     <li>
       <Link to="/review" className="text-2xl">
         Reviews
       </Link>
     </li>
     <li>
       <Link to="/contact " className="text-2xl">
         Contact
       </Link>
     </li>
     <li>
       <Link to="/about" className="text-2xl">
         About
       </Link>
     </li>
   </>
 );
 return (
   <div className="navbar  bg-[#DE9A3C] p-5">
     <div className="navbar-start">
       <div className="dropdown">
         <label tabIndex="0" className="btn btn-ghost lg:hidden">
           <svg
             xmlns="http://www.w3.org/2000/svg"
             className="h-5 w-5"
             fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor"
           >
             <path
               strokeLinecap="round"
               strokeWidth="2"
               d="M4 6h16M4 12h8m-8 6h16"
             />
           </svg>
         </label>
         <ul
           tabIndex="0"
           className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
         >
           {menuItems}
         </ul>
       </div>
       <Link to="/home" className="btn btn-ghost normal-case text-2xl text-[purple] font-extrabold font-serif">
         Cofee Station
       </Link>
     </div>
     <div className="navbar-center hidden lg:flex">
       <ul className="menu menu-horizontal p-0">{menuItems}</ul>
     </div>
   </div>
 );
};

export default Navigation;
