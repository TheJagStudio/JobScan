import React from 'react';
    import { Section } from './Section';

    export const FormattingSection = ({ analysisData }) => {
      const formatItems = () => {
        if (!analysisData) return [];
        
        return [
          {
            label: 'Structure Score',
            status: analysisData.structure.score > 70 ? 'success' : 'error',
            message: `Structure score: ${analysisData.structure.score}. Issues: ${analysisData.structure.issues.join(', ')}`
          },
          {
            label: 'ATS Compatibility Score',
            status: analysisData.atsCompatibility.score > 70 ? 'success' : 'error',
            message: `ATS Compatibility score: ${analysisData.atsCompatibility.score}. Issues: ${analysisData.atsCompatibility.issues.join(', ')}`
          },
          ...analysisData.improvements.map(improvement => ({
            label: improvement.area,
            status: 'error',
            message: `Current: ${improvement.current}. Recommendation: ${improvement.recommendation}`
          })),
          {
            label: 'Section Ordering',
            status: analysisData.sections.ordering.length > 0 ? 'success' : 'error',
            message: `Sections order: ${analysisData.sections.ordering.join(', ')}. Missing: ${analysisData.sections.missingRequired.join(', ')}`
          }
        ];
      };

      return (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-6">Formatting</h2>
          <Section
            title="Format Check"
            items={formatItems()}
          />
        </div>
      );
    };
