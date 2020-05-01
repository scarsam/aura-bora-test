import React, { useState, useEffect, useContext } from 'react'
import Hero from 'components/hero'
import SEO from 'components/seo'
import { useQueryParam } from 'gatsby-query-params'
import { Context } from 'store'
import Header from 'components/layout/header'
import 'styles/aura-bora.scss'

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
        error.message = `Something went wrong when confirming your purchase. Please check
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
    <>
      <SEO title="Checkout" />
      <Header />
      <Hero>
        <main className="cart-overlay">
          <div className="text-center padding-left-lg-60px padding-right-lg-60px">
            {!isLoading ? (
              <div>
                {error ? (
                  <>
                    <h2 className="text-34px">Whoops!</h2>
                    <p className="text-26px padding-left-lg-10px padding-right-lg-10px">
                      {error.message}
                    </p>
                  </>
                ) : checkoutSuccess ? (
                  <>
                    <h2 className="text-34px">Success!</h2>
                    <p className="text-26px padding-left-lg-10px padding-right-lg-10px">
                      You’ll get a confirmation in your email very soon. Enjoy
                      your Aura Bora, and enjoy this haiku.
                    </p>
                    <p className="text-34px padding-top-60px haiku">
                      <strong>
                        What is this round fruit? It has a hard outer shell. I’m
                        told I do too.
                      </strong>
                    </p>
                  </>
                ) : (
                  <>
                    <h2 className="text-34px">Whoops!</h2>
                    <p className="text-26px padding-left-lg-10px padding-right-lg-10px">
                      Some unexplainable happened when trying to confirm your
                      purchase. Try again and we will make it right.
                    </p>
                  </>
                )}
              </div>
            ) : null}
          </div>
        </main>
      </Hero>
    </>
  )
}

export default CheckoutSuccess

async function RetrieveSession(sessionId) {
  const response = await fetch('/.netlify/functions/retrieve-session', {
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
  const response = await fetch('/.netlify/functions/retrieve-payment', {
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
