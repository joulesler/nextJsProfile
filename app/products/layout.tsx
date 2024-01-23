import React from 'react'

const layout = ({ children, details }: {
    children: React.ReactElement,
    details: React.ReactElement
}) => {
    return (
        <>
            <div>{children}</div>
            <div>{details}</div>
        </>
    )
}

export default layout