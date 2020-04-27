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
          dispatch({
            type: 'reset',
          })
          setCheckoutSuccess(true)
          setCartItems(session.display_items)
        }
      } catch (error) {
        error.message = `Something went wrong when retrieving your order summary. Please check
        your mail inbox for a order confirmation. If you have not received an email confirming your purchase,
        please contact our customer support`

        setError(error)
      } finally {
        setisLoading(false)
      }
    }
    sessionId && RetrieveCheckoutDetails(sessionId)
  }, [sessionId, dispatch])

  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      {!isLoading ? (
        <div className="container absolute checkout-success d-flex justify-content-center">
          <div className="bg-lightYellow padding-right-60px padding-left-60px padding-bottom-60px padding-top-60px">
            {error ? (
              <>
                <h2 className="text-center">Ooooops!</h2>
                <p>{error.message}</p>
              </>
            ) : checkoutSuccess ? (
              <>
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
                </p>{' '}
              </>
            ) : (
              <>
                <h2 className="text-center">Ooooops!</h2>
                <p>
                  Something went wrong when confirming your purchase. Please try
                  again
                </p>
              </>
            )}
          </div>
        </div>
      ) : null}
    </Layout>
  )
}

export default CheckoutSuccess

async function RetrieveSession(sessionId) {
  const response = await fetch('/.netlify/functions/retrieve-session-new', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
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
  const response = await fetch('/.netlify/functions/retrieve-payment-new', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      paymentIntentId,
    },
  })
  if (!response.ok) {
    const error = response
    throw error
  }
  return response.json()
}
