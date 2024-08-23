import React from 'react'
import {BsTwitter, BsFacebook, BsLinkedin, BsGithub, BsDiscord} from "react-icons/bs"
import {Link} from "react-router-dom";

const SideBar = () => {

  const socials = [
    {
      id: 1,
      href: "",
      icon: <BsTwitter />
    },
    {
      id: 2,
      href: "",
      icon: <BsFacebook />
    },
    {
      id: 3,
      href: "",
      icon: <BsDiscord />
    },
    {
      id: 4,
      href: "",
      icon: <BsGithub />
    },
    {
      id: 5,
      href: "",
      icon: <BsLinkedin />
    },
  ]
  return (
    <div className={`dark:bg-sidebar_dark bg-sidebar_green w-full h-full dark:text-textBold text-dark-textBold px-2`}>
        <div className='flex flex-col items-center'>
              <div className='mt-7 flex flex-col gap-4 items-center text-center'>
                  <h2 className='text-xl font-bold ml-2'>O. O David</h2>
                  <div className='w-36 h-36 rounded-full bg-white/50'>
                    <img src="" alt="" />
                  </div>
                  <p className='mt-3 font-normal'>Hi, my name is Omokefe David and I'm a senior software engineer. Welcome to my personal website!</p>
              </div>
              <div className='flex items-center gap-3 mt-5'>
                {
                  socials.map((item, index) => (
                    <div key={index} className='dark:bg-sidebar_green bg-white text-sidebar_green h-8 w-8 rounded-full flex items-center justify-center cursor-pointer hover:scale-95'>
                  <Link to={item.href}>
                  {item.icon}
                  </Link>
                </div>
                  ))
                }
              </div>
        </div>
    </div>
  )
}

export default SideBar