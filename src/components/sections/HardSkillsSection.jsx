import React from 'react';
    import { Section } from './Section';

    export const HardSkillsSection = ({ analysisData }) => {
      const skills = analysisData
        ? {
            matched: analysisData.matched || [],
            missing: analysisData.missing || [],
          }
        : { matched: [], missing: [] };

      return (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-6 flex items-center">
            Hard Skills
            <span className="ml-2 px-2 py-1 text-xs font-medium bg-blue-600 text-white rounded">
              HIGH SCORE IMPACT
            </span>
          </h2>

          <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-6">
            <p className="text-blue-800">
              <strong>Tip:</strong> Match the skills in your resume to the exact spelling in the job
              description. Prioritize skills that appear most frequently.
            </p>
          </div>

          <Section
            title="Skills Analysis"
            items={[
              ...skills.matched.map((skill) => ({
                label: skill.skill,
                status: 'success',
                message: `Found skill: ${skill.skill} - ${skill.context || ''}`,
              })),
              ...skills.missing.map((skill) => ({
                label: skill.skill,
                status: 'error',
                message: `Missing skill: ${skill.skill} - ${skill.requirement || ''}`,
              })),
            ]}
          />
        </div>
      );
    };
