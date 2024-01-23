import React from 'react'

import AddToCart from './addToCart'
import { Metadata } from 'next'

interface Props {
    params: {
        productId: string
    }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const metaTitle: string = await new Promise(resolve => {
        setTimeout(() => {
            resolve("Product " + params.productId)
        }, 100)
    })
    return {
        title: metaTitle,
        description: 'Description of Product ' + params.productId,
    }
}


const Details = ({ params }: Props) => {
    return (
        <>
            <div>Details about product {params.productId}</div>
            <AddToCart/>
        </>
    )
}

export default Details