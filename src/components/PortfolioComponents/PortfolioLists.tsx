import React, { useState } from 'react';
import ProjectCard from '../HomePageComponents/ProjectCard.tsx';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ListItems } from '../../constant.js';

const PortfolioLists = () => {
  const [itemId, setItem] = useState(1);
  const [projects, setProjects] = useState([1, 2, 3, 4, 5, 6]);

  const selectCategory = (item: number) => {
    setItem(item);
    // Here, you might filter projects based on the category.
    setProjects([1, 2, 3, 4, 5, 6]); // Simulate reshuffling
  };

  return (
    <div>
      <div className='flex items-center justify-center mt-10 md:gap-10 px-5 md:px-[unset] font-normal text-gray-400 dark:text-dark-textLight'>
        {ListItems.map((item) => (
          <button
            onClick={() => selectCategory(item.id)}
            key={item.id}
            className={`border-t-2 ${item.id === itemId ? 'border-sidebar_green' : 'border-transparent'} md:px-4 px-2 pt-2 text-sm md:text-[16px] font-semibold`}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className='mt-8 grid md:grid-cols-2 lg:gap-x-8 gap-x-5 gap-y-6 px-2 md:px-[unset]'>
        {
          [Array(1,2,3,4,5,).map((_, i) => (
            <ProjectCard key={i} index={i} />
          ))]
        }
      </div>
    </div>
  );
};

export default PortfolioLists;
