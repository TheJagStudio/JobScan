import React from 'react';
import { useState } from 'react';
import { Header } from './components/Header';
import { InputPage } from './pages/InputPage';
import { ReportPage } from './pages/ReportPage';
import { useResumeAnalysis } from './hooks/useResumeAnalysis';
import type { UploadState } from './types';

export default function App() {
  const [uploadState, setUploadState] = useState<UploadState>({
    resume: null,
    jobDescription: '',
  });
  const [showReport, setShowReport] = useState(false);
  const analysis = useResumeAnalysis(uploadState.resume);

  const handleSubmit = () => {
    if (uploadState.resume && uploadState.jobDescription) {
      setShowReport(true);
    }
  };

  const handleReset = () => {
    setUploadState({ resume: null, jobDescription: '' });
    setShowReport(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onReset={handleReset} />
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {!showReport ? (
          <InputPage 
            uploadState={uploadState} 
            setUploadState={setUploadState} 
            onSubmit={handleSubmit}
            analysis={analysis}
          />
        ) : (
          <ReportPage 
            uploadState={uploadState}
            analysis={analysis}
          />
        )}
      </main>
    </div>
  );
}
