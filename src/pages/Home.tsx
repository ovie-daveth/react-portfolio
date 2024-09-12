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
        <div className='md:mt-[unset] mt-10'>
            <Intro />
            <About />
            <Testimonial />
            <FeatureProjects />
            <FeaturedBlog />
        </div>
    </Layout>
  )
}

export default Home
