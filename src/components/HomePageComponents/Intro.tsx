import React, { useEffect, useState } from 'react'
import Button from '../atoms/Button.tsx'
import { BsArrowRightCircle } from 'react-icons/bs'
import home from "../../assets/home_3.jpg"
import { useNavigate } from 'react-router-dom'
import useCardInView from '../../lib/useCardInView.ts'
import Typewriter from 'react-typewriter-effect';
import TypingText from '../../lib/TypingText.tsx'

const Intro = () => {

  const nav = useNavigate();
    const GotoPortfolio = () => {
      nav("/portfolio")
    }
    const { ref: CardRef, inView: CardInView } = useCardInView();

    const [shouldType, setShouldType] = useState(false);

    // Monitor when the element comes into view
    useEffect(() => {
      if (CardInView) {
        setShouldType(true); // Trigger typing when in view
      }
    }, [CardInView]);


  return (
    <div className='flex items-start flex-col-reverse md:flex-row gap-5 dark:border-b dark:border-[rgb(17,40,1)] dark:shadow-lg dark:drop-shadow-lg container_all'>
              <div className='xl:w-[70%] lg:w-full md:w-[60%] flex flex-col gap-10'>
                <div className='flex flex-col gap-1'>
                  <h2  ref={CardRef} className={`text-3xl text-textBold dark:text-dark-textBold duration-1000  ${CardInView ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>Omokefe O. David</h2>
                  <TypingText text='Fullstack software engineer' className=' font-light md:text-xl text-lg' />
                </div>
                <div className=''>
                  <p ref={CardRef} className={`font-normal text-textLight dark:text-dark-textLight transition-transform duration-1000 ${CardInView ? 'translate-x-0 opacity-100' : 'translate-x-80 opacity-0'}`}>I'm a software engineer specialised in frontend and backend development for complex scalable web apps and mobile. I write about software development on my <a href="/" className='text-sidebar_green hover:underline'>blog</a>. Want to know how I may help your project? Check out my project <a href="/" className='text-sidebar_green hover:underline'>portfolio</a> and <a href="/" className='text-sidebar_green hover:underline'>online resume</a>.</p>
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
                <img className='rounded-md w-full h-full' src={home} alt="home" />
              </div>
          </div>
  )
}

export default Intro