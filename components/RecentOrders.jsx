import React from 'react'
import { data } from '../data/data.js'
import { FaShoppingBag } from 'react-icons/fa'

const RecentOrders = () => {
  return (
    <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
      <strong>Recent Order</strong>
      <ul>
        {data.map((order, index) => (
          <li key={index} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'>
            <div className='bg-purple-100 rounded-lg p-3'>
              <FaShoppingBag className='text-purple-800' />
            </div>
            <div className='flex flex-col pl-4'>
              <strong className='text-gray-800'>${order.total}</strong>
              <span className='text-gray-400 text-sm'>{order.name.first}</span>
            </div>
            <p className='lg:flex md:hidden absolute right-6 text-sm text-gray-600'>{order.date}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RecentOrders