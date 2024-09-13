import React from 'react'
import project from  "../../assets/cssframe.jpg"
import { BsGraphUp, BsLink, BsPeople } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const PortfolioTheme = () => {
  return (
    <div className='bg-card_bg dark:bg-dark-card_bg p-4 roundded-md'>
      <div className='flex flex-col md:flex-row items-start gap-10'>
       <div className='md:w-[35%]'>
            <img src={project} alt="" className='object-cover w-full h-full' />
       </div>
       <div className='md:w-[55%]'>
            <h3 className='md:text-xl text-lg text-textBold dark:text-dark-textBold'>Client Name</h3>
            <div className='flex items-center gap-2 mt-3 text-textLight dark:text-dark-textLight text'>
                <BsGraphUp />
               <p className='text-sm md:text-[16px]'> Industry: <span className='font-normal'>Tech</span></p>
            </div>
            <div className='flex items-center gap-2 mt-3 text-textLight dark:text-dark-textLight text '>
                <BsPeople size={18} />
               <p className='text-sm md:text-[16px]'> Size: <span className='font-normal'>30+</span></p>
            </div>
            <div className='flex items-center gap-2 mt-3 text-textLight dark:text-dark-textLight text '>
                <BsLink size={22} />
               <p className='text-sm md:text-[16px]'> Website: <Link to="/" className='underline font-normal'>www.abc.com</Link></p>
            </div>
            <p className='mt-6 font-normal text-sm md:text-[16px] text-textLight dark:text-dark-textLight'>Short description of the client and project requirements. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
            <div className='mt-5'>
                <h3 className='md:text-lg text-textLight dark:text-dark-textLight'>Requirements</h3>
                <ul className='mt-3 text-sm md:text-[16px] font-normal text-textLight dark:text-dark-textLight list-disc flex flex-col gap-3'>
                    <li className=''>Requirement lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                    <li>Requirement lorem ipsum dolor sit amet, consectetuer.</li>
                    <li>Requirement lorem ipsum dolor sit amet.</li>
                </ul>
            </div>
       </div>
      </div>
    </div>
  )
}

export default PortfolioTheme
