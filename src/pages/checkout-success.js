import React, { useState, useEffect, useContext } from 'react'
import Layout from 'components/layout'
import Hero from 'components/hero'
import SEO from 'components/seo'
import { useQueryParam } from 'gatsby-query-params'
import { Context } from 'store'
import { cartTotalPrice } from '../helpers/numberHelpers'

const CheckoutSuccess = () => {
  const { dispatch } = useContext(Context)
  const [cartItems, setCartItems] = useState(null)
  const [checkoutSuccess, setCheckoutSuccess] = useState(null)

  let sessionId = useQueryParam('session_id', null)

  useEffect(() => {
    sessionId && RetrieveCheckoutDetails(sessionId)
  }, [sessionId])

  const RetrieveCheckoutDetails = async id => {
    try {
      const session = await RetrieveSession(id)
      const payment = await RetrievePayment(session.payment_intent)

      if (payment.status === 'succeeded') {
        sessionStorage.clear()
        dispatch({
          type: 'reset',
        })
        setCheckoutSuccess(true)
        setCartItems(session.display_items)
      } else {
        //TODO WHAT TODO WHEN PAYMENT STATUS === FAILED?
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <div className="container absolute checkout-success d-flex justify-content-center">
        <div className="bg-lightYellow padding-right-60px padding-left-60px padding-bottom-60px padding-top-60px">
          <h2 className="text-center">THANK YOU FOR YOUR PURCHASE</h2>
          {cartItems &&
            cartItems.map((item, index) => (
              <div key={index} className="d-flex justify-content-between">
                <span>{item.sku.attributes.name}</span>
                <span>x{item.quantity}</span>
              </div>
            ))}
          <p className="padding-top-20px">
            Total: {cartItems && cartTotalPrice(cartItems)}
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default CheckoutSuccess

async function RetrieveSession(sessionId) {
  try {
    const response = await fetch('/.netlify/functions/retrieve-session-new', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        sessionId,
      },
    })
    return response.json()
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

async function RetrievePayment(paymentIntentId) {
  try {
    const response = await fetch('/.netlify/functions/retrieve-payment-new', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        paymentIntentId,
      },
    })
    return response.json()
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}
