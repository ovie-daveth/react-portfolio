import React from 'react'
import Button from './atoms/Button.tsx'
import { BsSend } from 'react-icons/bs'

const HireMe = () => {

    const gotoContact = () => {

    }
  return (
    <div className='dark:bg-dark-card_bg bg-card_bg px-6 py-10'>
       <div className='flex flex-col gap-5 items-center justify-center'>
        <h3 className='lg:text-2xl md:text-lg text-textBold dark:text-dark-textBold text-center'>Want me to help with your project?</h3>
            <p className='text-textLight dark:text-dark-textLight md:w-[70%] text-center font-normal md:text-sm text-[12px]'>I take freelance work, you can use this section to prompt any potential clients to get in touch with you with their project requirements.</p>

            <Button type="button" className=' bg-sidebar_green px-8 py-3 rounded-md hover:scale-95 border-border_green text-white' action={gotoContact}>
                <span><BsSend /></span>
                <span>Hire Me</span>
            </Button>
       </div>
    </div>
  )
}

export default HireMe
