import React from 'react'

const ProductLayout = ({ children }:
    {
        children:
        React.ReactNode
    }) => {
    return (
        <div>Product Listing
            <div>
                {children}
            </div>
        </div>
    )
}

export default ProductLayout