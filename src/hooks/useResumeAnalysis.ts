import { useState, useEffect } from 'react';
import { analyzeResume } from '../services/resumeAnalyzer';
import type { AnalysisState } from '../types/api';

const initialState: AnalysisState = {
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

export function useResumeAnalysis(file: File | null) {
  const [analysis, setAnalysis] = useState<AnalysisState>(initialState);

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
