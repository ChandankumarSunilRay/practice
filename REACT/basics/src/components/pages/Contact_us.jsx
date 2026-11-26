import React from 'react'

const Contact_us = () => {
  return (
    <div className="flex justify-center p-10" >
      <form className='flex flex-col text-2xl gap-1.5 border rounded-2xl px-7 bg-blue-50 mt-3.5' >
        <label className='mt-3.5' htmlFor="Name">Name: </label>
        <input
          type="text"
          id='Name'
          className='border rounded-md p-2 '
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id='email'
          className='border rounded-md p-2'
        />
        <label htmlFor="phone ">Phone no: </label>
        <input
          type="tel"
          id='phone '
          className='border rounded-md p-2 '
        />
        <label htmlFor="address">Address: </label>
        <input
          type="text"
          id='address'
          className='border rounded-md p-2 '
        />

        <button type="submit" className="bg-amber-900 text-white self-center rounded-md mt-3.5 mb-1.5 cursor-pointer">
          Submit
        </button>


      </form>
    </div>
  )
}

export default Contact_us
