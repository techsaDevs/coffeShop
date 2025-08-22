import React from 'react'

const Container = ({children} : {children: React.ReactNode}) => {
  return (
    <div className='mx-auto py-4 lg:py-[0.625rem]'>{children}</div>
  )
}

export default Container