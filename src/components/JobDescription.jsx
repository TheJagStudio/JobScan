import React from 'react';

export const JobDescription = ({ value, onChange }) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Job Description
      </label>
      <textarea
        className="w-full h-48 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        placeholder="Paste the job description here..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
