import React, { ReactNode } from 'react';
import styles from './styles/Box.module.css';

export enum Category {
  Experience = 'Experience',
  Project = 'Project'
}

type LanguageBox = {
  language: string;
  colour: string;
}

const Box = ({language, colour} : LanguageBox) => {
  return (
    <div className={styles.Language} style={{ backgroundColor: colour}}>
      <div>{language}</div>
    </div>
  );
};

export default Box;