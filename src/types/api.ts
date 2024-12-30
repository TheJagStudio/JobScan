export interface ResumeAnalysis {
  area: string;
  extracted_skills: string;
  industry: string;
  locations: string;
  predicted_title: string;
  roles: string;
  success: boolean;
}

export interface AnalysisState extends ResumeAnalysis {
  loading: boolean;
  error: string | null;
}
