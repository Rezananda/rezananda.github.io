import React, { useState } from 'react'
import BusinessAnalyst from '../components/BusinessAnalyst'
import WebPortofolio from '../components/WebPortofolio'

const Portofolio = () => {
  const [tab, setTab] = useState(1)
  return (
    <>
      <div className='flex flex-col items-center w-full mt-2 gap-4'>
        <div className='flex flex-col items-center justify-center gap-4 md:w-1/2 px-4 py-2 rounded-lg border border-gray-100 dark:border-gray-500'>
          <div>
            <p className='font-bold'>-MY PORTFOLIO-</p>
            <div className='w-full h-3 rounded-full bg-blue-500'></div>
          </div>
          <ul className='flex items-center bg-blue-50 gap-2 px-1 py-1 rounded-full dark:bg-black'>
            <li>
              <button onClick={() => setTab(1)} className={tab === 1 ? 'flex bg-blue-500 px-2 rounded-full text-white' : 'flex px-2 text-gray-400'}>Business Analyst</button>
            </li>
            <li>
              <button onClick={() => setTab(2)} className={tab === 2 ? 'flex bg-blue-500 px-2 rounded-full text-white' : 'flex px-2 text-gray-400'}>Web Developer</button>
            </li>
          </ul>

          <div className='flex flex-col items-center justify-center gap-2 w-full'>
            {tab === 1 ? <BusinessAnalyst/> : tab === 2 ? <WebPortofolio/> : null}
          </div>
        </div>
        <div className='flex w-full p-1'></div>
      </div>
    </>
  )
}
export default Portofolio
