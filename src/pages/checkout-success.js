import React, { useState, useEffect } from 'react'
import Hero from 'components/SuccessHero'
import SEO from 'components/seo'
import { useQueryParam } from 'gatsby-query-params'
import Header from 'components/layout/header'

import {
  SuccessMsg,
  CouldNotConfirmErrorMsg,
  CheckOutFailMsg,
} from '../helpers/ErrorMessages'
import 'styles/aura-bora.scss'

const CheckoutSuccess = () => {
  const [error, setError] = useState(null)
  const [checkoutSuccess, setCheckoutSuccess] = useState(false)
  const [isLoading, setisLoading] = useState(true)

  let sessionId = useQueryParam('session_id', null)

  useEffect(() => {
    const RetrieveCheckoutDetails = async id => {
      try {
        const session = await RetrieveSession(id)
        const payment = await RetrievePayment(session.payment_intent)

        if (payment.status === 'succeeded') {
          sessionStorage.clear()

          setCheckoutSuccess(true)
          setisLoading(false)
        }
      } catch (error) {
        setError(error)
        setisLoading(false)
      }
    }
    sessionId && RetrieveCheckoutDetails(sessionId)
  }, [sessionId])

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

async function RetrieveSession(sessionId) {
  const response = await fetch('/.netlify/functions/retrieve-session', {
    headers: {
      Accept: 'application/json',
      sessionId,
    },
  })

  if (!response.ok) {
    const error = response
    throw error
  }
  return response.json()
}

async function RetrievePayment(paymentIntentId) {
  const response = await fetch('/.netlify/functions/retrieve-payment', {
    headers: {
      Accept: 'application/json',
      paymentIntentId,
    },
  })
  if (!response.ok) {
    const error = response
    throw error
  }
  return response.json()
}
