import { AnchorLink } from 'gatsby-plugin-anchor-links'
import React, { useRef, useEffect } from 'react'
import Cart from '../cart'

const Header = () => {
  const navMenu = useRef()

  useEffect(() => {
    document.addEventListener('mousedown', handleClick, false)

    return () => {
      document.removeEventListener('mousedown', handleClick, false)
    }
  }, [])

  const handleClick = e => {
    const isShopLink = e.target.classList.contains('shop-link')

    if (navMenu.current) {
      if (!navMenu.current.contains(e.target)) {
        document.getElementById('menu-btn').checked = false
      }
    }
    if (isShopLink) {
      setTimeout(() => {
        document.getElementById('menu-btn').checked = false
      }, 100)
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
                />
              </li>
              <li className="margin-top-20px margin-bottom-30px">
                <AnchorLink
                  className="primary-link text-36px"
                  to="/where-to-find"
                  title="Where to find"
                  stripHash
                />
              </li>
              <li className="margin-top-20px margin-bottom-30px">
                <AnchorLink
                  className="primary-link text-36px shop-link"
                  to="/#social"
                  title="Social"
                  stripHash
                />
              </li>
              <li className="margin-top-20px padding-bottom-60px padding-bottom-md-30px">
                <AnchorLink
                  className="primary-link text-36px shop-link"
                  to="/contact"
                  title="Contact"
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
