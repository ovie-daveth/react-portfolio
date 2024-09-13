import React from 'react'
import Layout from '../../_layout.tsx'
import project from  "../../assets/cssframe.jpg"
import PortfolioTheme from '../../components/portfolio/PortfolioTheme.tsx'
import TestimonialCard from '../../components/HomePageComponents/TestimonialCard.tsx'
import HireMe from '../../components/HireMe.tsx'

const ProductDetails = () => {
  return (
   <Layout theme={false}>
      <div className='container_all'>
      <div className='flex items-center justify-center flex-col text-center md:w-[70%] mx-auto text-textLight dark:text-dark-textLight font-light'>
          <h1 className='font-bold md:text-3xl text-xl dark:text-white text-textBold mb-3'>Case Study: Project Name</h1>
          <p className='text-sm md:text-[16px] font-light  text-textLight dark:text-dark-textLight'>Welcome to my online portfolio. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. I'm taking on freelance work at the moment. Want some help building your software?</p>
               
      </div>
      <div className='md:mt-20 mt-10'> 
          <PortfolioTheme />
      </div>
      <div className='md:mt-20 mt-10'>
        <h3 className='md:text-2xl text-lg text-textBold dark:text-dark-textBold font-semibold mb-2'>Project Overview</h3>
        <p className='text-sm md:text-[16px] font-normal text-textLight dark:text-dark-textLight'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>
      </div>
      <div className='md:mt-20 mt-10'>
        <h3 className='md:text-2xl text-lg text-textBold dark:text-dark-textBold font-semibold mb-2'>The challenge</h3>
        <p className='text-sm md:text-[16px] font-normal text-textLight dark:text-dark-textLight'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>
      </div>
      <div className='md:mt-20 mt-10'>
        <h3 className='md:text-2xl text-lg text-textBold dark:text-dark-textBold font-semibold mb-2'>The Approach & Solution</h3>
        <p className='text-sm md:text-[16px] font-normal text-textLight dark:text-dark-textLight'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>
        <div className='grid grid-cols-2 gap-2 mt-5'>
          <img src={project} alt="work" className='object-cover w-full' />
          <img src={project} alt="work" className='object-cover w-full' />
        </div>
        <div className='mt-4'>
          <p className='text-sm md:text-[16px] font-normal text-textLight dark:text-dark-textLight'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
        </div>
      </div>
      <div className='mt-16'>
      <h3 className='md:text-2xl text-lg text-textBold dark:text-dark-textBold font-semibold mb-2'>The Results</h3>
      <div className='flex flex-wrap gap-5'>
        {
          [Array(1,2,3).map((_, i) => (
            <div className='py-5 px-5 rounded-md dark:bg-dark-card_bg bg-card_bg'>
              <p className='text-sidebar_green mb-6 mt-3'>Customer satisfaction</p>
              <h1 className='text-5xl mb-6 dark:text-white'>
                20%
              </h1>
              <small className='text-textLight dark:text-dark-textLight font-light'>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</small>
          </div>
          ))]
        }
      </div>
      <p className='mt-6 text-sm md:text-[16px] font-normal'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit maiores ut fuga tenetur, totam saepe ea sint voluptate nam omnis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est necessitatibus fugiat sunt perferendis quo repellat perspiciatis voluptatem illum cumque explicabo. Earum qui eum facilis dignissimos magni itaque ea, animi reprehenderit? Nostrum corporis accusantium provident labore, nulla quo! Harum, mollitia impedit?</p>
      </div>
      <div className='mt-16'>
        <h3 className='md:text-2xl text-lg text-textBold dark:text-dark-textBold font-semibold mb-2'>Client's Testimonial</h3>
        <TestimonialCard />
      </div>
      <div className='mt-16'>
        <HireMe />
      </div>
      </div>
   </Layout>
  )
}

export default ProductDetails
