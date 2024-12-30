import React from 'react';
import { ContactSection } from './sections/ContactSection';
import { SummarySection } from './sections/SummarySection';
import { SectionHeadings } from './sections/SectionHeadings';
import { HardSkillsSection } from './sections/HardSkillsSection';
import { SoftSkillsSection } from './sections/SoftSkillsSection';
import { RecruiterTipsSection } from './sections/RecruiterTipsSection';
import { FormattingSection } from './sections/FormattingSection';

export const ScanResults = () => {
  return (
    <div className="space-y-6">
      {/* Searchability Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-6 flex items-center">
          Searchability
          <span className="ml-2 px-2 py-1 text-xs font-medium bg-gray-700 text-white rounded">
            IMPORTANT
          </span>
        </h2>
        
        <p className="text-gray-600 mb-6">
          Applicant Tracking Systems (ATS) are computers that process your resume to understand your work
          history and relevance to the job description. These findings typically include your work history,
          job titles, relevant skills and education, as well as contact information.
        </p>

        <ContactSection />
        <SummarySection />
        <SectionHeadings />
      </div>

      {/* Hard Skills Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <HardSkillsSection />
      </div>

      {/* Soft Skills Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <SoftSkillsSection />
      </div>

      {/* Recruiter Tips Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <RecruiterTipsSection />
      </div>

      {/* Formatting Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <FormattingSection />
      </div>
    </div>
  );
};
