'use client'

import React from 'react'

const ErrorBoundary = ({
    error,
    reset
}: {
    error: Error
    reset: () => void
}) => {
    return (
        <>
            <div>Oops! We've run into an error and the team is looking into it!</div>
            <button className="btn btn-primary" onClick={reset}>Refresh</button>
        </>
    )
}

export default ErrorBoundary