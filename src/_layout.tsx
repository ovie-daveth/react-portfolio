import React, { useEffect, useState } from 'react'
import SideBar from './components/SideBar.tsx';
import { menus } from './constant.js';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

type LayoutType = {
    children: React.ReactNode;
    theme: boolean;
}
const Layout = ({children, theme} : LayoutType) => {

  const [path, setPath] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const path = window.location.pathname;
    setPath(path)
  }, [window.location.pathname])

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <main className='relative min-w-full'>
        <div className='flex items-start'>
            {/* Side Bar */}
            <div className='lg:w-[280px] hidden lg:block top-0 left-0 fixed h-screen'>
                <SideBar />
            </div>
            <div className='hidden sm:flex flex-col items-start mt-12 gap-4 fixed top-[20%] right-4 z-50 p-3'>
              {
                  menus.map((item, index) => (
                    <div key={index} className={` flex justify-center cursor-pointer hover:scale-95 ${path == item.href && "text-textLight dark:text-sidebar_green"}`}>
                  <Link to={item.href} className='flex items-center gap-2 group relative'>
                      <span className='text-lg  bg-sidebar_green rounded-full p-3'>{item.icons}</span>
                      <span className={`hidden group-hover:block absolute ${index === 0 ? "-left-24" : index === 1 ? "-left-20" : index === 2 ? "-left-24" : index === 3 ? "-left-20" : index === 4 ? "-left-12" : "-left-28"} `}>{item.menu}</span>
                  </Link>
                </div>
                  ))
                }
              </div>
              <div className='absolute top-0 right-0 left-0 z-50 dark:bg-dark-sidebar bg-sidebar_green h-16 flex items-center'>
               <div className='flex w-[50%] justify-between pl-4 text-white '>
                <div onClick={openMenu} className='cursor-pointer'><Menu /></div>
                <h1 className='text-xl'>Rusti Here!</h1>
               </div>
                <div className='absolute top-12 right-0 left-0'>
                  {
                    isMenuOpen &&  <SideBar />
                  }
                </div>
            </div>
             {/* Main space */}
             <div className='absolute lg:left-[280px] w-full min-h-screen dark:bg-dark-background dark:text-gray-400'>
                {children}
             </div>
        </div>
    </main>
  )
}

export default Layout
