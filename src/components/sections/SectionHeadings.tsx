import React from 'react';
import { Section } from './Section';

export const SectionHeadings = () => (
  <Section
    title="Section Headings"
    items={[
      {
        label: 'Education',
        status: 'success',
        message: 'We found the education section in your resume.',
      },
      {
        label: 'Experience',
        status: 'success',
        message: 'We found the work experience section in your resume.',
      },
    ]}
  />
);
