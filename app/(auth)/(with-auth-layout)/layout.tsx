import React from 'react'

const ProductLayout = ({ children }:
    {
        children:
        React.ReactNode
    }) => {
    return (
        <div>Welcome Unregistered User
            <div>
                {children}
            </div>
        </div>
    )
}

export default ProductLayout