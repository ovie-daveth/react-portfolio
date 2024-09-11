import React from 'react'
import Layout from '../../_layout.tsx'
import Button from '../../components/atoms/Button.tsx'
import HireMe from '../../components/HireMe.tsx'
import Accordions from '../../components/atoms/Accordions.tsx'


const Service = () => {

  const goToContact = () => {

  }
  return (
    <Layout theme={false}>
        <div className='container'>
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
                      <td className='px-2  border-r-[1.3px] h-20  bg-card_bg dark:bg-dark-card_bg'>Package Price</td>
                      <td className='px-2  border-r-[1.3px] h-20'>$500</td>
                      <td className='px-2  border-r-[1.3px] h-20'>$1000</td>
                      <td className='px-2  border-r-[1.3px] h-20'>$2000</td>
                    </tr>
                    <tr>
                      <td className='px-2  border-r-[1.3px] h-20  bg-card_bg dark:bg-dark-card_bg'>Basic</td>
                      <td className='px-2  border-r-[1.3px] h-20'>Basic</td>
                      <td className='px-2  border-r-[1.3px] h-20'>Basic</td>
                      <td className='px-2  border-r-[1.3px] h-20'>Basic</td>
                    </tr>
                    <tr>
                      <td className='px-2  border-r-[1.3px] h-20  bg-card_bg dark:bg-dark-card_bg'>Basic</td>
                      <td className='px-2  border-r-[1.3px] h-20'>Basic</td>
                      <td className='px-2  border-r-[1.3px] h-20'>Basic</td>
                      <td className='px-2  border-r-[1.3px] h-20'>Basic</td>
                    </tr>
                    <tr>
                      <td className='px-2  border-r-[1.3px] h-20  bg-card_bg dark:bg-dark-card_bg'>Basic</td>
                      <td className='px-2  border-r-[1.3px] h-20'>Basic</td>
                      <td className='px-2  border-r-[1.3px] h-20'>Basic</td>
                      <td className='px-2  border-r-[1.3px] h-20'>Basic</td>
                    </tr>
                  </tbody>
              </table>   
            </div>
            <div className='mt-20'>
              <div className='text-center  w-[60%] mx-auto'>
              <h1>FAQs</h1>
              <p className='text-textLight dark:text-dark-textLight text-sm font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ab non hic ea rem perferendis nostrum saepe repellat perspiciatis ratione!</p>
              </div>
              <div className='mt-10'>
                {
                  [1,2,3,4,5,6].map((_, i) => (
                    <Accordions key={i} question='lorem ipsum dandan' answer='lorem lorem ipsum ipsaum rutim laran ipuy tyhh opsal kuma trum nao pawartyp oipytw gposiyu lorem lorem ipsum ipsaum rutim laran ipuy tyhh opsal kuma trum nao pawartyp oipytw gposiyu' />
                   
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
