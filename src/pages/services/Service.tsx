import React from 'react'
import Layout from '../../_layout.tsx'
import Button from '../../components/atoms/Button.tsx'
import HireMe from '../../components/HireMe.tsx'
import Accordions from '../../components/atoms/Accordions.tsx'
import { faqs } from '../../constant.js'


const Service = () => {

  const goToContact = () => {

  }
  return (
    <Layout theme={false}>
        <div className='container_all'>
            <div className='flex items-center justify-center flex-col text-center w-[70%] mx-auto'>
                <h1 className='font-bold text-3xl dark:text-white text-textBold mb-3'>Services & Pricings</h1>
                <p className='text font-light'>This is my service breakdown. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. I'm taking on freelance work at the moment. Want some help building your software?</p>
                <Button className='bg-sidebar_green text-white border-border_green mt-5' type="submit" action={goToContact}>
                    Hire me
                </Button>
            </div>
            <div className='w-full mt-20'>
              <table className='w-full border-collapse border-[1.3px]'>
                  <thead>
                    <tr className='border-[1.3px] h-12 text-center'>
                    <td className='px-2  border-r-[1.3px] bg-card_bg dark:bg-dark-card_bg'></td>
                      <td className='px-2 border-r-[1.3px]'>Basic</td>
                      <td className='px-2 border-r-[1.3px]'>Standard</td>
                      <td className='px-2 border-r-[1.3px]'>Premium</td>
                    </tr>
                  </thead>
                  <tbody className='font-light text-sm'>
                    <tr>
                      <td className='px-2 border-r-[1.3px] h-20  bg-card_bg dark:bg-dark-card_bg w-[450px] font-semibold'>Package Price (negotiable)</td>
                      <td className='px-2  border-r-[1.3px] h-20 text-2xl font-bold'>$10/hr</td>
                      <td className='px-2  border-r-[1.3px] h-20 text-2xl font-bold'>$20/hr</td>
                      <td className='px-2  border-r-[1.3px] h-20 text-2xl font-bold'>$50/hr</td>
                    </tr>
                    <tr>
                      <td className='px-2  border-r-[1.3px] h-20  bg-card_bg dark:bg-dark-card_bg font-semibold'>Development Hours</td>
                      <td className='px-2  border-r-[1.3px] h-20'>Up to 10 hours of work per week</td>
                      <td className='px-2  border-r-[1.3px] h-20'>Up to 20 hours of work per week</td>
                      <td className='px-2  border-r-[1.3px] h-20'>Full time availability</td>
                    </tr>
                    <tr>
                      <td className='px-2  border-r-[1.3px] h-20  bg-card_bg dark:bg-dark-card_bg'>Project Type</td>
                      <td className='px-2  border-r-[1.3px] h-20'>Bug fixes, enhancements, adding minor new features</td>
                      <td className='px-2  border-r-[1.3px] h-20'>Mid sized features to full application development</td>
                      <td className='px-2  border-r-[1.3px] h-20'>Full application development</td>
                    </tr>
                    <tr>
                      <td className='px-2  border-r-[1.3px] h-20  bg-card_bg dark:bg-dark-card_bg'>Support</td>
                      <td className='px-2  border-r-[1.3px] h-20'>Basic email support (48h response)</td>
                      <td className='px-2  border-r-[1.3px] h-20'>Priority email support(24h response)</td>
                      <td className='px-2  border-r-[1.3px] h-20'>Full time dedicated support</td>
                    </tr>
                    <tr>
                      <td className='px-2  border-r-[1.3px] h-20  bg-card_bg dark:bg-dark-card_bg'>Revisions</td>
                      <td className='px-2  border-r-[1.3px] h-20'>1 round revisions</td>
                      <td className='px-2  border-r-[1.3px] h-20'>2 round revisions</td>
                      <td className='px-2  border-r-[1.3px] h-20'>Unlimited revisions</td>
                    </tr>
                    <tr>
                      <td className='px-2  border-r-[1.3px] h-20  bg-card_bg dark:bg-dark-card_bg'>Delivery Time</td>
                      <td className='px-2  border-r-[1.3px] h-20'>2-4 weeks</td>
                      <td className='px-2  border-r-[1.3px] h-20'>1-3 weeks</td>
                      <td className='px-2  border-r-[1.3px] h-20'>Based on need</td>
                    </tr>
                    <tr>
                      <td className='px-2  border-r-[1.3px] h-20  bg-card_bg dark:bg-dark-card_bg'>Consultation</td>
                      <td className='px-2  border-r-[1.3px] h-20'>One 30 min consultation</td>
                      <td className='px-2  border-r-[1.3px] h-20'>one 1-hour consultation</td>
                      <td className='px-2  border-r-[1.3px] h-20'>Unlimited consultaion sessions</td>
                    </tr>
                    <tr>
                      <td className='px-2  border-r-[1.3px] h-20  bg-card_bg dark:bg-dark-card_bg'>Remote/On-site</td>
                      <td className='px-2  border-r-[1.3px] h-20'>Remote only</td>
                      <td className='px-2  border-r-[1.3px] h-20'>Remote with occasional video calls</td>
                      <td className='px-2  border-r-[1.3px] h-20'>Full remote with live collaboration sessions</td>
                    </tr>
                    <tr>
                      <td className='px-2  border-r-[1.3px] h-20  bg-card_bg dark:bg-dark-card_bg'>Project management tools</td>
                      <td className='px-2  border-r-[1.3px] h-20'>Email communication</td>
                      <td className='px-2  border-r-[1.3px] h-20'>Email & project management tools (e.g. Trello)</td>
                      <td className='px-2  border-r-[1.3px] h-20'>Full management via PM tools (slack, Jira, Azure for developers etc)</td>
                    </tr>
                  </tbody>
              </table>   
            </div>
            <div className='mt-20'>
              <div className='text-center  w-[60%] mx-auto'>
              <h1>FAQs</h1>
              <p className='text-textLight dark:text-dark-textLight text-sm font-light'>In case of further clarifications and help, the following questions further speaks into the above services. If still not clear <a className='text-sidebar_green hover:underline' href="/contact">contact me</a> </p>
              </div>
              <div className='mt-10'>
                {
                  faqs.map((item, i) => (
                    <Accordions key={i} question={item.question}  answer={item.answer}/>
                   
                  ))
                }
              </div>
            </div>
            <div className='mt-16'>
              <HireMe />
            </div>
        </div>
    </Layout>
  )
}

export default Service
