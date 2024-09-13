import React, { useState } from 'react'
import Layout from '../../_layout.tsx'
import { ListItems } from '../../constant.js'
import Button from '../../components/atoms/Button.tsx';
import Tiptap from '../../components/TipTap.tsx';


const WriteBlog = () => {

    const [isUp, setIsUp] = useState(0);
    const [formData, setFormData] = useState({
        title: "",
        img: "",
        blogtype: "",
        content: ""
    })
    const animateUp = (num: number) => {
        setIsUp(num)
    }
    const animateDown = () => {
       setTimeout(() => {
        setIsUp(0)
       }, 2000);
    }

    const handleChange = (e: any) => {
        const {name, value} = e.target;
        if(name == "file"){

        }
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleContentChange = (content: string) => {
        setFormData({
            ...formData,
            content,
        });
    };

    const submitForm = (e: any) => {
        e.preventDefault();
        console.log(formData)
    }
  return (
    <Layout theme={false}>
        <div className='container_all'>
            <form>
                <h1 className='font-bold text-3xl dark:text-white text-textBold mb-3'>New Blog post</h1>
                <div className='flex items-center gap-4 mt-12'>
                    <div className='w-[35%] text-textLight dark:text-dark-textLight'>
                        <select className='w-full border-[1px] border-gray-100 py-3 px-1 cursor-pointer' name="" id="">
                            {
                                ListItems.map((item) => (
                                    <option className=' cursor-pointer' key={item.id} value={item.title}>{item.title.toLowerCase() === "all" ? "Select Blog Type" : item.title}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div className='mt-10 flex flex-col gap-10 leading-relaxed tracking-widest'>
                    <div className='flex flex-col gap-2  group'>
                        <label className={`${isUp === 1 ? " -translate-y-4" : "translate-y-0"} transition-all ease-in-out duration-300`} htmlFor="title">Title</label>
                        <input value={formData.title} name="title" onChange={handleChange} onKeyDown={() => animateUp(1)} onKeyUp={animateDown} className='border-b-[1.4px] border-gray-200 outline-none' type="text" id="title" placeholder='Title goes here...' />
                    </div>
                    <div className='flex flex-col gap-2 leading-relaxed tracking-widest group'>
                        <label className={`${isUp === 2 ? " -translate-y-4" : "translate-y-0"} transition-all ease-in-out duration-300`} htmlFor="title">Blog Header</label>
                        <input value={formData.img} name="img" onChange={handleChange}  type="file" id="title" className='text-textLight dark:text-dark-textLight text-sm' />
                    </div>
                    <div className='flex flex-col gap-2 leading-relaxed tracking-widest group'>
                        <label className={`${isUp === 3 ? " -translate-y-4" : "translate-y-0"} transition-all ease-in-out duration-300`} htmlFor="title">Blog</label>
                        <Tiptap description={formData.content} onChange={handleContentChange} name="content" />
                    </div>
                    <div>
                    <Button className='bg-sidebar_green text-white border-border_green mt-5' type="submit" action={submitForm}>
                    Post Blog
                </Button>
                    </div>
                </div>
            </form>
        </div>
    </Layout>
  )
}

export default WriteBlog
