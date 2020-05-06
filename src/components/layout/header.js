import { AnchorLink } from 'gatsby-plugin-anchor-links'
import React, { useRef, useEffect } from 'react'
import Cart from '../cart'

const Header = () => {
  const navMenu = useRef()

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick, false)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick, false)
    }
  }, [])

  const handleOutsideClick = e => {
    if (navMenu.current && !navMenu.current.contains(e.target)) {
      document.getElementById('menu-btn').checked = false
    }
  }

  const handleLinkClick = () => {
    document.getElementById('menu-btn').checked = false
  }

  const handleKeyDown = e => {
    if (e.keyCode === 37) {
      document.getElementById('menu-btn').checked = false
    }
  }

  return (
    <>
      <input className="menu-btn d-none" type="checkbox" id="menu-btn" />
      <header ref={navMenu}>
        <div className="container padding-top-none padding-bottom-none">
          <nav className="padding-top-50px">
            <label
              className="navicon d-block"
              htmlFor="menu-btn"
              ref={navMenu}
            />
            <ul className="menu margin-none padding-none padding-left-15px">
              <li className="margin-top-30px margin-bottom-30px">
                <AnchorLink
                  className="primary-link text-36px shop-link"
                  to="/#shop"
                  title="Shop"
                  stripHash
                  onClick={handleLinkClick}
                  onKeyDown={handleKeyDown}
                />
              </li>
              <li className="margin-top-20px margin-bottom-30px">
                <AnchorLink
                  className="primary-link text-36px"
                  to="/where-to-find#menu-btn"
                  title="Where to find"
                  stripHash
                  onClick={handleLinkClick}
                  onKeyDown={handleKeyDown}
                />
              </li>
              <li className="margin-top-20px margin-bottom-30px">
                <AnchorLink
                  className="primary-link text-36px shop-link"
                  to="/#mood"
                  title="Mood"
                  stripHash
                  onClick={handleLinkClick}
                  onKeyDown={handleKeyDown}
                />
              </li>
              <li className="margin-top-20px padding-bottom-60px padding-bottom-md-none">
                <AnchorLink
                  className="primary-link text-36px shop-link"
                  to="/contact"
                  title="Let’s be rosebuds"
                  onClick={handleLinkClick}
                  onKeyDown={handleKeyDown}
                />
              </li>
            </ul>
          </nav>
          <Cart />
        </div>
      </header>
    </>
  )
}

export default Header
