import React from 'react'
import Layout from '../../_layout.tsx'
import Button from '../../components/atoms/Button.tsx'
import PortfolioLists from '../../components/PortfolioComponents/PortfolioLists.tsx'

const Portfolio = () => {

    const goToContact = () => {

    }
  return (
    <Layout theme={false}>
        <div className='container_all'>
            <div className='flex items-center justify-center flex-col text-center md:w-[70%] w-full mx-auto'>
                <h1 className='font-bold text-3xl dark:text-white text-textBold mb-3'>Portfolio</h1>
                <p className='text font-light'>This is my portfolio. I add more projects as they come. These projects includes both personal and client's project (the ones permitted to be shared).</p>
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
