import React from 'react'
import  './Navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className="NavbarLeft">
            <h1>Flex Business Pro</h1>
            <p>Clean and Modern Business Theme</p>
        </div>
        <div className="NavbarRight">
            <p style={{color:"blueviolet"}}>Home</p>
            <p>About Us</p>
            <p>Styleguide</p>
            <p>Blog</p>
            <p>Contact Us</p>
        </div>
    </div>
  )
}

export default Navbar