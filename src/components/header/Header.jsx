import React from 'react'

import "./Header.css"

function Header() {
  return (
    <div className='header'>
      <div className="headerContainer">
        <div className="headerLogoArea">
          <h1 className="headerLogoItem">
            Mercury
          </h1>
        </div>
        <div className="headerNavArea">
          <ul className="headerNav">
            <li className="headerNavItem"><a href="">HOME</a></li>
            <li className="headerNavItem"><a href="">NEWS</a></li>
            <li className="headerNavItem"><a href="">ABOUT</a></li>
            <li className="headerNavItem"><a href="">SERVICE</a></li>
            <li className="headerNavItem"><a href="">MEMBER</a></li>
            <li className="headerNavItem"><a href="">COMPANY</a></li>
            <li className="headerNavItem headerContactButton"><a href="">CONTACT</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header;
