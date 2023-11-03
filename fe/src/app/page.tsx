import Image from 'next/image'

export default function Home() {
  return (
    <body>
      <main className='h-screen w-screen grid grid-rows-[auto,auto,1fr] md:grid-cols-3'>
        <div className='text-center p-3 bg-green-300 h-12 md:col-span-3'>Get flat 30% off on premium upgrade.</div>
        <div className='relative md:row-span-6 md:col-span-2'> {/* image container */}
          <div className='overlay absolute top-0 w-full h-full bg-gradient-to-b md:bg-gradient-to-r from-transparent to-white'></div>
          <img className='w-full h-full object-cover' src="/images/man-watching-streaming-service-his-laptop.jpg" alt="1" />
        </div>
        <div className='flex flex-col justify-center row-span-6 md:col-span-1 p-5'>
          <h1 className='text-4xl font-bold'>Watch Anywhere</h1>
          <p className='text-gray-900'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
          <div>
          <button className='bg-red-400 text-white rounded-md px-4 py-2 mr-3 mt-5'>Login</button>
          <button className='bg-gray-300 text-gray-900 rounded-md px-4 py-2 mt-5'>Login as Guest</button>
          </div>
          <div className='mt-3'>
            Not a member? 
            <span className='text-blue-500 cursor-pointer'> Sign up</span>
          </div>
        </div>
      </main>
    </body>
  )
}
