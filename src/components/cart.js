import React, { useContext, useState, useEffect, useRef } from 'react'
import { Context } from 'store'
import { loadStripe } from '@stripe/stripe-js'
import {
  formatPrice,
  cartTotalPrice,
  cartItemsCount,
} from '../helpers/numberHelpers'

const Cart = () => {
  const [showMenu, setShowMenu] = useState(false)
  const cartMenu = useRef()
  const { store, dispatch } = useContext(Context)
  const { items } = store

  useEffect(() => {
    document.addEventListener('mousedown', handleClick, false)
    if (showMenu) {
      document.getElementById('menu-btn').checked = false
      document.querySelector('main').classList.add('cart-overlay')
      document.querySelector('header').classList.add('cart-open')
      document.querySelector('html').classList.add('overflow-hidden')
    } else {
      document.querySelector('main').classList.remove('cart-overlay')
      document.querySelector('header').classList.remove('cart-open')
      document.querySelector('html').classList.remove('overflow-hidden')
    }
    return () => {
      document.removeEventListener('mousedown', handleClick, false)
    }
  }, [showMenu])

  const handleClick = e => {
    if (cartMenu.current && !cartMenu.current.contains(e.target)) {
      setShowMenu(false)
    }
  }

  return (
    <div className="cart relative" ref={cartMenu}>
      <button
        className="cart-icon-wrapper padding-none z-index-4"
        onClick={() => setShowMenu(!showMenu)}
      >
        <svg
          width={48}
          height={64}
          xmlns="http://www.w3.org/2000/svg"
          className={`cart-icon ${showMenu ? 'cart-icon-transform' : ''}`}
        >
          <g fill="none" fillRule="evenodd">
            <path
              d="M4.416 23.852c-2.152-9.458-2.152-15.5 0-18.125 3.228-3.938 14.168 6.561 14.168 7.56 0 1 7.091-13.846 11.626-12.081 4.536 1.765 1.86 14.62 1.86 15.517 0 .897 10.824-13.39 14.59-8.828 2.512 3.04.183 8.078-6.985 15.112l-35.26.845z"
              fill="#F5ACB9"
            />
            <path
              d="M2.296 22.792c-2.152-9.458-2.152-15.5 0-18.125 3.228-3.938 14.168 6.561 14.168 7.56 0 1 7.091-13.846 11.626-12.081 4.536 1.765 1.86 14.62 1.86 15.517 0 .897 10.824-13.39 14.59-8.828 2.512 3.04.183 8.078-6.985 15.112l-35.26.845z"
              fill="#ECC7CD"
            />
            <path
              d="M42.668 25.808c-.822-1.17-10.131-1.382-19.288-1.211-9.35.175-18.953.797-19.904 1.986-1.89 2.367-.398 12.694 1.078 21.524.443 2.65.757 4.884 1.02 6.761.608 4.333.87 6.717 1.997 7.827 1.63 1.606 26.363.63 29.609-.138.484-.115.874-.547 1.226-1.133.483-.802.872-1.906 1.19-3.152.988-3.857 1.282-9.048 1.282-11.234 0-1.234.39-3.855.844-6.875.847-5.638 2.037-12.801.946-14.355z"
              stroke="#000"
              strokeWidth="1.06"
              fill="#000"
            />
            <path
              d="M40.548 22.628c-.822-1.17-10.131-1.382-19.288-1.211-9.35.175-18.953.797-19.904 1.986-1.89 2.367-.398 12.694 1.078 21.524.443 2.65.757 4.884 1.02 6.761.608 4.333.87 6.717 1.997 7.827 1.63 1.606 26.363.63 29.609-.138.484-.115.874-.547 1.226-1.133.483-.802.872-1.906 1.19-3.152.988-3.857 1.282-9.048 1.282-11.234 0-1.234.39-3.855.844-6.875.847-5.638 2.037-12.801.946-14.355z"
              stroke="#000"
              strokeWidth="1.06"
              fill="#FFF"
            />
          </g>
        </svg>
        <strong
          className={`cart-quantity m-0 p-0 font-barlow
            ${showMenu ? 'cart-quantity-transform' : ''}
            `}
        >
          {cartItemsCount(items)}
        </strong>
      </button>
      {showMenu && (
        <div
          className={`cart-menu bg-lightYellow z-index-3 margin-bottom-lg-50px font-barlow ${
            items && items.length ? 'cart-menu-items' : 'cart-menu-empty'
          }`}
        >
          <div className="cart-item-container font-medium">
            <div
              onClick={() => setShowMenu(false)}
              className="close-icon d-block margin-bottom-60px padding-top-50px"
            />
            <h2 className="text-40px margin-bottom-20px">Order Summary</h2>
            {items &&
              items.map((product, index) => (
                <div key={index} className="padding-top-40px text-26px">
                  <p className="margin-none padding-bottom-15px">
                    {product.name.toUpperCase()}
                  </p>
                  <div className="d-flex justify-content-between align-items-center cart-item-detail padding-bottom-30px text-26px">
                    <span>12X {formatPrice(product.price)}</span>
                    <div className="d-flex align-items-center">
                      <button
                        onClick={() =>
                          dispatch({
                            type: 'remove',
                            product: { id: product.sku },
                          })
                        }
                        className="primary-btn padding-none d-flex align-items-center justify-content-center bg-white adjust-quantity-btn"
                      >
                        <span>-</span>
                      </button>
                      <span className="padding-left-15px padding-right-15px">
                        {product.quantity}
                      </span>
                      <button
                        onClick={() =>
                          dispatch({
                            type: 'add',
                            product: { id: product.sku },
                          })
                        }
                        className="primary-btn padding-none d-flex align-items-center justify-content-center bg-white adjust-quantity-btn"
                      >
                        <span>+</span>
                      </button>
                      <button
                        className="d-flex align-items-center item-remove-btn"
                        onClick={() =>
                          dispatch({
                            type: 'remove',
                            product: { id: product.sku, removeFromCart: true },
                          })
                        }
                      >
                        <span>+</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            {items && items.length ? (
              <>
                <div className="d-flex justify-content-between padding-top-50px text-26px">
                  <p className="margin-none">SUBTOTAL</p>
                  <p className="margin-none">{cartTotalPrice(items)}</p>
                </div>
                <button
                  onClick={e => redirectToCheckout(e, items)}
                  className="primary-btn checkout-btn text-24px font-space-mono bg-white margin-top-50px"
                >
                  Check out
                </button>
              </>
            ) : (
              <p className="text-26px padding-right-50px">
                You have nothing
                <span className="d-md-block">in your bouquet yet.</span> Keep
                picking.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart

const stripePromise = loadStripe('pk_test_WemDrwL9FdctlL3poeIB3Ilm00b57CDtd8')

const redirectToCheckout = async (event, cart) => {
  event.preventDefault()
  const env = process.env.NODE_ENV
  const stripe = await stripePromise
  const items =
    cart &&
    cart.map(item => {
      return { sku: item.sku, quantity: item.quantity }
    })

  try {
    await stripe.redirectToCheckout({
      // billingAddressCollection: 'required',
      // shippingAddressCollection: {
      //   allowedCountries: ['US'],
      // },
      items,
      successUrl: `${
        env === 'development'
          ? 'http://localhost:8000'
          : 'https://gallant-khorana-e2000b.netlify.app'
      }/checkout-success?session_id={CHECKOUT_SESSION_ID}`,

      cancelUrl: `${
        env === 'development'
          ? 'http://localhost:8000'
          : 'https://gallant-khorana-e2000b.netlify.app'
      }`,
    })
  } catch (error) {
    console.error('Error:', error)
  }
}
