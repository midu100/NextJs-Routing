import SideNav from '@/app/components/SideNav'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className='flex'>
    
      <SideNav />
      {children}
    </div>
  )
}

export default layout