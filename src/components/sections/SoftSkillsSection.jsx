import React from 'react';
    import { Section } from './Section';

    export const SoftSkillsSection = ({ analysisData }) => {
      const skills = analysisData
        ? {
            identified: analysisData.identified || [],
            missing: analysisData.missing || [],
          }
        : { identified: [], missing: [] };

      return (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-6 flex items-center">
            Soft Skills
            <span className="ml-2 px-2 py-1 text-xs font-medium bg-yellow-600 text-white rounded">
              MEDIUM SCORE IMPACT
            </span>
          </h2>

          <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-6">
            <p className="text-yellow-800">
              <strong>Tip:</strong> Demonstrate soft skills through specific examples and achievements
              in your work experience.
            </p>
          </div>

          <Section
            title="Skills Analysis"
            items={[
              ...skills.identified.map((skill) => ({
                label: skill.skill,
                status: skill.strength === 'strong' ? 'success' : 'error',
                message: `Demonstrated skill: ${skill.skill} - ${skill.evidence || ''}`,
              })),
              ...skills.missing.map((skill) => ({
                label: skill.skill,
                status: skill.importance === 'high' ? 'error' : 'success',
                message: `Consider adding: ${skill.skill} - ${skill.suggestion || ''}`,
              })),
            ]}
          />
        </div>
      );
    };
