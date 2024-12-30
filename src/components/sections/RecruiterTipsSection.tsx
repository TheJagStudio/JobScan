import React from 'react';
import { Section } from './Section';

export const RecruiterTipsSection = () => (
  <div className="mb-8">
    <h2 className="text-xl font-semibold mb-6">Recruiter Tips</h2>
    
    <Section
      title="Recommendations"
      items={[
        {
          label: 'Keywords',
          status: 'error',
          message: 'Include more industry-specific keywords from the job description.',
        },
        {
          label: 'Achievements',
          status: 'error',
          message: 'Add more quantifiable achievements to demonstrate your impact.',
        },
        {
          label: 'Experience',
          status: 'success',
          message: 'Your experience section is well-structured with clear progression.',
        },
      ]}
    />
  </div>
);
