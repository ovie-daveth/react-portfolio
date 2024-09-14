import React from 'react'
import { BsEye } from 'react-icons/bs'
import code from '../../assets/cssframe.jpg'
import css from "../../assets/frame.jpg"
import { useNavigate } from 'react-router-dom'


const ProjectCard = ({index}) => {

    const navigate = useNavigate();
    const gotoProjectDetails = (itemId: number) => {
        navigate(`/portfolio/${itemId}`);
        //window.location.replace(`//portfolio/${itemId}`);
    }
  return (
    <div className={`dark:bg-dark-card_bg bg-card_bg relative before:absolute before:left-0 before:right-0 before:top-0 before:h-full before:bg-transparent  hover:before:bg-black/30 hover:dark:before:bg-black/50 group transition-all before:transition-all before:ease-in-out before:duration-500`}>    
        <div className='w-full h-fit flex md:flex-row flex-col items-start gap-8'>
            <div className={`md:w-[40%] w-full h-full`}>
                <img className='object-cover w-full md:h-[300px] h-[200px]' src={index % 3 == 1 ? code : css} alt="" />
            </div>
            <div className='md:py-3 py-0 md:w-[50%] h-full'>
                <h3 className='dark:text-white underline text-textLight'>Project Heading</h3>
                <p className='text-sm mt-4  font-normal text-textLight dark:text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus accusamus nisi, consectetur voluptatem quibusdam.</p>
                <div className='font-extralight text mt-4 dark:text-gray-400 block'>
                    <p>Client: Frost Ai</p>
                </div>
            </div>
        </div>
        <button onClick={() => gotoProjectDetails(index)} className='hidden items-center gap-3 absolute md:top-[40%] top-[36%] lg:left-[50%] md:left-[18%] left-[40%] bg-border_green dark:bg-dark-sidebar py-2 px-4 rounded-lg text-white group-hover:flex hover:bg-border_green active:scale-95 transition_all'>
            <span className='text-xl'><BsEye /></span>
            <span className='text-sm hidden md:block'>View case study</span>
        </button>
    </div>
  )
}

export default ProjectCard