import React from 'react'
import { notFound } from 'next/navigation'

const ProductReview = ({params} : {params: {
    productId: string,
    reviewId: string
}}) => {
    if (parseInt(params.reviewId) > 1000 ) {
        return notFound()
    }
  return (
    <div>Product {params.productId} Review {params.reviewId}</div>
  )
}

export default ProductReview