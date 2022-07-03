import React from 'react'
import image from '../assets/images/reza.jpeg'
import file from '../assets/file/Resume Made Rezananda putra.pdf'

const Beranda = () => {
  return (
      <div className='flex flex-col w-full md:flex-row'>
        <div className='flex-1 h-full w-full flex flex-col items-center justify-center gap-6'>
          <div className='h-3/5 w-3/5 flex flex-col items-center justify-center'>
            <img className='rounded-full' src={image} alt='person'/>
          </div>
          <div className='flex items-center justify-evenly w-full'>
            <a href='https://www.linkedin.com/in/made-rezananda-putra-89a14016b/' target={'_blank'} rel='noreferrer'>
              <img className='w-10 h-10' alt='linkedin' src="https://img.icons8.com/color/48/000000/linkedin.png"/>
            </a>
            <a href='https://www.instagram.com/rezanandaptr/' target={'_blank'} rel='noreferrer'>
              <img className='w-10 h-10' alt='linkedin' src="https://img.icons8.com/fluency/48/000000/instagram-new.png"/>
            </a>
            <a href='https://twitter.com/rezanandaptr' target={'_blank'} rel='noreferrer'>
              <img className='w-10 h-10' alt='linkedin' src="https://img.icons8.com/color/48/000000/twitter--v1.png"/>
            </a>
          </div>
        </div>
        <div className='flex-1 w-full h-full flex flex-col items-center justify-center text-center gap-4 dark:text-white'>
          <p className='text-xl font-bold'>Welcome!👋</p>
          <div className='flex items-center gap-1'>
            <p>My name, </p>
            <p className='font-bold'>Made Rezananda Putra</p>
          </div>
          <p className='italic text-sm'>"A Business Analyst and Coder who always gives the best for Product Development."</p>
          <p className='font-bold'>📧 rezananda6897@gmail.com</p>
          <a href={file} className='bg-blue-500 px-4 py-2 text-white rounded-full' download>Download My Resume</a>
        </div>
      </div>
  )
}

export default Beranda