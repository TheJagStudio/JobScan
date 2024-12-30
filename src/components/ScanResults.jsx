import React from 'react';
import { ContactSection } from './sections/ContactSection';
import { SummarySection } from './sections/SummarySection';
import { SectionHeadings } from './sections/SectionHeadings';
import { HardSkillsSection } from './sections/HardSkillsSection';
import { SoftSkillsSection } from './sections/SoftSkillsSection';
import { RecruiterTipsSection } from './sections/RecruiterTipsSection';
import { FormattingSection } from './sections/FormattingSection';

export const ScanResults = ({ loading, error, analysisData }) => {
	console.log(analysisData);
	if (loading) {
		return (
			<div className="flex items-center justify-center p-8">
				<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
				Error generating analysis: {error}
			</div>
		);
	}

	return (
		<div className="space-y-6">
			<div className="bg-white rounded-lg shadow p-6">
				<h2 className="text-xl font-semibold mb-6 flex items-center">
					Searchability
					<span className="ml-2 px-2 py-1 text-xs font-medium bg-gray-700 text-white rounded">
						IMPORTANT
					</span>
				</h2>
				
				<p className="text-gray-600 mb-6">
					Applicant Tracking Systems (ATS) are computers that process your resume to understand your work
					history and relevance to the job description.
				</p>

				<ContactSection analysisData={analysisData?.searchability} />
				<SummarySection analysisData={analysisData?.searchability} />
				<SectionHeadings analysisData={analysisData?.searchability} />
			</div>

			<div className="bg-white rounded-lg shadow p-6">
				<HardSkillsSection analysisData={analysisData?.hardSkills} />
			</div>

			<div className="bg-white rounded-lg shadow p-6">
				<SoftSkillsSection analysisData={analysisData?.softSkills} />
			</div>

			<div className="bg-white rounded-lg shadow p-6">
				<RecruiterTipsSection analysisData={analysisData?.recruiterTips} />
			</div>

			<div className="bg-white rounded-lg shadow p-6">
				<FormattingSection analysisData={analysisData?.formatting} />
			</div>
		</div>
	);
};
