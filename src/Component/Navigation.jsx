import React from 'react'

function Navigation() {
  return (
    <div>
      <nav className='container'>
            <div className='logo'>
                <img src=".\Images\brand_logo.png" alt="brand_logo" />
            </div>
            <ul >
                <li href="#">Menu</li>
                <li href="#">Location</li>
                <li href="#">About</li>
                <li href="#">Contact</li>
            </ul>
            <button>Login</button>
        </nav>
    </div>
  )
}

export default Navigation
