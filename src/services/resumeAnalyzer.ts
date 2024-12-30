export async function analyzeResume(file: File): Promise<ResumeAnalysis> {
  const formData = new FormData();
  formData.append('resume', file);

  const response = await fetch(
    'https://thejagstudio-resume-title-predictor.hf.space/predict',
    {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': '*/*',
        'X-Requested-With': 'XMLHttpRequest'
      }
    }
  );

  if (!response.ok) {
    throw new Error('Failed to analyze resume');
  }

  return response.json();
}
