import React from 'react'
import { BsEye } from 'react-icons/bs'
import code from '../../assets/cssframe.jpg'
import css from "../../assets/frame.jpg"


const ProjectCard = ({index}) => {
  return (
    <div className={`dark:bg-dark-card_bg bg-card_bg h-[200px] relative before:absolute before:left-0 before:right-0 before:top-0 before:h-full before:bg-transparent  hover:before:bg-black/30 hover:dark:before:bg-black/50 group transition-all before:transition-all before:ease-in-out before:duration-500`}>    
        <div className='w-full h-full flex items-start gap-8'>
            <div className={` h-full w-[40%]`}>
                <img className='object-cover w-full h-full' src={index % 3 == 1 ? code : css} alt="" />
            </div>
            <div className='py-3 w-[50%]'>
                <h3 className='dark:text-white underline text-textLight'>Project Heading</h3>
                <p className='text-sm mt-4 font-normal text-textLight dark:text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus accusamus nisi, consectetur voluptatem quibusdam.</p>
                <div className='font-extralight text-sm mt-4 dark:text-gray-400'>
                    <p>Client: Frost Ai</p>
                </div>
            </div>
        </div>
        <button className='hidden items-center gap-3 absolute top-[40%] left-[50%] bg-dark-card_bg dark:bg-dark-sidebar py-2 px-4 rounded-lg text-white group-hover:flex hover:bg-border_green active:scale-95 transition_all'>
            <span className='text-xl'><BsEye /></span>
            <span>View case study</span>
        </button>
    </div>
  )
}

export default ProjectCard