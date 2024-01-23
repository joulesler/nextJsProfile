import React from 'react'
import Link from 'next/link'
import Buttons from '@/app/components/linkButton'

const Notifications = () => {
  return (
    <>
      <div>Notifications</div>
      <Buttons displayText='Archived' link='/complex-dashboard/archived' />
    </>
  )
}

export default Notifications