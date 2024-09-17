import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {ListItems} from "../../constant.js"
import BlogCard from '../HomePageComponents/BlogCard.tsx';
import {  collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase.js'

const range = (start: number, end: number) => {
  return Array.from({ length: end - start + 1 }, (_, i) => i + start);
};

interface Blog{
  id:string
  blogtype: string,
  content: string,
  img: string,
  title: string
}

const BlogLists = () => {
  const [itemId, setItem] = useState(1)
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [projects, setProjects] = useState<number[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "blogs"));
            const blogList: any[] = [];
            querySnapshot.forEach((doc) => {
                blogList.push({ id: doc.id, ...doc.data() });
            });
            setBlogs(blogList);
            console.log(blogList)
        } catch (error) {
            console.error("Error fetching blogs: ", error);
        }
    };

    fetchBlogs();
}, [db]);

  const selectCategory = (item: number) => {
    setItem(item);
    setProjects(range(1, blogs.length));
  };

  return (
    <div>
      <div className='flex items-center justify-center mt-10 md:gap-10 gap-4 font-normal text-gray-400 dark:text-dark-textLight text-sm md:text-[15px]'>
        {ListItems.map((item) => (
          <button
            onClick={() => selectCategory(item.id)}
            key={item.id}
            className={`border-t-2 ${item.id === itemId ? 'border-sidebar_green' : 'border-transparent'} md:px-4 pt-2`}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className='grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-x-4 gap-y-5 mt-16'>
        <TransitionGroup component={null}>
          {blogs.map((project, index) => (
            <CSSTransition
              key={index}
              timeout={500}
              classNames='project'
            >
              <div>
                <BlogCard data={project} index={index} />
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </div>
  );
};

export default BlogLists;
