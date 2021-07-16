import React from 'react';
import styles from './styles/Showcase.module.css';
import { useState } from 'react';
import {Category} from './Box'

import {
  TimelineItemData,
  experience,
} from './data';

// export enum Category {
//   Experience = 'Experience',
//   Project = 'Project'
// }

type FilterOption = 'All' | Category;

const COLOUR: {[key in FilterOption]: string} = {
  All: '#8B2635',
  [Category.Experience]: '#6C91C2',
  [Category.Project]: '#BE95C4',
};

const Showcase = () => {
  const [filter, setFilter] = useState<FilterOption>('All');

  return (
    <section className={styles.Experience}>
      <div className={styles.FilterControl}>
        {Object.entries(COLOUR).map(([category, colour]) => {
          return (
            <button
              type="button"
              style={{color: colour}}
              className={`${styles.FilterButton} ${
                filter === category ? styles.active : ''
              }`}
              onClick={() => setFilter(category as FilterOption)}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div>
        {experience.map(
          ({
            title,
            duration,
            category,
            languages,
            description
          }: TimelineItemData) => {
            if (filter !== 'All' && filter !== category) return null;

            
            let languagesButtons = null;
            if (languages) {
              languagesButtons = (
                <div className={styles.Language} style={{ backgroundColor: COLOUR[category]}}>
                  {languages.map((language) => {
                    return (
                      <div>{language}</div>
                    );
                  })}
                </div>
              );
            }

            return (
              <div className={styles.Outer}>
                <div className={styles.Box}>
                  <h4 className={styles.Duration}>{duration}</h4>
                  <div style={{backgroundColor: COLOUR[category]}} className={styles.Category} />
                  <div className={styles.TextContainer}>
                    <div className={styles.Title}>{title}</div>
                    <div>{languagesButtons}</div>
                    <div>
                      {description.map((point) => {
                       return <p>◦ {point}</p>
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          },
        )}
      </div>
    </section>
  );
};

export default Showcase;