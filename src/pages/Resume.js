import React, { useState } from 'react'
import HardskillTab from '../components/HardskillTab'
import SoftskillTab from '../components/SoftskillTab'

const Resume = () => {
  const [tab, setTab] = useState(1)
  return (
    <div className='flex flex-col w-full items-center gap-4 dark:text-white'>
      <div className='flex flex-col items-center justify-center gap-2 md:w-1/2 px-4 py-2 rounded-lg border border-gray-100 dark:border-gray-500'>
        <div>
            <p className='font-bold'>-PENGALAMAN KERJA SAYA-</p>
            <div className='w-full h-3 rounded-full bg-blue-500'></div>
        </div>
        <div className='flex flex-col'>
          <div className='flex'>
            <div className='flex flex-col items-center'>
              <div className='flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full'>
                <div className='w-1 h-1 bg-white rounded-full'></div>
              </div>
            </div>
            <div className='flex flex-col mb-4'>
              <div className='flex items-center'>
                <p className='font-bold'>Assistant Officer Business Analyst</p>
                <p>(PT Bank Central Asia Tbk)</p>
              </div>
              <p className='font-bold'>2019 - Sekarang</p>
              <p className='text-sm italic'>PT Bank Central Asia Tbk (BCA) adalah salah satu Bank terbaik di Indonesia. Di Bank BCA saya bertanggung jawab dalam pengembangan produk untuk nasabah Bisnis</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-2 md:w-1/2 w-full px-4 py-2 rounded-lg border border-gray-100 dark:border-gray-500'>
        <div>
            <p className='font-bold'>-SKILL SAYA-</p>
            <div className='w-full h-3 rounded-full bg-blue-500'></div>
        </div>
        <ul className='flex items-center bg-blue-50 gap-2 px-1 py-1 rounded-full dark:bg-black'>
          <li>
            <button onClick={() => setTab(1)} className={tab === 1 ? 'flex bg-blue-500 px-2 rounded-full text-white' : 'flex px-2 text-gray-400'}>Hardskill</button>
          </li>
          <li>
            <button onClick={() => setTab(2)} className={tab === 2 ? 'flex bg-blue-500 px-2 rounded-full text-white' : 'flex px-2 text-gray-400'}>Softskill</button>
          </li>
        </ul>

        <div className='flex flex-col items-center justify-center gap-2 w-full'>
          {tab === 1 ? <HardskillTab/> : tab === 2 ? <SoftskillTab/> : null}
          <div className='flex w-full p-1'></div>
        </div>
      </div>
      <div className='flex w-full p-1'></div>
    </div>
  )
}

export default Resume