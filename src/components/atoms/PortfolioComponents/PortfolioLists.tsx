import React, { useState } from 'react';
import ProjectCard from '../../HomePageComponents/ProjectCard.tsx';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListItems = [
  { id: 1, title: 'All' },
  { id: 2, title: 'Web App' },
  { id: 3, title: 'Mobile' },
  { id: 4, title: 'Backend' },
  { id: 5, title: 'Frontend' },
];

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
      <div className='flex items-center justify-center mt-10 gap-10 font-normal text-gray-400 dark:text-textLight'>
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
      <div className='grid grid-cols-2 gap-x-4 gap-y-5 mt-16'>
        <TransitionGroup component={null}>
          {projects.map((project, index) => (
            <CSSTransition
              key={index}
              timeout={500}
              classNames='project'
            >
              <div>
                <ProjectCard index={index} />
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </div>
  );
};

export default PortfolioLists;
