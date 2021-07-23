import {ReactNode} from 'react';

export enum Category {
  Work = 'Work',
  Project = 'Project'
}

export type TimelineItemData = {
  title: string;
  subtitle: string;
  duration: string;
  category: Category;
  languages?: string[];
  description: ReactNode[];
};

const experience: TimelineItemData[] = [
  {
    title: 'Shopify - Shop App',
    subtitle: 'Mobile Developer',
    duration: 'may 2021 - present',
    category: Category.Work,
    languages: [
      'react native',
      'typescript',
      'graphql'
    ],
    description: [
      'Implementing features on the in-app marketplace on the Shop App using React Native'
    ]
  },
  {
    title: 'Canadian Undergrad Tech Conference (CUTC) - Tech Team',
    subtitle: 'Frontend and Backend Developer',
    duration: 'sept 2020 - present',
    category: Category.Project,
    languages: [
      'vue',
      'php',
      'javascript'
    ],
    description: [
      'Implementing features on the in-app marketplace on the Shop App using React Native'
    ]
  },
  {
    title: 'Carleton University - Discrete Structures',
    subtitle: 'Teaching Assistant',
    duration: 'may 2021 - june 2021',
    category: Category.Work,
    description: [
      'Utilized a variety of teaching methods to aid students in learning discrete mathematics 1',
      'Answered questions in class forums and office hours about student work, and ensured students understood why theorems worked the way it did and what to expect to occur if they made changes.',
      'Used a variety of teaching methods to ensure the students understood the material, which increased the efficacy of weekly office hours',
      'Corrected assignments and tests with a great attention to detail in a timely manner so assignments can be returned to students promptly'
    ]
  },
  {
    title: 'Shopify - Orders & Fulfillments',
    subtitle: 'Backend Developer',
    duration: 'may 2020 - may 2021',
    category: Category.Work,
    description: [
      'Modelled database objects for fulfillments and orders in SQL',
      'Implemented features in internal applications using GraphQL models and queries and a front-end/back-end components using Ruby and Rails',
      'Provided input to technical design documents and during sprint planning meetings and reviewed pull requests, pushing more quality code to production'
    ]
  },
];

export {experience};
