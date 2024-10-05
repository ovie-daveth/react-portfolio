import React, { useEffect, useState } from 'react'
import Button from '../atoms/Button.tsx'
import { Stacks } from '../../constant.js'
import { useNavigate } from 'react-router-dom'
import useTypingEffect from '../../lib/TypingText.tsx'
import useCardInView from '../../lib/useCardInView.ts'
import Typewriter from 'react-typewriter-effect';
import TypingText from '../../lib/TypingText.tsx'

const About = () => {
    
    const nav = useNavigate();
    const navigateTo = () => {
        nav("/services")
    }

  return (
    <div className='container_all'>
        <div>
            <TypingText text='What I do' className='header' />
            <p className='mt-6 font-normal text-textLight dark:text-dark-textLight'>I have more than 5 years' experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my <a className='text-sidebar_green hover:underline' href="/">online resume</a> and project <a className='text-sidebar_green hover:underline' href="/">portfolio</a>.</p>
        </div>
        <div className='grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-3 grid-cols-2 gap-x-5 gap-y-10 mt-16'>
            {
                Stacks.map((item, i) => (
                    <div key={i} className='flex flex-col gap-2'>
                        <div>
                            {item.icons ? <div className='flex items-center gap-2'>
                                {
                                    item.icons.map((item, index) => (
                                        <div key={index} className=' w-7 h-7'>
                                            <img className='w-full h-full' src={item} alt="icons" />
                                        </div>
                                    ))
                                }
                            </div> : <div className='bg-sidebar_green  h-9 w-9 text-textBold relative rounded-sm'>
                                <p className='absolute -bottom-1 right-1 text-lg '>JS</p>
                            </div>}
                            <p className='mt-2 text-textBold dark:text-dark-textBold'>{item?.title}</p>
                            </div>
                        <p className='text-sm md:text-[16px] font-normal text-textLight dark:text-dark-textLight' dangerouslySetInnerHTML={{ __html: item.desc }}>    
                        </p>
                    </div>
                ))
            }
        </div>
        <div className='mt-10 flex items-center  justify-center'>
            <Button type="button" action={navigateTo} className='bg-sidebar_green border-border_green text-white'>
                Service & Pricing
            </Button>
        </div>
    </div>
  )
}

export default About