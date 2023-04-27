import React from 'react'

const TopCards = () => {
  return (
    <div className='grid lg:grid-cols-5 gap-4 p-4'>
      <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
          <strong className='text-2xl'>$7,846</strong>
          <span className='text-gray-600'>Daily Revenue</span>
        </div>
        <span className='bg-green-200 flex justify-center items-center p-2 rounded-lg text-green-700 text-lg'>
          +18%
        </span>
      </div>
      <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
          <strong className='text-2xl'>$1,437,876</strong>
          <span className='text-gray-600'>YTD Revenue</span>
        </div>
        <span className='bg-green-200 flex justify-center items-center p-2 rounded-lg text-green-700 text-lg'>
          +11%
        </span>
      </div>
      <div className='col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
          <strong className='text-2xl'>11,437</strong>
          <span className='text-gray-600'>Customers</span>
        </div>
        <span className='bg-green-200 flex justify-center items-center p-2 rounded-lg text-green-700 text-lg'>
          +17%
        </span>
      </div>
    </div>
  )
}

export default TopCards