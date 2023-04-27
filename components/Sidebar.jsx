import Link from 'next/link'
import React from 'react'
import { RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx'
import { FiSettings } from 'react-icons/fi'
import { HiOutlineShoppingBag } from 'react-icons/hi'

const Sidebar = ( {children} ) => {
  return (
    <div className='flex'>
      <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col items-center'>
          <Link href='/'>
            <div className='bg-purple-800 text-white rounded-lg p-3 inline-block'>
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <span className='border-b-[1px] border-b-gray-200 w-full p-3'/>
          <Link href='/'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 rounded-lg p-3 inline-block'>
              <RxDashboard size={20} />
            </div>
          </Link>
          <Link href='/customers'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 rounded-lg p-3 inline-block'>
              <RxPerson size={20} />
            </div>
          </Link>
          <Link href='/orders'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 rounded-lg p-3 inline-block'>
              <HiOutlineShoppingBag size={20} />
            </div>
          </Link>
        </div>
        <a href="https://github.com/joaovictornovais" target="__blank">
          <img className='cursor-pointer rounded-lg hover:scale-110 transition-all ease-in-out' src='https://github.com/joaovictornovais.png' alt='Visit my github: @joaovictornovais' />
        </a>
      </div>
      <main className='ml-20 w-full'>
        {children}
      </main>
    </div>
  )
}

export default Sidebar