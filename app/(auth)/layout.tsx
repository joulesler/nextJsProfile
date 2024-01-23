'use client'
import React from 'react'
import Link from 'next/link'
import Buttons from '../components/linkButton'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot Password", href: "/forgot-password" }
]

const AuthLayout = () => {
    const [input, setInput] = useState("")
    const pathname = usePathname()
    return (
        <>
            <div className='form-control w-full max-w-xs'>
                <input value= {input} onChange={(e) => setInput(e.target.value)}></input>
            </div>
            <div>{navLinks.map((link) => {
                return (
                    <span>
                        <Buttons displayText={link.name} link={link.href} isActive={pathname == link.href} />
                    </span>
                )
            })}</div>
        </>
    )
}

export default AuthLayout