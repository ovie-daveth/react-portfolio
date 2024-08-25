import React from 'react'
import ProjectCard from './ProjectCard.tsx'
import Button from '../atoms/Button.tsx'
import { BsArrowRightCircle, BsArrowRightCircleFill } from 'react-icons/bs'

const FeatureProjects = () => {

    const goToPortfolio = () => {

    }
  return (
    <div className='container'>
      <div className='flex flex-col justify-center'> 
        <h1 className='header'>Featured Project</h1>
        <div className='mt-16 grid grid-cols-2 gap-x-8 gap-y-6'>
            {
                [Array(1,2,3,4,5,).map((_, i) => (
                    <ProjectCard key={i} index={i} />
                ))]
            }
        </div>
       <div className='mt-10 flex items-center  justify-center '>
            <Button type="button" className='bg-sidebar_green border-border_green dark:border-border_green text-white w-fit' action={goToPortfolio}>
                <span className='text-lg'><BsArrowRightCircleFill /></span>
                <span>View Portfolio</span>
            </Button>
       </div>
      </div>
    </div>
  )
}

export default FeatureProjects
