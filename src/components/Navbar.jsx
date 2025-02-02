import React from 'react'
import toast from 'react-hot-toast';
import {Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex gap-4">
        <Link to={'/'} className="text-white hover:text-gray-300" onClick={toast("inside Home")}>Home</Link>
        <Link to={'/about'} className="text-white hover:text-gray-300" onClick={toast("inside About")}>About</Link>
      </div>
    </nav>
  )
}

export default Navbar;