import React, { useEffect, useState } from 'react'
import Layout from '../../_layout.tsx'
import { ArrowLeft, ArrowRight, DeleteIcon, DotIcon, Edit, MessageCircle, QuoteIcon } from 'lucide-react'
import { BsDash } from 'react-icons/bs'
import Button from '../../components/atoms/Button.tsx'
import Comments from '../../components/blog/Comments.tsx'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase'
import { auth } from '../../firebase'; 
import { useParams } from 'react-router-dom'; 

const BlogDetails = () => {

    const [blog, setBlog] = useState<any>(null);
    const { blogId } = useParams<{ blogId: string }>()

   
    useEffect(() => {
        const fetchBlog = async () => {
            if (!blogId) return; // If blogId is not available, exit early

            console.log(blogId)

            const blogRef = doc(db, "blogs", blogId);
            try {
                const docSnap = await getDoc(blogRef);
                if (docSnap.exists()) {
                    setBlog(docSnap.data());
                    console.log("data", docSnap.data())
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Error fetching blog: ", error);
            }
        };

        fetchBlog();
    }, [blogId, db]);
  
    const handleNav = (direction: string) => {

    }

    const EditBlogButton = () => {

    }

    const DeleteBlogButton = () => {

    }
  return (
    <Layout theme={false}>
      <div className='container_all'>
            <div className='mx-auto xl:w-[85%] lg:w-[80%]  w-[90%]'>
                <div className='flex flex-col gap-0 '>
                   <div color='flex flex-row justify-between items-center'>
                    <h1 className='font-bold xl:text-3xl lg:text-2xl text-lg dark:text-white text-textBold mb-3'>{blog?.title}</h1>
                    <div className='flex'>
                        <Button type="button" className='p-1 text-sm' action={EditBlogButton}><span><Edit /></span><span>Edit</span></Button>
                        <Button type="button" className='p-1 text-sm' action={DeleteBlogButton}><span><DeleteIcon /></span><span>Delete</span></Button>
                    </div>
                   </div>
                    <div className='text-left font-light text-textLight dark:text-dark-textLight text-[12px] flex items-center -mt-2 justify-center'>
                        <span>Published 2 days ago</span>
                        <span><DotIcon /></span>
                        <span>5 min read</span>
                        <span><DotIcon /></span>
                        <a href='#' className=' hover:underline'>1 comments</a>
                    </div>
                </div>
                <div className='mt-6 text-center border-b'>
                {blog?.img && <img src={blog?.img} alt="Blog Header" className='w-full md:h-[400px]'  />} </div>
                <div className='text-center font-extralight mt-3 text-[11px]'>Image Credit: <a href="#" className='hover:underline'> made4dev.com (Premium Programming T-shirts)</a></div>
                <div className='font-light text-sm text-textLight dark:text-dark-textLight tracking-wider leading-loose mt-10' dangerouslySetInnerHTML={{ __html: blog?.content }} />
                <div className='flex w-full mt-10 '>
                    <Button type="button" className=' bg-sidebar_green border-border_green w-full flex items-center justify-between text-white ' action={() => handleNav("left")}>
                        <div className='flex items-center justify-between w-[50%]'>
                            <span><ArrowLeft /></span>
                            <span>Back</span>
                        </div>
                        <div></div>
                    </Button>
                    <Button type="button" className=' bg-sidebar_green border-border_green w-full flex items-center justify-between text-white' action={() => handleNav("right")}>
                        <div></div>
                        <div className='flex items-center justify-between w-[50%]'>
                            <span>Next</span>
                            <span><ArrowRight /></span>
                        </div>
                    </Button>
                </div>
                <Comments />
            </div>
      </div>
    </Layout>
  )
}

export default BlogDetails
