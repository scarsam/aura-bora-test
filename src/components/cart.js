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
    } else {
      document.querySelector('main').classList.remove('cart-overlay')
      document.querySelector('header').classList.remove('cart-open')
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
        className="cart-icon-wrapper padding-right-none"
        onClick={() => setShowMenu(!showMenu)}
      >
        <svg width={48} height={64} xmlns="http://www.w3.org/2000/svg">
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
        <strong className="cart-icon-quantity m-0 p-0 font-barlow">
          {cartItemsCount(items)}
        </strong>
      </button>
      {showMenu && (
        <div
          className={`cart-menu absolute bg-lightYellow z-index-3 margin-bottom-50px ${
            items && items.length ? 'cart-menu-items' : 'cart-menu-empty'
          }`}
        >
          <div className="padding-top-60px padding-bottom-60px padding-left-30px padding-right-30px">
            <div
              onClick={() => setShowMenu(false)}
              className="close-icon d-block text-right margin-bottom-30px"
            />
            <h2>Order Summary</h2>
            {items &&
              items.map((product, index) => (
                <div key={index} className="padding-top-20px text-26px">
                  <p>{product.name}</p>
                  <div className="d-flex justify-content-between align-items-center cart-item-detail padding-bottom-20px text-26px">
                    <span>12x {formatPrice(product.price)}</span>
                    <div className="d-flex align-items-center">
                      <button
                        onClick={() =>
                          dispatch({
                            type: 'remove',
                            product: { id: product.sku },
                          })
                        }
                        className="primary-btn padding-none d-flex align-items-center justify-content-center"
                      >
                        <span>-</span>
                      </button>
                      <span className="padding-left-10px padding-right-10px">
                        {product.quantity}
                      </span>
                      <button
                        onClick={() =>
                          dispatch({
                            type: 'add',
                            product: { id: product.sku },
                          })
                        }
                        className="primary-btn padding-none d-flex align-items-center justify-content-center"
                      >
                        <span>+</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            {items && items.length ? (
              <>
                {' '}
                <div className="d-flex justify-content-between padding-top-60px text-26px">
                  <p>SUBTOTAL</p>
                  <p>{cartTotalPrice(items)}</p>
                </div>
                <button
                  onClick={e => redirectToCheckout(e, items)}
                  className="primary-btn"
                >
                  Check out
                </button>
              </>
            ) : (
              <p className="text-26px padding-right-50px">
                You have nothing{' '}
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
  const stripe = await stripePromise

  const items =
    cart &&
    cart.map(item => {
      return { sku: item.sku, quantity: item.quantity }
    })

  const { error } = await stripe.redirectToCheckout({
    items,
    successUrl: `http://localhost:8000/page-2/`,
    cancelUrl: `http://localhost:8000/`,
  })
  if (error) {
    console.log('Error:', error)
  }
}
