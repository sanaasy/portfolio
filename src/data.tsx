/* eslint-disable react/jsx-key */

import React, {ReactNode} from 'react';
import {Category} from './Box'

export type TimelineItemData = {
  title: string;
  category: Category;
};

const experience: TimelineItemData[] = [
  {
    title: 'Shopify - Checkout',
    category: Category.Work,
  },
  {
    title: 'Shopify - Checkou23e32rt',
    category: Category.Project,
  }
];

export {experience};
