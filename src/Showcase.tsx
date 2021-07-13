import React from 'react';
import styles from './styles/Showcase.module.css';
import Box from './Box';
import { useState } from 'react';
import {Category} from './Box'
import { useEffect } from 'react';

type FilterOption = 'All' | Category;

import {
  TimelineItemData,
  experience,
} from './data';

const Showcase = () => {
  const [filter, setFilter] = useState<FilterOption>('All');

  return (
    <section>
      <button onClick={() => setFilter('All')}>all</button>
      <button onClick={() => setFilter(Category.Project as FilterOption)}>project</button>
      <button onClick={() => setFilter(Category.Work as FilterOption)}>work</button>
      <div>
        {experience.map(
          ({
            title,
            category,
          }: TimelineItemData) => {
            if (filter !== 'All' && filter !== category) return null;

            return (
              <div>
                {/* <h3>{title}</h3> */}
                <Box title={title} duration="jan 2019" category={category}/>
              </div>
            );
          },
        )}
      </div>
      {/* <div style={{padding: '2%'}}>
        <Box title="hello" duration="jan 2019" category={Category.Work}/>
      </div> */}
      
    </section>
  );
};

export default Showcase;