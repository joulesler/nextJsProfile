import React from 'react'
import Link from 'next/link'
import Buttons from '@/app/components/linkButton'

const ArchivedNotifications = () => {
  return (
    <>
      <div>Archived</div>
      <Buttons displayText='Active' link='/complex-dashboard' />
    </>
  )
}

export default ArchivedNotifications