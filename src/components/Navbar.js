import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import UseDarkMode from '../hooks/UseDarkMode'

const Navbar = () => {
    const [colorTheme, setTheme] = UseDarkMode()
    const [sideBar, setSideBar] = useState(false)
    const location = useLocation()
    const label = location.pathname === '/' ? 'HOME' : location.pathname === '/profil'? 'PROFILE' : location.pathname === '/resume' ? 'RESUME' : location.pathname === '/portofolio' ? 'PORTFOLIO' : null

  return (
    <div className='flex justify-between w-full items-center'>
        <div className='md:hidden flex items-center gap-2'>
            <button onClick={() => setSideBar(!sideBar)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:w-7 md:h-7 text-gray-500 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </button>
        </div>

        <div className='md:hidden'>
            <p className='text-xl font-bold text-gray-500 dark:text-white'>
                {label}
            </p>
        </div>


        {sideBar?
        <div class="fixed inset-0 bg-gray-500 bg-opacity-30" onClick={() => setSideBar(false)}></div>
        :
        null
        }
        <div className={`${sideBar? 'flex bg-white w-3/6 absolute bottom-0 left-0 top-0 p-4 rounded-tr-xl rounded-br-xl border-r border-gray-200 flex-col gap-4 shadow-lg z-50 dark:bg-slate-800 dark:border-gray-700' : 'hidden'} md:block`}>
        {/* <div className={`bg-white top-0 right-0 w-3/6 p-4 text-white fixed h-full z-40  ease-in-out duration-300 md:block ${sideBar? 'translate-x-0' : 'translate-x-full'}`}> */}
            <div className='flex w-full justify-end md:hidden'>
                <button onClick={() => setSideBar(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <ul className='flex flex-col md:flex-row gap-8 items-center'>
                <li>
                    <NavLink to={'/'} onClick={() => setSideBar(false)} className={({isActive}) => isActive? 'flex bg-blue-500 rounded-full px-2 py-1 text-white': 'flex rounded-full px-2 py-1 text-gray-500'}>
                        <p className='text-sm'>Home</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/profil'} onClick={() => setSideBar(false)} className={({isActive}) => isActive? 'flex bg-blue-500 rounded-full px-2 py-1 text-white': 'flex rounded-full px-2 py-1 text-gray-500'}>
                        <p className='text-sm'>Profile</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/resume'} onClick={() => setSideBar(false)} className={({isActive}) => isActive? 'flex bg-blue-500 rounded-full px-2 py-1 text-white': 'flex rounded-full px-2 py-1 text-gray-500'}>
                        <p className='text-sm'>Resume</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/portofolio'} onClick={() => setSideBar(false)} className={({isActive}) => isActive? 'flex bg-blue-500 rounded-full px-2 py-1 text-white': 'flex rounded-full px-2 py-1 text-gray-500'}>
                        <p className='text-sm'>Portfolio</p>
                    </NavLink>
                </li>
            </ul>
        </div>
        <div className='flex items-center'>
            <button onClick={() => setTheme(colorTheme)}>
                {colorTheme === 'dark'? 
                <span className='text-2xl'>🌙</span>
                :
                <span className='text-2xl'>☀️</span>
                }
            </button>
        </div>
    </div>
  )
}

export default Navbar