import { Link } from 'gatsby'
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
            <ul className="menu margin-none padding-none padding-bottom-md-50px padding-left-5px">
              <li className="margin-none margin-top-30px margin-bottom-20px">
                <Link className="primary-link text-40px shop-link" to="/#shop">
                  Shop
                </Link>
              </li>
              <li className="margin-none margin-top-30px margin-bottom-20px">
                <Link
                  className="primary-link text-40px shop-link"
                  to="/#social"
                >
                  Social
                </Link>
              </li>
              <li className="margin-top-20px margin-bottom-20px padding-bottom-md-50px">
                <Link className="primary-link text-40px" to="/resellers">
                  Resellers
                </Link>
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
