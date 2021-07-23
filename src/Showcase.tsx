import React from 'react';
import styles from './styles/Showcase.module.css';
import { useState } from 'react';

import {
  TimelineItemData,
  experience,
  Category
} from './data';

type FilterOption = 'All' | Category;

const COLOUR: {[key in FilterOption]: string} = {
  All: '#8B2635',
  [Category.Work]: '#6C91C2',
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
            subtitle,
            duration,
            category,
            languages,
            description
          }: TimelineItemData) => {
            if (filter !== 'All' && filter !== category) return null;

            
            let languagesButtons = null;
            if (languages) {
              languagesButtons = (
                <div>
                  {languages.map((language) => {
                    return (
                      <div className={styles.Language} style={{ backgroundColor: COLOUR[category]}}>{language}</div>
                    );
                  })}
                </div>
              );
            }

            return (
              <div className={styles.Outer}>
                <div className={styles.Box}>
                  {/* <h4 className={styles.Duration}>{duration}</h4> */}
                  <div style={{backgroundColor: COLOUR[category]}} className={styles.Category} />
                  <div className={styles.TextContainer}>
                    <div className={styles.Title}>{title}</div>
                    <div className={styles.Subtitle}>{subtitle} / {duration}</div>
                    {languagesButtons}
                    { (languagesButtons !== null) ? <br/> : '' }
                    {description.map((point) => {
                      return <p>◦ {point}</p>
                    })}
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