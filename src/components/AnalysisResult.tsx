import React from 'react';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import type { Analysis } from '../types';

interface AnalysisResultProps {
  analysis: Analysis;
}

export const AnalysisResult: React.FC<AnalysisResultProps> = ({ analysis }) => {
  return (
    <div className="w-full space-y-6">
      {/* Searchability Score */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Searchability Score</h3>
        <div className="flex items-center">
          <div className="relative w-full h-4 bg-gray-200 rounded-full">
            <div
              className="absolute h-full rounded-full bg-blue-500"
              style={{ width: `${analysis.searchability}%` }}
            />
          </div>
          <span className="ml-4 font-semibold">{analysis.searchability}%</span>
        </div>
      </div>

      {/* Hard Skills */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Hard Skills</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="flex items-center text-green-600 font-medium mb-2">
              <CheckCircle className="w-4 h-4 mr-2" /> Matched
            </h4>
            <ul className="list-disc list-inside space-y-1">
              {analysis.hardSkills.matched.map((skill, index) => (
                <li key={index} className="text-gray-700">{skill}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="flex items-center text-red-600 font-medium mb-2">
              <XCircle className="w-4 h-4 mr-2" /> Missing
            </h4>
            <ul className="list-disc list-inside space-y-1">
              {analysis.hardSkills.missing.map((skill, index) => (
                <li key={index} className="text-gray-700">{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Soft Skills */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="flex items-center text-green-600 font-medium mb-2">
              <CheckCircle className="w-4 h-4 mr-2" /> Matched
            </h4>
            <ul className="list-disc list-inside space-y-1">
              {analysis.softSkills.matched.map((skill, index) => (
                <li key={index} className="text-gray-700">{skill}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="flex items-center text-red-600 font-medium mb-2">
              <XCircle className="w-4 h-4 mr-2" /> Missing
            </h4>
            <ul className="list-disc list-inside space-y-1">
              {analysis.softSkills.missing.map((skill, index) => (
                <li key={index} className="text-gray-700">{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Recruiter Tips */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Recruiter Tips</h3>
        <ul className="space-y-2">
          {analysis.recruiterTips.map((tip, index) => (
            <li key={index} className="flex items-start">
              <AlertCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Formatting Issues */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Formatting</h3>
        <ul className="space-y-2">
          {analysis.formattingIssues.map((issue, index) => (
            <li key={index} className="flex items-start">
              <AlertCircle className="w-5 h-5 mr-2 text-yellow-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{issue}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
