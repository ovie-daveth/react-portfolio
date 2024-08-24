import React from 'react'
import {Link} from "react-router-dom";
import { socials } from '../constant';
import { menus } from '../constant';
import { BsMoonStars } from 'react-icons/bs';
import { useTheme } from '../states/themeActions';
import home from "../assets/home_4.jpg"
const SideBar = () => {


  const { theme, toggleTheme, isLightTheme } = useTheme();


  return (
    <div className={`dark:bg-dark-sidebar bg-sidebar_green w-full h-full dark:text-white text-dark-textBold px-2 pt-3`}>
        <div className='flex flex-col items-center'>
              <div className='mt-7 flex flex-col gap-4 items-center text-center'>
                  <h2 className='text-xl font-bold ml-1'>O. O David</h2>
                  <div className='w-36 h-32  rounded-full bg-white/50'>
                    <img className='w-full h-full rounded-full object-cover' src={home} alt="" />
                  </div>
                  <p className='mt-3 font-normal'>Hi, my name is Omokefe David and I'm a senior software engineer. Welcome to my personal website!</p>
              </div>
              <div className='flex items-center gap-3 mt-5'>
                {
                  socials.map((item, index) => (
                    <div key={index} className='bg-[#0000004D] dark:bg-sidebar_green text-white dark:text-white h-8 w-8 rounded-full flex items-center justify-center cursor-pointer hover:scale-95'>
                  <Link to={item.href}>
                  {item.icon}
                  </Link>
                </div>
                  ))
                }
              </div>
              <div className='flex flex-col items-start mt-12 gap-4'>
              {
                  menus.map((item, index) => (
                    <div key={index} className={` flex justify-center cursor-pointer hover:scale-95 ${index === 0 && "text-textLight dark:text-sidebar_green"}`}>
                  <Link to={item.href} className='flex items-center gap-2'>
                      <span className='text-lg'>{item.icons}</span>
                      <span>{item.menu}</span>
                  </Link>
                </div>
                  ))
                }
              </div>
              <div className='mt-10'>
                <button className='bg-[#0000004D] dark:bg-sidebar_green px-8 py-3 rounded-md hover:scale-95'>
                  Hire me
                </button>
              </div>
              <div className='mt-10 text-center flex items-center flex-col'>
                <h3 className='flex gap-2 items-center text-lg'><span><BsMoonStars /> </span>Theme</h3>
                  <div className='relative mt-3 w-[70px] h-8 bg-transparent border-white/50 border-[2px] rounded-3xl cursor-pointer' onClick={toggleTheme}>
                    <div className={`absolute bg-sidebar_green h-[95%] w-[50%] ${isLightTheme ? "right-0" : "left-0"} shadow-lg drop-shadow-lg rounded-full`}></div>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default SideBar