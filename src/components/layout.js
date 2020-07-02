import React from 'react'
import PropTypes from 'prop-types'

import Header from 'components/layout/header'
import Footer from 'components/layout/footer'
import 'styles/aura-bora.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="cart-overlay">{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
