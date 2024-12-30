export interface Analysis {
  searchability: number;
  hardSkills: {
    matched: string[];
    missing: string[];
  };
  softSkills: {
    matched: string[];
    missing: string[];
  };
  recruiterTips: string[];
  formattingIssues: string[];
}

export interface UploadState {
  resume: File | null;
  jobDescription: string;
}
