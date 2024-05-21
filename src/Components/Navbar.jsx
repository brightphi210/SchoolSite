import React from 'react'
import logo from '../Images/logo.png'

const Navbar = () => {
  return (
    <div>
        <div>
            <img src={logo} alt="" width={100}/>
        </div>


        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Gallery</li>
        </ul>
    </div>
  )
}

export default Navbar