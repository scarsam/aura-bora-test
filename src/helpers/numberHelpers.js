export function formatPrice(price) {
  const priceFloat = (price / 100).toFixed(2)
  const formattedPrice = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'usd',
  }).format(priceFloat)

  return formattedPrice
}

export function cartTotalPrice(products) {
  const total =
    products &&
    products.reduce((prev, cur) => prev + cur.price * cur.quantity, 0)

  return formatPrice(total)
}

export function cartItemsCount(products) {
  const total =
    products && products.reduce((prev, cur) => prev + cur.quantity, 0)

  return total
}