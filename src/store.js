import React from 'react'

export const initialState = GetCartItems()

export const reducer = (state, action) => {
  switch (action.type) {
    case 'reset':
      return { items: [] }
    case 'add':
      return AddCartItem(state, action.product)
    case 'remove':
      return RemoveCartItem(state, action.product)
    default:
      return state
  }
}

export const Context = React.createContext()

export function GetCartItems() {
  const windowGlobal = typeof window !== 'undefined' && window
  const stored = windowGlobal && sessionStorage.getItem('cart')
  return stored !== null ? JSON.parse(stored) : { items: [] }
}

export function AddCartItem(state, product) {
  const { id, name, price } = product
  const storedCart = sessionStorage.getItem('cart')

  let cart = storedCart !== null ? JSON.parse(storedCart) : {}

  if (cart.items) {
    const cartHasItem = cart.items.find(item => item.sku === id)

    if (cartHasItem) {
      cart = {
        items: cart.items.map(item =>
          item.sku === id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      }
    } else {
      const item = { sku: id, quantity: 1, price, name }
      cart = { items: [...cart.items, item] }
    }
  } else {
    const item = { sku: id, quantity: 1, price, name }
    cart = { items: [item] }
  }

  sessionStorage.setItem('cart', JSON.stringify(cart))
  return { ...state, items: cart.items }
}

export function RemoveCartItem(state, product) {
  const storedCart = sessionStorage.getItem('cart')
  let cart = JSON.parse(storedCart)

  const isRemoved = product.removeFromCart

  const item = cart.items.filter(item => item.sku === product.id)[0]

  if (item.quantity === 1 || isRemoved) {
    cart = {
      items: cart.items.filter(item => item.sku !== product.id),
    }
  } else {
    cart = {
      items: cart.items.map(item =>
        item.sku === product.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    }
  }

  sessionStorage.setItem('cart', JSON.stringify(cart))
  return { ...state, items: cart.items }
}
