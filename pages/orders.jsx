import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { data } from '../data/data.js'
import Header from '@/components/Header.jsx'

const orders = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Header page={'Orders'} />
      <div className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
          <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 my-3 p-2 '>
            <strong>Order</strong>
            <strong className='sm:text-left text-right'>Status</strong>
            <strong className='hidden md:grid'>Last Order</strong>
            <strong className='hidden sm:grid'>Method</strong>
          </div>
          <ul>
            {data.map((order, index) => (
              <li key={index} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                <div className='flex'>
                  <div className='bg-purple-100 p-3 rounded-lg'>
                    <FaShoppingBag className='text-purple-800' />
                  </div>
                  <div className='pl-4 flex flex-col'>
                    <strong className='text-gray-800'>${order.total.toLocaleString()}</strong>
                    <span className='text-gray-800 text-sm'>{order.name.first}</span>
                  </div>
                </div>
                <p className='text-gray-600 sm:text-left text-right text-sm'>
                  <span className={
                    order.status === 'Processing' ? 'bg-green-200 p-2 rounded-lg' : 
                    order.status === 'Completed' ? 'bg-blue-200 p-2 rounded-lg' :
                    'bg-yellow-200 p-2 rounded-lg'
                  }>{order.status}
                  </span>
                </p>
                <p className='hidden md:flex text-gray-700 text-sm'>{order.date}</p>
                <div className='sm:flex hidden justify-between items-center'>
                  <p>{order.method}</p>
                  <BsThreeDotsVertical />
                </div>
              </li>
            ))}
          </ul>
        </div>      
      </div>
    </div>
  )
}

export default orders