import Header from '@/components/Header'
import React from 'react'
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs' 
import { data } from '../data/data.js'

const Customers = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Header page={'Customers'} />
      <div className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
          <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cusror-pointer'>
            <strong className=''>Name</strong>
            <strong className='sm:text-left text-right'>E-mail</strong>
            <strong className='hidden md:grid'>Last Order</strong>
            <strong className='hidden sm:grid'>Method</strong>
          </div>
          <ul>
            {data.map((order, index) => (
              <li key={index} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                <div className='flex items-center'>
                  <div className='bg-purple-100 p-3 rounded-lg'>
                    <BsPersonFill className='text-purple-800' />
                  </div>
                  <p className='pl-4'>{order.name.first} {order.name.last}</p>
                </div>
                <p className='text-gray-600 sm:text-left text-right'>{order.name.first}@gmail.com</p>
                <p className='hidden md:flex text-sm text-gray-900'>{order.date}</p>
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

export default Customers