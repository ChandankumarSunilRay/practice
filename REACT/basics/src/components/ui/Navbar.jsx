import React from 'react'
import { NavLink, Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-6 py-4 text-3xl '>
      <Link to="/">Bus LA</Link>


      <nav className='flex items-center gap-6'>

        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "text-blue-500 font-bold underline" : "text-black"}`
          }

        >Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${isActive ? "text-blue-500 font-bold underline" : "text-black"}`
          }

        >About</NavLink>

        <NavLink
          to="/services"
          className={({ isActive }) =>
            `${isActive ? "text-blue-500 font-bold underline" : "text-black"}`
          }


        >Services</NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${isActive ? "text-blue-500 font-bold underline" : "text-black"}`
          }

        >Contact Us</NavLink>

      </nav>
    </div>
  )
}

export default Navbar
