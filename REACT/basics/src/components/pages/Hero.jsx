import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-row justify-center items-center mt-25.5 ' >
      <img
        className='w-[900px] h-[600px] rounded-3xl'
        src="https://t4.ftcdn.net/jpg/02/69/47/51/360_F_269475198_k41qahrZ1j4RK1sarncMiFHpcmE2qllQ.jpg" alt="image" />
      <div className='flex flex-col gap-2.5'>
        <h1 className='font-black text-2xl ml-3.5 '>Welcome to our Bus service</h1>
        <h1 className='font-black text-2xl ml-3.5 text-7xl'>Get in touch with us</h1>
      </div>


    </div>
  )
}

export default Hero
