import React from 'react';
import { Section } from './Section';

export const HardSkillsSection = () => (
  <div className="mb-8">
    <h2 className="text-xl font-semibold mb-6 flex items-center">
      Hard Skills
      <span className="ml-2 px-2 py-1 text-xs font-medium bg-blue-600 text-white rounded">
        HIGH SCORE IMPACT
      </span>
    </h2>
    
    <p className="text-gray-600 mb-6">
      Hard skills enable you to perform job-specific duties and responsibilities. You can learn hard 
      skills in the classroom, training courses, and on the job. These skills are typically focused 
      on teachable tasks and measurable abilities such as the use of tools, equipment, or software. 
      Hard skills have a high impact on your match score.
    </p>
    
    <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-6">
      <p className="text-blue-800">
        <strong>Tip:</strong> Match the skills in your resume to the exact spelling in the job 
        description. Prioritize skills that appear most frequently in the job description.
      </p>
    </div>

    <Section
      title="Missing Hard Skills"
      items={[
        {
          label: 'JavaScript',
          status: 'error',
          message: 'Add "JavaScript" to your resume to improve your match rate.',
        },
        {
          label: 'React',
          status: 'error',
          message: 'Add "React" to your resume to improve your match rate.',
        },
      ]}
    />
  </div>
);
