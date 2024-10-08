import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import useCardInView from '../../lib/useCardInView.ts';

const BlogCard = ({index, data}) => {

  const { ref: CardRef, inView: CardInView } = useCardInView();

  console.log('blog', data)
  return (
    <div ref={CardRef} className={`w-[100%]/3 bg-card_bg dark:bg-dark-card_bg transition-transform  duration-1000 ${
      CardInView ? 'translate-x-0 opacity-100' : (index % 2 === 0 ? "translate-x-20 opacity-0" : "-translate-x-20 opacity-0")
    }`}>
      <div className='w-full md:h-[300px] h-[200px]'>
      <img src={data?.img} alt="" className="object-cover h-full w-full" />
      </div>
      <div className='mt-3 p-4'>
        <h2 className='text-textBold underline dark:text-white text-sm md:text-[16px] lg:text-[18px]'>{data?.title}</h2>
        <p className='font-normal text-sm md:text-[15px] mt-3 text-textLight dark:text-dark-textLight hidden md:block' dangerouslySetInnerHTML={{ __html: data?.content.slice(0, 120) }} />...
        <a href={`/blog/${data?.id}`} className='flex items-center gap-3 text-sidebar_green mt-3 hover:underline w-fit' >Read More <span><BsArrowRight /></span></a>
        <small className='text-textLight dark:text-dark-textLight font-light text-[12px] md:text-[15px] '>Published {4} min ago</small>
      </div>
    </div>
  )
}

export default BlogCard
