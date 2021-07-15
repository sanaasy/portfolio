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
    title: 'Shopify - Checkout',
    duration: 'jan 2019 - present',
    category: Category.Experience,
    languages: [
      'link',
    ],
    description: [
      'a',
      'b',
    ]
  },
  {
    title: 'Shopify - Checkou23e32rt',
    duration: 'jan 2019 - present',
    category: Category.Project,
    description: [
      'a',
      'b'
    ]
  }
];

export {experience};
