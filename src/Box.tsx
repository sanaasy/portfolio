import React from 'react';
import styles from './styles/Box.module.css';

export enum Category {
  Work = 'Work',
  Project = 'Project'
}

interface Props {
  title: string
  duration: string 
  category: Category
}

const Box = ({title, duration, category, ...props} : Props) => {
  return (
    <div className={styles.Outer}>
      <div className={styles.Box}>
        <p>{title}</p>
        <p>{duration}</p>
      </div>
    </div>
  );
};

export default Box;