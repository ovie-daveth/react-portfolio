import React from 'react'
import Layout from '../../_layout.tsx'
import Button from '../../components/atoms/Button.tsx'
import { socials } from '../../constant.js'
import { Link } from 'react-router-dom'
import { Info } from 'lucide-react'

const Contact = () => {

    const goToContact = () => {

    }

    const handleSendMessage = () => {

    }
  return (
    <Layout theme={false}>
        <div className=' font-light'>
          <div className='bg-gray-50 dark:bg-dark-background'>
            <div className='flex items-center justify-center flex-col text-center container'>
            <h1 className='font-bold text-3xl dark:text-white text-textBold mb-3'>Contact Me</h1>
                  <p className='text text-textLight dark:text-dark-textLight w-[80%]'>Interested in hiring me for your project, or you want a CTO or a co-founder or just want to say hi? You can fill in the contact form below or send me an email to <a href="mailto:davethsite@gmail.com" target='_blank'>here</a></p>
                  <p className='mt-4 text-textLight dark:text-dark-textLight'>Want to get connected? Follow me on the social channels below.</p>
                  <div className='flex items-center gap-3 mt-2'>
                  {
                    socials.map((item, index) => (
                      <div key={index} className=' text-sidebar_green h-12 w-12 text-xl rounded-full flex items-center justify-center cursor-pointer hover:scale-95'>
                    <Link to={item.href}>
                    {item.icon}
                    </Link>
                  </div>
                    ))
                  }
                </div>
            </div>
          </div>  
          <div className='text-center mt-10 w-[60%] lg:ml-52'>
            <h1 className='font-bold text-3xl dark:text-white text-textBold mb-3'>Get In Touch</h1>
            <div className=' w-[70%] mx-auto font-normal text-textLight dark:text-dark-textLight font-n'>
              <form className='w-full flex flex-col gap-5'>
                <div className='w-full flex items-start gap-2'>
                  <input className='border-[1.4px] border-gray-400 borderRadius h-10 rounded-md w-full px-5 outline-sidebar_green' type="text" placeholder='Name' />
                  <input className='border-[1.4px] border-gray-400 outline-sidebar_green h-10 borderRadius rounded-md w-full px-5' type="text" placeholder='Email' />
                </div>
                <div>
                    <select id="alphabet-select" className='w-full h-10 px-5 border-[1.4px] border-gray-400 borderRadius rounded-md font-extralight text-textLight dark:text-dark-textLight outline-sidebar_green'>
                      <option className='text-textLight dark:text-dark-textLight' value="apple">Apple</option>
                      <option className='text-textLight dark:text-dark-textLight' value="banana">Banana</option>
                      <option className='text-textLight dark:text-dark-textLight' value="cherry">Cherry</option>
                      <option className='text-textLight dark:text-dark-textLight' value="date">Date</option>
                      <option className='text-textLight dark:text-dark-textLight' value="elderberry">Elderberry</option>
                      <option className='text-textLight dark:text-dark-textLight' value="fig">Fig</option>
                      <option className='text-textLight dark:text-dark-textLight' value="grape">Grape</option>
                    </select>
                    <small className='flex items-center gap-2 text-sm font-light mt-2'>
                      <span>
                        <Info size="15" color="white" fill="green" />
                      </span>
                      <span>Want to know what's included in each package? Check the <a className='text-sidebar_green hover:underline' href="">Services & Pricing</a> page.
                      </span>
                      </small>
                </div>
                <div>
                  <textarea className='border-[1.4px] border-gray-400 borderRadius rounded-md w-full h-[200px] font-light placeholder:font-light p-5 outline-sidebar_green' placeholder='Enter your message' name="" id=""></textarea>
                </div>
                <Button className='bg-sidebar_green text-white border-border_green flex items-center justify-center w-[20%]' type="button" action={handleSendMessage}>Send Now</Button>
              </form>
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default Contact