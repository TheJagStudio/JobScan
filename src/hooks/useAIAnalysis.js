import { useState, useEffect } from 'react';
import { generateFullAnalysis } from '../services/analysisService';
import { extractResumeText } from '../services/resumeParser';

export const useAIAnalysis = (resumeFile, jobDescription) => {
	const [analysis, setAnalysis] = useState({
		loading: false,
		error: null,
		data: null
	});

	useEffect(() => {
		if (!resumeFile || !jobDescription) return;

		const fetchAnalysis = async () => {
			setAnalysis(prev => ({ ...prev, loading: true, error: null, data: null }));
			
			try {
				// First extract text from resume
				const resumeText = await extractResumeText(resumeFile);
				
				// Then generate analysis
				const result = await generateFullAnalysis(resumeText, jobDescription);
				setAnalysis({
					loading: false,
					error: null,
					data: result
				});
			} catch (error) {
				setAnalysis({
					loading: false,
					error: error.message || 'Failed to generate analysis',
					data: null
				});
			}
		};

		fetchAnalysis();
	}, [resumeFile, jobDescription]);

	return analysis;
};
