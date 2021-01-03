import React from 'react'
import { Wrapper, Title, Array } from './ShoppingList.styles'
import Checkbox from '../../shared/Checkbox'
// import { useSelector } from 'react-redux'

function ShoppingList ({ title, products, onToggle }) {

  // const productsFromRedux = useSelector(state => state.products)

  // useEffect(() => console.table(productsFromRedux), [productsFromRedux])

  return <Wrapper>
    <Title>
      { title }:
    </Title>
    <Array>
      {
        products.map(product =>
          <Checkbox
            key={product.id}
            value={product.checked}
            title={product.name}
            onClick={() => onToggle(product.id, product.checked, product.name)}
          />
        )
      }
    </Array>
  </Wrapper>
}

export default ShoppingList
