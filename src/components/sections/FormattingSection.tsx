import React from 'react';
import { Section } from './Section';

export const FormattingSection = () => (
  <div className="mb-8">
    <h2 className="text-xl font-semibold mb-6">Formatting</h2>
    
    <Section
      title="Format Check"
      items={[
        {
          label: 'File Type',
          status: 'success',
          message: 'Your resume is in PDF format, which is ideal for ATS systems.',
        },
        {
          label: 'Length',
          status: 'success',
          message: 'Your resume length is appropriate (1-2 pages).',
        },
        {
          label: 'Font',
          status: 'error',
          message: 'Use standard fonts like Arial, Calibri, or Times New Roman for better ATS compatibility.',
        },
      ]}
    />
  </div>
);
