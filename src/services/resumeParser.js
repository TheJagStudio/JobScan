// Extract text content from resume file
export const extractResumeText = async (file) => {
  try {
    const text = await file.text();
    return text;
  } catch (error) {
    console.error('Resume parsing error:', error);
    throw new Error('Failed to extract text from resume');
  }
};
