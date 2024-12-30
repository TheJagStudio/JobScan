import React from 'react';
import { Section } from './Section';

export const SummarySection = () => (
  <Section
    title="Summary"
    items={[
      {
        label: 'Summary Content',
        status: 'success',
        message: 'We found a summary section on your resume. Good job! The summary provides a quick ' +
                'overview of the candidate\'s qualifications, helping recruiters and hiring managers ' +
                'promptly grasp the value the candidate can offer in the position.',
      },
    ]}
  />
);
