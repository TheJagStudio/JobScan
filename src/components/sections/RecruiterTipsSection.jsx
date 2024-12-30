import React from 'react';
    import { Section } from './Section';

    export const RecruiterTipsSection = ({ analysisData }) => {
      const items = analysisData
        ? [
            {
              label: 'First Impression',
              status: analysisData.firstImpression.score > 7 ? 'success' : 'error',
              message: `First impression score: ${analysisData.firstImpression.score}. Strengths: ${analysisData.firstImpression.strengths.join(', ')}. Weaknesses: ${analysisData.firstImpression.weaknesses.join(', ')}`,
            },
            ...analysisData.recommendations.map(recommendation => ({
              label: recommendation.area,
              status: recommendation.priority === 'high' ? 'error' : 'success',
              message: `Recommendation: ${recommendation.suggestion}`
            })),
            ...analysisData.redFlags.map(redFlag => ({
              label: redFlag.issue,
              status: redFlag.severity === 'high' ? 'error' : 'success',
              message: `Red flag: ${redFlag.issue}. Solution: ${redFlag.solution}`
            }))
          ]
        : [];

      return (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-6">Recruiter Tips</h2>
          <Section title="Professional Recommendations" items={items} />
        </div>
      );
    };
