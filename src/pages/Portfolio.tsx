import React from 'react'
import Layout from '../_layout.tsx'
import Button from '../components/atoms/Button.tsx'
import PortfolioLists from '../components/atoms/PortfolioComponents/PortfolioLists.tsx'

const Portfolio = () => {

    const goToContact = () => {

    }
  return (
    <Layout theme={false}>
        <div className='container'>
            <div className='flex items-center justify-center flex-col text-center w-[70%] mx-auto'>
                <h1 className='font-bold text-3xl dark:text-white text-textBold mb-3'>Portfolio</h1>
                <p className='text-sm font-light'>Welcome to my online portfolio. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. I'm taking on freelance work at the moment. Want some help building your software?</p>
                <Button className='bg-sidebar_green text-white border-border_green mt-5' type="submit" action={goToContact}>
                    Hire me
                </Button>
            </div>
            <div>
                <PortfolioLists />
            </div>
        </div>
    </Layout>
  )
}

export default Portfolio
