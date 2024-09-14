import React from 'react'
import Layout from '../../_layout.tsx'
import { ArrowLeft, ArrowRight, DotIcon, MessageCircle, QuoteIcon } from 'lucide-react'
import { BsDash } from 'react-icons/bs'
import Button from '../../components/atoms/Button.tsx'
import Comments from '../../components/blog/Comments.tsx'

const BlogDetails = () => {

    const handleNav = (direction: string) => {

    }
  return (
    <Layout theme={false}>
      <div className='container_all'>
            <div className='mx-auto md:w-[65%] lg:w-full'>
                <div className='flex flex-col gap-0'>
                    <h1 className='font-bold text-3xl dark:text-white text-textBold mb-3'>Why Every Developer Should Have A Blog</h1>
                    <div className='text-left font-light text-textLight dark:text-dark-textLight text-[12px] flex items-center -mt-2'>
                        <span>Published 2 days ago</span>
                        <span><DotIcon /></span>
                        <span>5 min read</span>
                        <span><DotIcon /></span>
                        <a href='#' className=' hover:underline'>1 comments</a>
                    </div>
                </div>
                <div className='mt-6 text-center'>
                    <img src="https://www.dochipo.com/wp-content/uploads/2020/05/banner.jpg" alt="" className='w-full md:h-[400px]' />
                    <div className='text-center font-extralight mt-3 text-[13px]'>Image Credit: <a href="#" className='hover:underline'> made4dev.com (Premium Programming T-shirts)</a></div>
                </div>
                <div className='font-light text-sm text-textLight dark:text-dark-textLight tracking-wider leading-loose mt-10'>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
                    <h1 className='font-bold text-3xl dark:text-white text-textBold mb-3 mt-10'>Code Block Example</h1>
                    <p>You can get more info at https://highlightjs.org/. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
                    <div className='bg-black px-3 py-5 my-10'>
                        <small className='text-red-600'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde voluptatem magnam officiis voluptas blanditiis cumque, molestias dicta quidem! Quibusdam, molestias!
                        </small>
                    </div>
                    <h1 className='font-bold text-3xl dark:text-white text-textBold mb-3'>Typography</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    <h1 className='font-bold text-xl dark:text-white text-textBold mb-3 mt-10'>Bullet Points:</h1>
                    <ul className=' list-disc mb-10'>
                        <li>Lorem ipsum dolor sit amet consectetur </li>
                        <li>Aenean commodo ligula eget dolor.</li>
                        <li>Aenean massa cum sociis natoque penatibus.</li>
                    </ul>
                    <ol className=' list-decimal mb-10'>
                        <li>Lorem ipsum dolor sit amet consectetuer</li> 
                        <li>Aenean commodo ligula eget dolor.</li>
                        <li>Aenean massa cum sociis natoque penatibus.</li>
                    </ol>
                <div className='relative before:absolute before:-left-12 before:top-0 before:h-full before:w-[2px] before:rounded-full before:bg-black dark:before:bg-gray-400'>
                    <h1 className='font-bold md:text-xl text-lg  dark:text-white text-textBold mb-7'>Quote Example</h1>
                    <div>
                        <p className='md:text-3xl text-2xl leading-10'>You might not think that programmers are artists, but programming is an extremely creative profession. It's logic-based creativity.</p>
                        <p className='flex items-center  text-xl ml-10 mt-9'><span><BsDash /></span> John Romero</p>
                    </div>
                </div>
                </div>
                <div className='flex w-full mt-10 '>
                    <Button type="button" className=' bg-sidebar_green border-border_green w-full flex items-center justify-between text-white ' action={() => handleNav("left")}>
                        <div className='flex items-center justify-between w-[50%]'>
                            <span><ArrowLeft /></span>
                            <span>Back</span>
                        </div>
                        <div></div>
                    </Button>
                    <Button type="button" className=' bg-sidebar_green border-border_green w-full flex items-center justify-between text-white' action={() => handleNav("right")}>
                        <div></div>
                        <div className='flex items-center justify-between w-[50%]'>
                            <span>Next</span>
                            <span><ArrowRight /></span>
                        </div>
                    </Button>
                </div>
                <Comments />
            </div>
      </div>
    </Layout>
  )
}

export default BlogDetails
