export function selectAllProducts(state) {
  return state.products
}

export function selectSelectedProducts(state) {
  return state.products.filter(product => product.checked)
}

export function selectSelectedProductTotalPrice(state) {
  return state.products
      .filter(product => product.checked)
      .reduce((a, b) => a + b.price, 0)
}
