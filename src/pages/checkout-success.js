import React, { useState, useEffect, useContext } from 'react'
import Hero from 'components/hero'
import SEO from 'components/seo'
import { useQueryParam } from 'gatsby-query-params'
import { Context } from 'store'
import Header from 'components/layout/header'
import SuccessImg from '../images/success-fruit.svg'
import 'styles/aura-bora.scss'

const CheckoutSuccess = () => {
  const { dispatch } = useContext(Context)
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
          await CreateStripeOrder(CreateOrder(session, payment))
        }
      } catch (error) {
        error.message = `Some unexplainable happened when trying to confirm your purchase. Try again and we’ll make it right.`
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
      <main className="cart-overlay">
        <Hero>
          <div className="text-center padding-left-lg-60px padding-right-lg-60px c-black">
            {!isLoading ? (
              <div>
                {error ? (
                  <>
                    <h2 className="text-36px font-barlow">Whoops!</h2>
                    <p className="text-24px padding-left-lg-10px padding-right-lg-10px">
                      {error.message}
                    </p>
                  </>
                ) : checkoutSuccess ? (
                  <>
                    <h2 className="text-36px font-barlow">Success!</h2>
                    <p className="text-24px padding-left-lg-10px padding-right-lg-10px">
                      You’ll get a confirmation in your
                      <span className="d-block">
                        email very soon. Enjoy your Aura Bora,
                        <span className="d-md-block">
                          and enjoy this haiku.
                        </span>
                      </span>
                    </p>
                    <div className="haiku d-flex justify-content-center font-barlow">
                      <p className="text-22px padding-top-40px text-right">
                        What is this round fruit?
                        <span className="d-block">
                          It has a hard outer shell.
                        </span>
                        <span className="d-block">I’m told I do too.</span>
                      </p>
                      <img
                        src={SuccessImg}
                        alt=""
                        className="padding-left-20px"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <h2 className="text-36px font-barlow">Whoops!</h2>
                    <p className="text-24px padding-left-lg-10px padding-right-lg-10px">
                      Some unexplainable happened when trying to confirm your
                      purchase. Try again and we will make it right.
                    </p>
                  </>
                )}
              </div>
            ) : null}
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

async function CreateStripeOrder(order) {
  const response = await fetch('/.netlify/functions/create-order', {
    headers: {
      Accept: 'application/json',
      order: JSON.stringify(order),
    },
  })
  if (!response.ok) {
    const error = response
    throw error
  }
  return response.json()
}

const CreateOrder = (session, payment) => {
  const items =
    session &&
    session.display_items.map(item => ({
      type: item.type,
      parent: item.sku.id,
    }))

  const order = {
    currency: 'usd',
    email: payment.receipt_email,
    items,
    shipping: {
      name: payment.shipping.name,
      address: {
        line1: payment.shipping.address.line1,
        city: payment.shipping.address.city,
        state: payment.shipping.address.state,
        country: payment.shipping.address.country,
        postal_code: payment.shipping.address.postal_code,
      },
    },
  }
  return order
}
