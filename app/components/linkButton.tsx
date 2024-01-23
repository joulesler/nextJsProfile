'use client'
import React from 'react'
import Link from 'next/link'

interface ButtonData {
    displayText: string
    link: string
    isActive?: boolean
}

const Buttons = (button: ButtonData) => {
    return (
        <>
            <Link href={button.link} className='btn btn-primary' onClick={() => console.log(button.displayText)}>
                <span className={button.isActive ? "font-bold" : "font-normal"}>
                    {button.displayText}
                </span>
            </Link>
        </>)
}

export default Buttons