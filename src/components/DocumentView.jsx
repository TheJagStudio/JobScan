import React from 'react';

export const DocumentView = ({ uploadState }) => {
  return (
    <div className="grid grid-cols-1 gap-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Resume</h2>
        {uploadState.resume && (
          <iframe
            src={URL.createObjectURL(uploadState.resume)}
            className="w-full h-[800px]"
            title="Resume Preview"
          />
        )}
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Job Description</h2>
        <div className="prose max-w-none">
          <pre className="whitespace-pre-wrap font-sans">
            {uploadState.jobDescription}
          </pre>
        </div>
      </div>
    </div>
  );
};
