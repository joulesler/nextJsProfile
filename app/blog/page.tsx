import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: "Blog"
}


const Blog = () => {
  return (
    <>
      <div>Blog</div>
      <Link href={"/blog/details"}>Details</Link>
    </>

  )
}

export default Blog