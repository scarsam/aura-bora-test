import React, { useState } from 'react'
import Hero from 'components/SuccessHero'
import SEO from 'components/seo'
import Header from 'components/layout/header'

import {
  SuccessMsg,
  CouldNotConfirmErrorMsg,
  CheckOutFailMsg,
} from '../helpers/ErrorMessages'
import 'styles/aura-bora.scss'

const CheckoutSuccess = () => {
  const [error] = useState(null)
  const [checkoutSuccess] = useState(false)
  const [isLoading] = useState(false)

  const renderMessage = () => {
    if (error) return CouldNotConfirmErrorMsg
    return checkoutSuccess ? SuccessMsg : CheckOutFailMsg
  }

  return (
    <>
      <SEO title="Checkout" />
      <Header />
      <main className="cart-overlay checkout-success">
        <Hero>
          <div className="padding-left-10px padding-left-md-none offset-md-2 text-left c-black">
            {!isLoading && renderMessage()}
          </div>
        </Hero>
      </main>
    </>
  )
}

export default CheckoutSuccess
