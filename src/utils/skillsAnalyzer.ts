export const commonHardSkills = [
  'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Java', 'AWS', 
  'Docker', 'Kubernetes', 'SQL', 'MongoDB', 'Git', 'CI/CD', 'REST API',
  'GraphQL', 'HTML', 'CSS', 'Redux', 'Vue.js', 'Angular'
];

export const commonSoftSkills = [
  'Communication', 'Leadership', 'Problem Solving', 'Team Work', 
  'Time Management', 'Critical Thinking', 'Adaptability', 'Project Management',
  'Creativity', 'Attention to Detail', 'Organization', 'Collaboration'
];

export const analyzeSkills = (text: string) => {
  const normalizedText = text.toLowerCase();
  
  const matchedHardSkills = commonHardSkills.filter(skill => 
    normalizedText.includes(skill.toLowerCase())
  );
  const missingHardSkills = commonHardSkills.filter(skill => 
    !normalizedText.includes(skill.toLowerCase())
  ).slice(0, 5); // Limit to top 5 missing skills

  const matchedSoftSkills = commonSoftSkills.filter(skill => 
    normalizedText.includes(skill.toLowerCase())
  );
  const missingSoftSkills = commonSoftSkills.filter(skill => 
    !normalizedText.includes(skill.toLowerCase())
  ).slice(0, 5);

  return {
    hardSkills: { matched: matchedHardSkills, missing: missingHardSkills },
    softSkills: { matched: matchedSoftSkills, missing: missingSoftSkills },
    searchability: Math.round((matchedHardSkills.length / commonHardSkills.length) * 100)
  };
};
