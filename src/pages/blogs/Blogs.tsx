import React from 'react'
import Layout from '../../_layout.tsx'
import BlogLists from '../../components/blog/BlogList.tsx'
import Button from '../../components/atoms/Button.tsx'
import { useNavigate } from 'react-router-dom'
import TypingTest from "../../lib/TypingText.tsx"

const Blogs = () => {

  const navigate = useNavigate()
  const WriteBlogFunction = () => {
      navigate("/blog/write")
  }
  return (
    <Layout theme={false}>
        <div className='lg:fixed absolute right-3 lg:bottom-4 top-12 z-50'>
        <Button className='bg-sidebar_green text-white border-border_green mt-5 text-sm md:text-[15px]' type="submit" action={WriteBlogFunction}>
            Write Blog
          </Button>
        </div>
        <div className='container_all'>
            <div className='flex items-center justify-center flex-col text-center md:w-[70%] mx-auto'>
            <TypingTest text='Blogs & Articles' className='font-bold text-3xl dark:text-white text-textBold mb-3' />
                <p className='text font-light'>This is my service breakdown. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. I'm taking on freelance work at the moment. Want some help building your software?</p>
            </div>
            <div>
                <BlogLists />
            </div>
        </div>
    </Layout>
  )
}

export default Blogs
