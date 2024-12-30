import { useState, useEffect } from 'react';
import { analyzeResume } from '../services/resumeAnalyzer';

const initialState = {
  loading: false,
  error: null,
  area: '',
  extracted_skills: '',
  industry: '',
  locations: '',
  predicted_title: '',
  roles: '',
  success: false
};

export function useResumeAnalysis(file) {
  const [analysis, setAnalysis] = useState(initialState);

  useEffect(() => {
    if (!file) return;

    const analyze = async () => {
      setAnalysis(prev => ({ ...prev, loading: true, error: null }));
      
      try {
        const result = await analyzeResume(file);
        setAnalysis(prev => ({ 
          ...prev,
          ...result,
          loading: false 
        }));
      } catch (error) {
        setAnalysis(prev => ({ 
          ...prev,
          loading: false,
          error: error instanceof Error ? error.message : 'Failed to analyze resume'
        }));
      }
    };

    analyze();
  }, [file]);

  return analysis;
}
