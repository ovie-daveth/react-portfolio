import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {ListItems} from "../../constant.js"
import BlogCard from '../HomePageComponents/BlogCard.tsx';

const BlogLists = () => {
  const [itemId, setItem] = useState(1);
  const [projects, setProjects] = useState([1, 2, 3, 4, 5, 6]);

  const selectCategory = (item: number) => {
    setItem(item);
    // Here, you might filter projects based on the category.
    setProjects([1, 2, 3, 4, 5, 6]); // Simulate reshuffling
  };

  return (
    <div>
      <div className='flex items-center justify-center mt-10 md:gap-10 gap-2 font-normal text-gray-400 dark:text-dark-textLight'>
        {ListItems.map((item) => (
          <button
            onClick={() => selectCategory(item.id)}
            key={item.id}
            className={`border-t-2 ${item.id === itemId ? 'border-sidebar_green' : 'border-transparent'} px-4 pt-2`}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className='grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-x-4 gap-y-5 mt-16'>
        <TransitionGroup component={null}>
          {projects.map((project, index) => (
            <CSSTransition
              key={index}
              timeout={500}
              classNames='project'
            >
              <div>
                <BlogCard index={index} />
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </div>
  );
};

export default BlogLists;
