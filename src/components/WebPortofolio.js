import React from 'react'

const WebPortofolio = () => {
  return (
    <div className='flex flex-col gap-4 w-full'>
      <div className='md:grid md:grid-cols-2 md:grid-rows-2 md:gap-4 flex flex-col gap-2'>
        <div className='rounded border-l-4 border-blue-500 shadow-md px-4 py-2 flex w-full items-center md:justify-center md:gap-0 gap-2 md:flex-col dark:bg-black'>
          <div className='flex flex-col items-center justify-center'>
            <img alt='web' src="https://img.icons8.com/color/48/000000/web.png"/>
          </div>
          <div className='md:text-center text-start'>
            <p className='text-sm'>Web Resume</p>
            <a className='text-center text-xs underline text-blue-600' target={'_blank'} rel='noreferrer' href='https://rezananda.github.io'>Lihat Detail</a>
          </div>
        </div>
        <div className='rounded border-l-4 border-blue-500 shadow-md px-4 py-2 flex w-full items-center md:justify-center md:gap-0 gap-2 md:flex-col dark:bg-black'>
          <div className='flex flex-col items-center justify-center'>
            <img alt='web' src="https://img.icons8.com/color/48/000000/web.png"/>
          </div>
          <div className='md:text-center text-start'>
            <p className='text-sm'>Clocker</p>
            <a className='text-center text-xs underline text-blue-600' target={'_blank'} rel='noreferrer' href='https://clocker-84a50.web.app/login'>Lihat Detail</a>
          </div>
        </div>
        <div className='rounded border-l-4 border-blue-500 shadow-md px-4 py-2 flex w-full items-center md:justify-center md:gap-0 gap-2 md:flex-col dark:bg-black'>
          <div className='flex flex-col items-center justify-center'>
            <img alt='web' src="https://img.icons8.com/color/48/000000/web.png"/>
          </div>
          <div className='md:text-center text-start'>
            <p className='text-sm'>HEI-ASYST</p>
            <a className='text-center text-xs underline text-blue-600' target={'_blank'} rel='noreferrer' href='http://hei-asyst.herokuapp.com'>Lihat Detail</a>
          </div>
        </div>
        <div className='rounded border-l-4 border-blue-500 shadow-md px-4 py-2 flex w-full items-center md:justify-center md:gap-0 gap-2 md:flex-col dark:bg-black'>
          <div className='flex flex-col items-center justify-center'>
            <img alt='web' src="https://img.icons8.com/color/48/000000/web.png"/>
          </div>
          <div className='md:text-center text-start'>
            <p className='text-sm'>Web Service For COAP</p>
            <a className='text-center text-xs underline text-blue-600' target={'_blank'} rel='noreferrer' href='https://github.com/Rezananda/skripsi'>Lihat Detail</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebPortofolio