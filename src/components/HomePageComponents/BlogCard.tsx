import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import code from "../../assets/cssframe.jpg";
import css from "../../assets/frame.jpg";

const BlogCard = ({index}) => {
  return (
    <div className='w-[100%]/3 bg-card_bg dark:bg-dark-card_bg'>
      <div className='w-full md:h-[300px] h-[200px]'>
      <img src={index % 2 === 0 ? code : css} alt="" className="object-cover h-full w-full" />
      </div>
      <div className='mt-3 p-4'>
        <h2 className='text-textBold underline dark:text-white text-sm md:text-[16px] lg:text-[18px]'>Top 3 JavaScript Frameworks</h2>
        <p className='font-normal text-sm md:text-[15px] mt-3 text-textLight dark:text-dark-textLight hidden md:block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, accusamus incidunt. Enim nobis dicta perferendis.</p>
        <a href={`/blog/${index}`} className='flex items-center gap-3 text-sidebar_green mt-3 hover:underline w-fit' >Read More <span><BsArrowRight /></span></a>
        <small className='text-textLight dark:text-dark-textLight font-light text-[12px] md:text-[15px] '>Published {4} min ago</small>
      </div>
    </div>
  )
}

export default BlogCard
