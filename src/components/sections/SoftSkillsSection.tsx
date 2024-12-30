import React from 'react';
import { Section } from './Section';

export const SoftSkillsSection = () => (
  <div className="mb-8">
    <h2 className="text-xl font-semibold mb-6 flex items-center">
      Soft Skills
      <span className="ml-2 px-2 py-1 text-xs font-medium bg-yellow-600 text-white rounded">
        MEDIUM SCORE IMPACT
      </span>
    </h2>
    
    <p className="text-gray-600 mb-6">
      Soft skills are your traits and abilities that are not unique to any job. Your soft skills are 
      part of your personality, and can be learned also. These skills are the traits that typically 
      make you a good employee for any company such as time management and communication. Soft skills 
      have a medium impact on your match score.
    </p>
    
    <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-6">
      <p className="text-yellow-800">
        <strong>Tip:</strong> Prioritize hard skills in your resume to get interviews, and then 
        showcase your soft skills in the interview to get jobs.
      </p>
    </div>

    <Section
      title="Missing Soft Skills"
      items={[
        {
          label: 'Leadership',
          status: 'error',
          message: 'Consider adding "Leadership" to your resume if you have this skill.',
        },
        {
          label: 'Communication',
          status: 'success',
          message: 'Great! We found "Communication" in your resume.',
        },
      ]}
    />
  </div>
);
