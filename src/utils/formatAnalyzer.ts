export const analyzeFormatting = (fileName: string, fileSize: number) => {
  const issues: string[] = [];
  
  // File type check
  if (!fileName.toLowerCase().endsWith('.pdf')) {
    issues.push('Consider using PDF format for better ATS compatibility');
  }

  // File size check (max 5MB recommended)
  if (fileSize > 5 * 1024 * 1024) {
    issues.push('File size exceeds 5MB, consider optimizing the file');
  }

  // Add common formatting recommendations
  issues.push('Ensure consistent font usage throughout');
  issues.push('Use bullet points for better readability');
  issues.push('Keep resume length to 1-2 pages');

  return issues;
};
