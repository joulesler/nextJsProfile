'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import toCamelCase from '../_lib/format-string'

const Pathname = () => {
    const pathname = usePathname()
    var pn = String(pathname)
    if (pn == "/") {
        return (
            <div>| Profile </div>
        )
    }
    console.log(pn)
    const pageTitle = toCamelCase(pn)
    console.log(pn)
  return (
    <div>{pageTitle} </div>
  )
}

export default Pathname