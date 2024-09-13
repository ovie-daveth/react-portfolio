import React from 'react'
import Button from '../atoms/Button.tsx'
import { BsArrowRightCircle } from 'react-icons/bs'
import home from "../../assets/home_3.jpg"

const Intro = () => {

    const GotoPortfolio = () => {

    }


  return (
    <div className='flex items-start flex-col-reverse md:flex-row gap-5 dark:border-b dark:border-[rgb(17,40,1)] dark:shadow-lg dark:drop-shadow-lg container_all'>
              <div className='xl:w-[70%] lg:w-full md:w-[60%] flex flex-col gap-10'>
                <div className='flex flex-col gap-1'>
                  <h2 className='text-3xl text-textBold dark:text-dark-textBold'>Omokefe O. David</h2>
                  <h4 className='text-lg font-normal'>Senior software engineer</h4>
                </div>
                <div className=''>
                  <p className='font-normal text-textLight dark:text-dark-textLight'>I'm a software engineer specialised in frontend and backend development for complex scalable web apps and mobile. I write about software development on my <a href="/" className='text-sidebar_green hover:underline'>blog</a>. Want to know how I may help your project? Check out my project <a href="/" className='text-sidebar_green hover:underline'>portfolio</a> and <a href="/" className='text-sidebar_green hover:underline'>online resume</a>.</p>
                  <div className='mt-10 flex items-center gap-4'>
                    <Button type="button" className='bg-sidebar_green text-white border-border_green' action={GotoPortfolio}>
                      <span className='text-lg'><BsArrowRightCircle /></span>
                      <span>Portfolio</span>
                    </Button>
                    <Button type="button" className='bg-[#2f435c] text-white border-[#2f315c]' action={GotoPortfolio}>
                      <span>Resume</span>
                    </Button>
                  </div>
                </div>
              </div>
              <div className='xl:w-[28%] lg:-[35%] xl:block lg:hidden md:block block h-[350px] bg-white/50 rounded-md'>
                <img className='rounded-md w-full h-full' src={home} alt="" />
              </div>
          </div>
  )
}

export default Intro