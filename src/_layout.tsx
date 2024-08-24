import React from 'react'
import SideBar from './components/SideBar.tsx';

type LayoutType = {
    children: React.ReactNode;
    theme: boolean;
}
const Layout = ({children, theme} : LayoutType) => {
  return (
    <main className='relative min-w-full'>
        <div className='flex items-start'>
            {/* Side Bar */}
            <div className='w-[280px] top-0 left-0 fixed h-screen'>
                <SideBar />
            </div>
             {/* Main space */}
             <div className='right-0 left-[280px] min-h-screen absolute dark:bg-dark-background dark:text-gray-400'>
                {children}
             </div>
        </div>
    </main>
  )
}

export default Layout
