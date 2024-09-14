import React from 'react'
import ProjectCard from './ProjectCard.tsx'
import Button from '../atoms/Button.tsx'
import { BsArrowRightCircleFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';

const FeatureProjects = () => {

    const nav = useNavigate();
    const goToPortfolio = () => {
      nav("/portfolio")
    }

  return (
    <div className='container_all'>
      <div className='flex flex-col justify-center'> 
        <h1 className='header hidden md:block'>Featured Project</h1>
        <div className='md:mt-16 grid md:grid-cols-2 gap-x-8 gap-y-6 px-2 md:px-[unset]'>
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
