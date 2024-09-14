import React from 'react'
import Layout from '../../_layout.tsx'
import Button from '../../components/atoms/Button.tsx'
import HireMe from '../../components/HireMe.tsx'
import Accordions from '../../components/atoms/Accordions.tsx'
import { faqs, services } from '../../constant.js'
import { useNavigate } from 'react-router-dom'


const Service = () => {

  const nav = useNavigate();
  const goToContact = () => {
    nav("/contact")
  }
  return (
    <Layout theme={false}>
        <div className='xl:px-20 lg:pl-20 md:px-5 py-12 mt-10'>
            <div className='flex items-center justify-center flex-col text-center xl:w-[70%] lg:w-[90%] mx-auto'>
                <h1 className='font-bold md:text-3xl text-xl dark:text-white text-textBold mb-3'>Services & Pricings</h1>
                <p className='text-sm md:text-[16px] font-light'>This is my service breakdown. I offer flexible and scalable development services to suit a variety of project needs.</p>
                <p className='text-sm md:text-[16px] font-light hidden lg:block'>If you're looking for a reliable developer for your software projects, feel free to reach out—I’m currently available for freelance work.</p>
                <Button className='bg-sidebar_green text-white border-border_green mt-5' type="submit" action={goToContact}>
                    Hire me
                </Button>
            </div>
            <div className='xl:w-[70%] lg:w-[90%] w-ful mx-auto overflow-x-scroll mt-20'>
              <table className='md:w-full w-[200%] border-collapse md:border-[1.3px]'>
                  <thead>
                    <tr className='md:border-[1.3px] h-12 text-center'>
                    <td className='px-2  md:border-r-[1.3px] bg-card_bg dark:bg-dark-card_bg sticky top-0 left-0'></td>
                      <td className='px-2 md:border-r-[1.3px]'>Basic</td>
                      <td className='px-2 md:border-r-[1.3px]'>Standard</td>
                      <td className='px-2 md:border-r-[1.3px]'>Premium</td>
                    </tr>
                  </thead>
                  <tbody className='font-ligth text-sm'>
                    {services.map((row, index) => (
                        <tr key={index}>
                          <td className='px-2 md:border-r-[1.3px] h-20 bg-card_bg dark:bg-dark-card_bg font-semibold md:w-[30%] w-[22%] sticky top-0 left-0'>{row.header}</td>
                          {row.values.map((value, idx) => (
                            <td key={idx} className={`px-2 md:border-r-[1.3px] h-20  ${index === 0 ? "text-xl font-bold":"font-light"}`}>{value}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
              </table>   
            </div>
            <div className='mt-20 xl:w-[70%] lg:w-[90%] mx-auto'>
              <div className='text-center  md:w-[60%] mx-auto'>
              <h1>FAQs</h1>
              <p className='text-textLight dark:text-dark-textLight text-sm font-light'>In case of further clarifications and help, the following questions further speaks into the above services. If still not clear <a className='text-sidebar_green hover:underline' href="/contact">contact me</a> </p>
              </div>
              <div className='mt-10 '>
                {
                  faqs.map((item, i) => (
                    <Accordions key={i} question={item.question}  answer={item.answer}/>
                   
                  ))
                }
              </div>
            </div>
            <div className='mt-16 xl:w-[70%] lg:w-[90%] mx-auto'>
              <HireMe />
            </div>
        </div>
    </Layout>
  )
}

export default Service
