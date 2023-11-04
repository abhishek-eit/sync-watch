import React from 'react'

const template = (params: any) => {
  return (
    <div className='h-screen w-screen grid grid-rows-[auto,auto,1fr] md:grid-cols-3'>
      <div className='text-center p-3 bg-green-300 h-12 md:col-span-3'>Get flat 30% off on premium upgrade.</div>
      <div className='relative md:row-span-6 md:col-span-2'> {/* image container */}
        <div className='overlay absolute top-0 w-full h-full bg-gradient-to-b md:bg-gradient-to-r from-transparent to-white'></div>
        <img className='w-full h-full object-cover' src="/images/man-watching-streaming-service-his-laptop.jpg" alt="1" />
      </div>
      <div className='flex flex-col justify-center row-span-6 md:col-span-1 p-5'>
        {params.children}
      </div>
    </div>
  )
}

export default template