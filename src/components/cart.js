import React, { useState, useEffect, useRef } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { formatPrice, cartItemsCount } from '../helpers/numberHelpers'
import {
  useCartItems,
  useCartTotals,
  useAddItemToCart,
  useRemoveItemFromCart,
  useCheckout,
} from 'store'

const Cart = () => {
  const [showMenu, setShowMenu] = useState(false)
  const cartMenu = useRef()
  const items = useCartItems()
  const checkout = useCheckout()
  const addItemToCart = useAddItemToCart()
  const removeFromCart = useRemoveItemFromCart()
  const { total } = useCartTotals()

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
          {items && items.length ? cartItemsCount(items) : 0}
        </strong>
      </button>
      {showMenu && (
        <div
          className={`cart-menu bg-lightYellow z-index-3 margin-bottom-lg-50px font-barlow ${
            items && items.length ? 'cart-menu-items' : 'cart-menu-empty'
          }`}
        >
          <div className="cart-item-container">
            <div
              role="button"
              tabIndex={0}
              onClick={() => setShowMenu(false)}
              onKeyDown={() => setShowMenu(false)}
              className="close-icon d-block margin-bottom-40px padding-top-60px"
            />
            <h2 className="text-28px line-height-1 margin-bottom-20px font-barlow">
              {items && items.length ? 'Your order' : '¯\\_(ツ)_/¯'}
            </h2>
            {items &&
              items.map((product, index) => (
                <div key={index} className="padding-top-40px text-20px">
                  <strong className="margin-none d-block padding-bottom-15px font-space-mono">
                    {product.title}
                  </strong>
                  <div className="d-flex justify-content-between align-items-center cart-item-detail padding-bottom-30px">
                    <span className="text-18px">12X for {formatPrice(30)}</span>
                    <div className="d-flex align-items-center">
                      <button
                        onClick={() =>
                          product.quantity <= 1
                            ? removeFromCart(product.id)
                            : addItemToCart(product.variant.id, -1)
                        }
                        className="primary-btn padding-none d-flex align-items-center justify-content-center bg-white adjust-quantity-btn"
                      >
                        <span>-</span>
                      </button>
                      <span className="product-quantity font-medium">
                        {product.quantity}
                      </span>
                      <button
                        onClick={() => addItemToCart(product.variant.id, 1)}
                        className="primary-btn padding-none d-flex align-items-center justify-content-center bg-white adjust-quantity-btn"
                      >
                        <span>+</span>
                      </button>
                      <button
                        className="d-flex align-items-center item-remove-btn"
                        onClick={() => removeFromCart(product.id)}
                      >
                        <span>+</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            {items && items.length ? (
              <>
                <div className="d-flex justify-content-between padding-top-45px text-20px">
                  <p className="margin-none">Subtotal</p>
                  <p className="margin-none font-medium">{total}</p>
                </div>
                <button
                  onClick={checkout}
                  // onClick={e => redirectToCheckout(e, items)}
                  className="primary-btn checkout-btn text-24px font-space-mono bg-white margin-top-45px margin-bottom-10px"
                >
                  Check out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={checkout}
                  // onClick={e => redirectToCheckout(e, items)}
                  className="primary-btn checkout-btn text-24px font-space-mono bg-white margin-top-45px margin-bottom-10px"
                >
                  Check out
                </button>
                <p className="text-18px line-height-28 padding-top-25px font-space-mono">
                  You have nothing in your{' '}
                  <span className="d-md-block">bouquet yet. Keep picking!</span>
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
const stripePromise = loadStripe(process.env.GATSBY_CHECKOUT_KEY)

const redirectToCheckout = async (event, cart) => {
  event.preventDefault()
  const stripe = await stripePromise
  const items =
    cart &&
    cart.map(item => {
      return { sku: item.sku, quantity: item.quantity }
    })

  try {
    await stripe.redirectToCheckout({
      billingAddressCollection: 'required',
      shippingAddressCollection: {
        allowedCountries: ['US'],
      },
      items,
      successUrl: `${process.env.GATSBY_URL}/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: process.env.GATSBY_URL,
    })
  } catch (error) {
    console.error('Error:', error)
  }
}
