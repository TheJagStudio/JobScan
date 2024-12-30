import React from 'react';
import { FileUpload } from '../components/FileUpload';
import { JobDescription } from '../components/JobDescription';
import type { UploadState } from '../types';
import type { AnalysisState } from '../types/api';

interface InputPageProps {
  uploadState: UploadState;
  setUploadState: React.Dispatch<React.SetStateAction<UploadState>>;
  onSubmit: () => void;
  analysis: AnalysisState;
}

export const InputPage: React.FC<InputPageProps> = ({ 
  uploadState, 
  setUploadState, 
  onSubmit,
  analysis 
}) => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Resume Scanner</h1>
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="grid grid-cols-1 gap-6 p-6">
          <div>
            <h2 className="font-medium text-gray-900 mb-4">Resume</h2>
            <FileUpload
              onFileSelect={(file) =>
                setUploadState((prev) => ({ ...prev, resume: file }))
              }
              selectedFile={uploadState.resume}
              onClearFile={() =>
                setUploadState((prev) => ({ ...prev, resume: null }))
              }
            />
            {analysis.loading && (
              <p className="mt-2 text-sm text-gray-600">Analyzing resume...</p>
            )}
            {analysis.error && (
              <p className="mt-2 text-sm text-red-600">{analysis.error}</p>
            )}
            {analysis.success && (
              <div className="mt-4 p-4 bg-gray-50 rounded-md">
                <h3 className="font-medium text-gray-900 mb-2">Analysis Results</h3>
                <p className="text-sm text-gray-600">Predicted Title: {analysis.predicted_title}</p>
                <p className="text-sm text-gray-600">Area: {analysis.area}</p>
                <p className="text-sm text-gray-600">Skills: {analysis.extracted_skills}</p>
              </div>
            )}
          </div>
          <div>
            <h2 className="font-medium text-gray-900 mb-4">Job Description</h2>
            <JobDescription
              value={uploadState.jobDescription}
              onChange={(value) =>
                setUploadState((prev) => ({ ...prev, jobDescription: value }))
              }
            />
          </div>
        </div>
      </div>
      <button
        onClick={onSubmit}
        disabled={!uploadState.resume || !uploadState.jobDescription || analysis.loading}
        className="w-full py-3 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        {analysis.loading ? 'Analyzing...' : 'Analyze Resume'}
      </button>
    </div>
  );
};
