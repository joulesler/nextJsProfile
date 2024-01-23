import AddToCart from '@/app/products/[productId]/addToCart'
import React from 'react'

const Details = ({params}: {params: {
    productId: string
}}) => {
    return (
        <>
            <div>Internal Details about product {params.productId}</div>
            <AddToCart />
        </>)
}

export default Details