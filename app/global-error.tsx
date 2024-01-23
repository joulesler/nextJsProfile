'use client'

import React from 'react'

const GlobalError = ({
    error,
    reset
}: {
    error: Error
    reset: () => void
}) => {
    return (
        <html>
            <body>
                <div>Oops! We've run into an error and the team is looking into it!</div>
                <button className="btn btn-primary" onClick={reset}>Refresh</button>
            </body>
        </html>
    )
}

export default GlobalError