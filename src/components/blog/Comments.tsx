import { ArrowBigDown, ArrowRightSquare, Dot, FacebookIcon, Flag, Heart, Link2, Link2Icon, Linkedin, MessageCircle, MoveRight, ThumbsDown, ThumbsUp } from 'lucide-react'
import React, { useState } from 'react'
import { BsDash, BsFacebook, BsGithub, BsGoogle, BsPass, BsPersonAdd, BsPersonFillAdd, BsTwitter, BsTwitterX } from 'react-icons/bs'

const Comments = () => {

    const [active, setActive] = useState(1);
    const [follow, setFollow] = useState(true);
    const [isOpenLoginChoices, setIsOpenLoginhoices] = useState(false);
    const [isFavouritePost, setIsFavouritePost] = useState(false);
    const [isFavouriteComments, setIsFavouriteComments] = useState(false);
    const [isUnFavouriteComments, setUnIsFavouriteComments] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(0)

    const ChooseLogin = () => {
        setIsOpenLoginhoices(!isOpenLoginChoices)
    }

    const handleFavouritePost = () => {
        setIsFavouritePost(!isFavouritePost);
    }
    const handleFavouriteComment = () => {
        setIsFavouriteComments(!isFavouriteComments);
        setUnIsFavouriteComments(false);
    }
    const handleUnFavouriteComment = () => {
        setUnIsFavouriteComments(!isUnFavouriteComments);
        setIsFavouriteComments(false);
    }

    const handleActiveComments = (num: number) => {
        setActive(num)
    }
    const Collapse = (num: number) => {
        setIsCollapsed(num)
    }
  return (
    <div className='mt-10'>
        <div className='flex items-center justify-between border-b-[4px] pb-2 relative'>
                        <p>{1} Comment</p>
                        <button onClick={ChooseLogin} className='flex items-center gap-1 font-light group relative'>  
                            <span className='group-hover:underline'>Login</span>
                            <span><ArrowBigDown fill='black' size={16} /></span>
                        </button>
                        <div className={`${isOpenLoginChoices ? "flex":"hidden"} flex-col gap-5 absolute top-8 right-0 bg-white shadow-md drop-shadow-md px-3 py-3 border-2 border-black rounded-r-lg rounded-l-md font-normal`} style={{borderTopRightRadius: "20px", borderTopLeftRadius: "5px", borderBottomRightRadius: "20px",}}>
                                <button className='flex items-center gap-1'>
                                    <span><BsTwitterX /></span>
                                    <span>Twitter</span>
                                </button>
                                <button className='flex items-center gap-1'>
                                    <span><BsFacebook /></span>
                                    <span>Facebook</span>
                                </button>
                                <button className='flex items-center gap-1'>
                                    <span><BsGoogle /></span>
                                    <span>Google</span>
                                </button>
                                <button className='flex items-center gap-1'>
                                    <span><BsGithub /></span>
                                    <span>Github</span>
                                </button>
                        </div>
        </div>
        <div className='flex items-start gap-10 mt-7'>
            <div className='bg-sidebar_green text-white py-3 px-4 rounded-lg text-3xl'>
               <p>G</p>
            </div>
            <textarea className='border-[1px] w-full h-[100px] rounded-3xl px-5 py-3 font-light outline-none' name="" id="" placeholder='Join the discussion...'></textarea>
        </div>
        <div className='mt-12 font-light'>
            <div className='flex items-center justify-between mb-5'>
               <div className='flex items-center gap-4 '> 
                    <button onClick={handleFavouritePost}>
                        {
                            isFavouritePost ? <Heart color='red' fill="red" /> : <Heart color='gray' />
                        }
                    </button>
                    <div className='flex items-center group relative'><Dot /><span>Share</span>
                        <div className='absolute flex items-center gap-4 left-20 w-0 group-hover:w-[300px] transition_all overflow-hidden'>
                            <button className='hover:scale-95 transition_all'><BsTwitterX /></button>
                            <button className='hover:scale-95 transition_all'><BsFacebook color='green' size={22} /></button>
                            <button className='hover:scale-95 transition_all'><Linkedin color='blue' /></button>
                            <button className='hover:scale-95 transition_all'><Link2Icon color='gray' /></button>

                        </div>
                    </div>
               </div>
               <div className='flex items-center gap-2'>
                    <span onClick={() => handleActiveComments(1)} className={`border-b-[2px] cursor-pointer ${active === 1 ? "border-sidebar_green text-sidebar_green":"border-transparent"}`}>Best</span>
                    <span onClick={() => handleActiveComments(2)} className={`border-b-[2px] cursor-pointer ${active === 2 ? "border-sidebar_green text-sidebar_green":"border-transparent"}`}>Newest</span>
                    <span onClick={() => handleActiveComments(3)} className={`border-b-[2px] cursor-pointer ${active === 3 ? "border-sidebar_green text-sidebar_green":"border-transparent"}`}>Oldest</span>
               </div>
            </div>
            <div className={` items-start gap-3 mt-10 ${isCollapsed === 1 ? "hidden" : "flex"}`}>
                <div className='bg-sidebar_green text-white py-3 px-4 rounded-lg text-3xl'>
                <p>B</p>
                </div>
                <div className='flex items-start justify-between'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-1'>
                            <p className='text-sidebar_green font-semibold'>omokefeoviedavid</p>
                            <span className='font-bold text-xl'>
                                {
                                    follow ? <BsPersonFillAdd color='gray'/> : <BsPass />
                                }
                            </span>
                        </div>
                        <small className='-mt-2 text-[12px] font-normal'>2 years ago</small>
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam? Lorem ipsum dolor sit.</p>
                        <div className='flex items-center gap-3 mt-3'>
                            <button className='flex items-center gap-2 cursor-pointer' onClick={handleFavouriteComment}>
                                <span className=''>
                                    {
                                        isFavouriteComments ? <ThumbsUp size={19} fill="green" color='green' /> : <ThumbsUp size={19} />
                                    }
                                </span>
                                <small>0</small>
                            </button>
                            <button onClick={handleUnFavouriteComment} className='flex items-center gap-2'>
                                <span>
                                    {
                                        isUnFavouriteComments ? <ThumbsDown size={19} color='green' fill="green" /> : <ThumbsDown size={19} />
                                    }
                                </span>
                                <small>0</small>
                            </button>
                            <button className='flex items-center gap-2'>
                                Reply
                            </button>
                            <button className='flex items-center group relative'>
                                <span>Share</span>
                                <span><ArrowRightSquare size={14} /></span>
                                <div className='absolute flex items-center gap-4 left-20 w-0 group-hover:w-[300px] transition_all overflow-hidden'>
                            <button className='hover:scale-95 transition_all'><BsTwitterX /></button>
                            <button className='hover:scale-95 transition_all'><BsFacebook color='green' size={22} /></button>
                            <button className='hover:scale-95 transition_all'><Linkedin color='blue' /></button>
                            <button className='hover:scale-95 transition_all'><Link2Icon color='gray' /></button>
                        </div>
                            </button>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span onClick={() =>Collapse(1)} className='relative hover:text-textLight hover:dark:text-dark-textLight cursor-pointer group'>
                            <BsDash />
                            <small className='absolute -top-4 -left-6 text-[12px] hidden group-hover:block'>Collapsed</small>
                        </span>
                        <span className='relative hover:text-textLight hover:dark:text-dark-textLight cursor-pointer group'><Flag size={14} />
                        <small className='absolute -top-5 -left-2 text-[12px] hidden group-hover:block'>Flag</small>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Comments
