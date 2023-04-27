import React from 'react'

const Header = ( {page} ) => {
  return (
    <header className='flex justify-between px-4 pt-4'>
      <h2>{page}</h2>
      <h2>Welcome Back, João Victor</h2>
    </header>
  )
}

export default Header