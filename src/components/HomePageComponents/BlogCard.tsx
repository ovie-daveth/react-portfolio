import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import code from "../../assets/cssframe.jpg";
import css from "../../assets/frame.jpg";

const BlogCard = ({index}) => {
  return (
    <div className='w-[100%]/3 bg-card_bg dark:bg-dark-card_bg'>
      <div className='w-full h-[300px]'>
      <img src={index % 2 === 0 ? code : css} alt="" className="object-cover h-full w-full" />
      </div>
      <div className='mt-3 p-4'>
        <h2 className='text-textBold underline dark:text-white'>Top 3 JavaScript Frameworks</h2>
        <p className='font-normal text-sm mt-3 text-textLight dark:text-dark-textLight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, accusamus incidunt. Enim nobis dicta perferendis.</p>
        <a className='flex items-center gap-3 text-sidebar_green mt-3 hover:underline w-fit' href="">Read More <span><BsArrowRight /></span></a>
        <small className='text-textLight dark:text-dark-textLight font-light '>Published {4} min ago</small>
      </div>
    </div>
  )
}

export default BlogCard
