import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-amber-200 text-black flex justify-between items-center px-4 h-16'>
      <div className="logo font-bold text-lg">BrewUp☕️</div>
      <ul className='flex justify-between gap-4'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>SignUp</li>
        <li>Login</li>
      </ul>
    </nav>
  )
}

export default Navbar
