import React from 'react'
import Button from '../atoms/Button.tsx'

const About = () => {

    const navigateTo = () => {

    }
  return (
    <div className='container'>
        <div>
            <h1 className='header'>What I do</h1>
            <p className='mt-6 font-normal text-textLight dark:text-dark-textLight'>I have more than 5 years' experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my <a className='text-sidebar_green hover:underline' href="/">online resume</a> and project <a className='text-sidebar_green hover:underline' href="/">portfolio</a>.</p>
        </div>
        <div className='grid grid-cols-4 gap-x-5 gap-y-10 mt-16'>
            {
                Array(1,2,3,4,5,6,7).map((_, i) => (
                    <div key={i} className='flex flex-col gap-2'>
                        <div>
                            <div className='bg-sidebar_green  h-9 w-9 text-textBold relative rounded-sm'>
                                <p className='absolute -bottom-1 right-1 text-lg '>JS</p>
                            </div>
                            <p className='mt-2 text-textBold dark:text-dark-textBold'>Vanilla Javascript</p>
                            </div>
                        <p className='text-sm font-normal text-textLight dark:text-dark-textLight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus rerum dolorem rem? minima quos <a className='text-white hover:underline' href="/">libero quia</a> autem nam? Nesciunt, eaque.</p>
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