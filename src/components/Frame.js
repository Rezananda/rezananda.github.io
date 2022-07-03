import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const Frame = ({children}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [toggleScroll, setToggleScroll] = useState(false)
  const scroller = document.querySelector('div.scrollable')
  
  useEffect(() => {
    scroller?.addEventListener('scroll', ()=> {
      setScrollPosition(scroller.scrollTop)
      if(scrollPosition > 100){
        setToggleScroll(true)
      }else if(scrollPosition <= 100){
        setToggleScroll(false)
      }
    })
  }, [scroller, scrollPosition]);

  const handleScrollToTop = () => {
    scroller.scrollTo({top:0, behavior:'smooth'})
  }

  return (
    <div className='flex min-h-screen h-screen bg-gray-100 p-4 md:p-0 dark:bg-black transition-colors duration-500'>
      <div className='flex h-full w-full md:h-3/5 md:w-3/5 bg-white m-auto rounded-xl border border-gray-200 px-4 py-4 flex-col dark:bg-slate-800 dark:border-gray-500'>
        <Navbar/>
        <style>
            {
              `.scrollable::-webkit-scrollbar {
                display: none;
            }`
            }
          </style>
        <div className='relative flex h-full w-full overflow-auto scrollable py-2'>
            {children}
            <button onClick={handleScrollToTop} className={toggleScroll ? 'block fixed bottom-0 right-0 mb-7 mr-7 items-center justify-center h-12 w-12 rounded-full bg-blue-500 drop-shadow-md' : 'hidden'}><span className='text-xl'>⬆️</span></button>
        </div>
      </div>
    </div>
  )
}

export default Frame