import React from 'react'

type Prop = {
    width?: string
}
const TestimonialCard = ({width} : Prop) => {
  return (
    <div className={`relative dark:bg-dark-card_bg bg-card_bg ${width} h-[250px] overflow-hidden`}>
    <div className='absolute -top-1 -left-1 w-0 h-0 border-l-[40px] border-l-transparent border-r-[5px] border-r-transparent border-b-[60px] -rotate-[173deg] border-b-sidebar_green'>
        <p className='absolute z-50 top-9 text-4xl text-white right-1'>"</p>
    </div>
    <div className='p-7 text font-normal text-textLight dark:text-dark-textLight'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident quia ad quisquam? Neque soluta velit ducimus ipsam, error doloremque mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsam dignissimos mollitia, accusamus asperiores doloremque similique nihil rerum aspernatur ut.</p>
        <div className='flex mt-5 gap-5'>
            <img className='bg-white h-12 w-12 rounded-full' src="" alt="" />
            <div>
                <p className='text-textLight dark:text-dark-textLight'>James B. Philip</p>
                <small className='text-textLight dark:text-dark-textLight'>Product Manager, Flem technologies</small>
            </div>
        </div>
    </div>
  </div>
  )
}

export default TestimonialCard
