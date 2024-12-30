import { generateAIResponse } from './aiTextGeneration';
import { generatePrompts } from './promptGenerators';

export const generateFullAnalysis = async (resumeText, jobDescription) => {
  try {
    // Run all analyses in parallel for better performance
    const [
      searchabilityAnalysis,
      hardSkillsAnalysis,
      softSkillsAnalysis,
      recruiterTipsAnalysis,
      formattingAnalysis
    ] = await Promise.all([
      generateAIResponse(generatePrompts.searchability(resumeText, jobDescription)),
      generateAIResponse(generatePrompts.hardSkills(resumeText, jobDescription)),
      generateAIResponse(generatePrompts.softSkills(resumeText, jobDescription)),
      generateAIResponse(generatePrompts.recruiterTips(resumeText, jobDescription)),
      generateAIResponse(generatePrompts.formatting(resumeText))
    ]);

    return {
      searchability: searchabilityAnalysis,
      hardSkills: hardSkillsAnalysis,
      softSkills: softSkillsAnalysis,
      recruiterTips: recruiterTipsAnalysis,
      formatting: formattingAnalysis
    };
  } catch (error) {
    console.error('Analysis Generation Error:', error);
    throw error;
  }
};
