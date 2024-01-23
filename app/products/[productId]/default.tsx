import React from 'react'
import Buttons from '../../components/linkButton'


const Products = () => {
  return (
    <div>
        <h1>Products</h1>
        <Buttons displayText={'Product 1'} link={'/products/1'}/>
        <Buttons displayText={'Product 2'} link={'/products/2'}/>
        <Buttons displayText={'Product 3'} link={'/products/3'}/>
    </div>
  )
}

export default Products