import React from 'react'

const Docs = ({ params }: {
    params: {
        slug: string[]
    }
}) => {
    if (params.slug?.length == 1) {
        return (
            <div>Docs for {params.slug[0]} </div>
        )
    } else if (params.slug?.length == 2) {
        return (
            <div>Docs for {params.slug[0]} and product {params.slug[1]}</div>
        )
    }

    return (
        <div>Docs Homepage</div>
    )
}

export default Docs