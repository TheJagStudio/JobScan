import React from 'react';
    import { MatchRate } from './MatchRate';
    import { useAIAnalysis } from '../hooks/useAIAnalysis';
    import { useResumeAnalysis } from '../hooks/useResumeAnalysis';

    export const SidebarStats = ({ uploadState }) => {
      const { data: aiAnalysis } = useAIAnalysis(uploadState?.resume, uploadState?.jobDescription);
      const { success: resumeSuccess } = useResumeAnalysis(uploadState?.resume);

      const calculateStats = () => {
        let totalIssues = 0;
        let totalSuccess = 0;
        let searchabilityPercentage = 0;
        let hardSkillsPercentage = 0;
        let softSkillsPercentage = 0;
        let recruiterTipsPercentage = 0;
        let formattingPercentage = 0;

        if (aiAnalysis) {
          // Searchability
          if (aiAnalysis.searchability) {
            searchabilityPercentage = aiAnalysis.searchability.score;
            totalIssues += aiAnalysis.searchability.improvements.length;
            totalSuccess += aiAnalysis.searchability.sections.contact.found.length + (aiAnalysis.searchability.sections.education.present ? 1 : 0) + (aiAnalysis.searchability.sections.experience.present ? 1 : 0) + (aiAnalysis.searchability.sections.skills.present ? 1 : 0);
          }

          // Hard Skills
          if (aiAnalysis.hardSkills) {
            hardSkillsPercentage = Math.round((aiAnalysis.hardSkills.matched.length / (aiAnalysis.hardSkills.matched.length + aiAnalysis.hardSkills.missing.length)) * 100) || 0;
            totalIssues += aiAnalysis.hardSkills.missing.length;
            totalSuccess += aiAnalysis.hardSkills.matched.length;
          }

          // Soft Skills
          if (aiAnalysis.softSkills) {
            softSkillsPercentage = Math.round((aiAnalysis.softSkills.identified.length / (aiAnalysis.softSkills.identified.length + aiAnalysis.softSkills.missing.length)) * 100) || 0;
            totalIssues += aiAnalysis.softSkills.missing.length;
            totalSuccess += aiAnalysis.softSkills.identified.length;
          }

          // Recruiter Tips
          if (aiAnalysis.recruiterTips) {
            recruiterTipsPercentage = Math.round((aiAnalysis.recruiterTips.recommendations.length / (aiAnalysis.recruiterTips.recommendations.length + aiAnalysis.recruiterTips.redFlags.length)) * 100) || 0;
            totalIssues += aiAnalysis.recruiterTips.redFlags.length;
            totalSuccess += aiAnalysis.recruiterTips.recommendations.length;
          }

          // Formatting
          if (aiAnalysis.formatting) {
            formattingPercentage = aiAnalysis.formatting.structure.score;
            totalIssues += aiAnalysis.formatting.structure.issues.length + aiAnalysis.formatting.atsCompatibility.issues.length + aiAnalysis.formatting.improvements.length;
            totalSuccess += aiAnalysis.formatting.sections.ordering.length + (aiAnalysis.formatting.sections.missingRequired.length > 0 ? 0 : 1);
          }
        }

        return {
          totalIssues,
          totalSuccess,
          searchabilityPercentage,
          hardSkillsPercentage,
          softSkillsPercentage,
          recruiterTipsPercentage,
          formattingPercentage,
        };
      };

      const {
        totalIssues,
        totalSuccess,
        searchabilityPercentage,
        hardSkillsPercentage,
        softSkillsPercentage,
        recruiterTipsPercentage,
        formattingPercentage,
      } = calculateStats();

      const totalMatchRate = Math.round((searchabilityPercentage + hardSkillsPercentage + softSkillsPercentage + recruiterTipsPercentage + formattingPercentage) / 5) || 0;

      return (
        <div className="space-y-6">
          <MatchRate percentage={totalMatchRate} />

          <div className="space-y-4">
            <StatItem label="Searchability" issues={aiAnalysis?.searchability ? aiAnalysis.searchability.improvements.length : 0} percentage={searchabilityPercentage} />
            <StatItem label="Hard Skills" issues={aiAnalysis?.hardSkills ? aiAnalysis.hardSkills.missing.length : 0} percentage={hardSkillsPercentage} />
            <StatItem label="Soft Skills" issues={aiAnalysis?.softSkills ? aiAnalysis.softSkills.missing.length : 0} percentage={softSkillsPercentage} />
            <StatItem label="Recruiter Tips" issues={aiAnalysis?.recruiterTips ? aiAnalysis.recruiterTips.redFlags.length : 0} percentage={recruiterTipsPercentage} />
            <StatItem label="Formatting" issues={aiAnalysis?.formatting ? aiAnalysis.formatting.structure.issues.length + aiAnalysis.formatting.atsCompatibility.issues.length + aiAnalysis.formatting.improvements.length : 0} percentage={formattingPercentage} />
          </div>
        </div>
      );
    };

    interface StatItemProps {
      label: string;
      issues: number;
      percentage: number;
    }

    const StatItem: React.FC<StatItemProps> = ({ label, issues, percentage }) => (
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">{label}</span>
          <span className="text-sm text-gray-500">{issues} issues to fix</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
