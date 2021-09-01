import {ReactNode} from 'react';

export enum Category {
  Work = 'Work',
  Project = 'Project',
  Experience = 'Experience'
}

type Link = {
  text: string;
  url: string;
}

export type TimelineItemData = {
  title: string;
  subtitle: string;
  duration: string;
  category: Category;
  languages?: string[];
  link?: Link;
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
    link: {
      text: 'CUTC 2021',
      url: 'https://cutc.ca/#/'
    },
    description: [
      'Created the Canadian Undergrad Tech Conference (CUTC) 2021 website using Vue, Javascript, PHP and HTML/CSS.',
      'Organized the online platform, Hopin, for an easy participant and speaker experience'
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
    languages: [
      'ruby on rails',
      'graphql',
      'sql'
    ],
    description: [
      'Modelled database objects for fulfillments and orders in SQL',
      'Implemented features in internal applications using GraphQL models and queries and a front-end/back-end components using Ruby and Rails',
      'Provided input to technical design documents and during sprint planning meetings and reviewed pull requests, pushing more quality code to production'
    ]
  },
  {
    title: 'Technovation - Ottawa Chapter',
    subtitle: 'Mentor',
    duration: 'jan 2020 - apr 2021',
    category: Category.Experience,
    description: [
      'Mentored 200+ young women ranging from ages 13 to 17',
      'Helped them with developing their coding skills to create a functional mobile application and their business skills (product pitches & marketing strategies',
    ]
  },
  {
    title: 'Royal Bank of Canada - Tech Labs',
    subtitle: 'Innovation Developer',
    duration: 'july 2019 - august 2019',
    category: Category.Work,
    languages: [
      'angularJS',
      'html/css',
      'jira'
    ],
    description: [
      'Designed and improved the User Interface of a proprietary Human Resources system (used by over 1700 RBC employees) by using AngularJS and HTML/CSS.',
      'Presented solutions in weekly demos and pitched a feature prototype (received the Recognition of Excellence on Demo Day award).',
    ]
  },
];

export {experience};
