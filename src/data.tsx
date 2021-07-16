import {ReactNode} from 'react';
import {Category} from './Box'

export type TimelineItemData = {
  title: string;
  duration: string;
  category: Category;
  languages?: string[];
  description: ReactNode[];
};

const experience: TimelineItemData[] = [
  {
    title: 'CARD 1',
    duration: 'jan 2019 - present',
    category: Category.Experience,
    languages: [
      'link',
    ],
    description: [
      'a',
      'b',
      'a',
      'b',
      'a'
    ]
  },
  {
    title: 'CARD 2',
    duration: 'jan 2019 - present',
    category: Category.Project,
    languages: [
      'link',
    ],
    description: [
      'a',
      'b',
      'a',
      'b',
      'a'
    ]
  },
  {
    title: 'CARD 1',
    duration: 'jan 2019 - present',
    category: Category.Experience,
    languages: [
      'link',
    ],
    description: [
      'a',
      'b',
      'a',
      'b',
      'a'
    ]
  },
  {
    title: 'CARD 2',
    duration: 'jan 2019 - present',
    category: Category.Project,
    languages: [
      'link',
    ],
    description: [
      'a',
      'b',
      'a',
      'b',
      'a'
    ]
  },
  {
    title: 'CARD 1',
    duration: 'jan 2019 - present',
    category: Category.Experience,
    languages: [
      'link',
    ],
    description: [
      'a',
      'b',
      'a',
      'b',
      'a'
    ]
  },
  {
    title: 'CARD 2',
    duration: 'jan 2019 - present',
    category: Category.Project,
    languages: [
      'link',
    ],
    description: [
      'a',
      'b',
      'a',
      'b',
      'a'
    ]
  },
  {
    title: 'CARD 1',
    duration: 'jan 2019 - present',
    category: Category.Experience,
    languages: [
      'link',
    ],
    description: [
      'a',
      'b',
      'a',
      'b',
      'a'
    ]
  },
  {
    title: 'CARD 2',
    duration: 'jan 2019 - present',
    category: Category.Project,
    languages: [
      'link',
    ],
    description: [
      'a',
      'b',
      'a',
      'b',
      'a'
    ]
  }
];

export {experience};
