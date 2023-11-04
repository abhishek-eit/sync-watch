import React from 'react'

const login = () => {
  return (
    <div className='login-form'>
      <form>
        <div className='mb-10 text-3xl font-bold'>Login Form</div>

        <div className="mt-5 input input-username">
          <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900 capitalize">
            Username / Email
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="username"
              id="username"
              autoComplete="off"
              className="block border-0 bg-transparent w-full py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="JOHNDOE123"
            />
          </div>
        </div>

        <div className="mt-5 input input-password">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
            Password
          </label>
          <div className="mt-2">
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              className="block border-0 bg-transparent w-full py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="********"
            />
          </div>
        </div>

        <div className='m-10 text-center'>
          <span className='px-5 py-3 bg-red-400 text-white rounded-md'>
            <input type="submit" value="Login" />
          </span>
        </div>
      </form>
    </div>
  )
}

export default login