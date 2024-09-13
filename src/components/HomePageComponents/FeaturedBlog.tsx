import React from 'react'
import BlogCard from './BlogCard.tsx'
import Button from '../atoms/Button.tsx'
import { BsArrowRightCircleFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const FeaturedBlog = () => {

  const nav = useNavigate();
  const goToPortBlog = () => {
    nav("/blog")
  }
  return (
    <div>
      <div className='container_all'>
        <h1 className='header'>Latest Blogs</h1>
        <div className='mt-16 grid lg:grid-cols-3 grid-cols-2 gap-x-5 gap-y-5 px-2 md:px-[unset]'>
          {
            [Array(1,2,3).map((_, i) => (
              <BlogCard key={i} index={i} />
            ))]
          }
        </div>
        <div className='mt-10 flex items-center  justify-center '>
            <Button type="button" className='bg-sidebar_green border-border_green dark:border-border_green text-white w-fit' action={goToPortBlog}>
                <span className='text-lg'><BsArrowRightCircleFill /></span>
                <span>View Blog</span>
            </Button>
       </div>
      </div>
    </div>
  )
}

export default FeaturedBlog
