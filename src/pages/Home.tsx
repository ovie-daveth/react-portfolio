import React from 'react'
import Layout from '../_layout.tsx'
import Intro from '../components/HomePageComponents/Intro.tsx'
import About from '../components/HomePageComponents/About.tsx'
import Testimonial from '../components/HomePageComponents/Testimonial.tsx'
import FeatureProjects from '../components/HomePageComponents/FeatureProjects.tsx'
import FeaturedBlog from '../components/HomePageComponents/FeaturedBlog.tsx'
const Home = () => {

  return (
    <Layout theme={false}>
        <div className='lg:mt-[unset] mt-10 px-2 md:px-[unset] hidden md:block'>
            <Intro />
            <About />
            <Testimonial />
            <FeatureProjects />
            <FeaturedBlog />
        </div>

        {/* mobile */}
        <div className='lg:mt-[unset] mt-10 px-2 md:px-[unset] block md:hidden'>
            <FeatureProjects />
            <Intro />
            <About />
            <Testimonial />
            <FeaturedBlog />
        </div>
    </Layout>
  )
}

export default Home
