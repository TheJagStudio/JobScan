import React from 'react';
import { ScanSearch } from 'lucide-react';

interface HeaderProps {
  onReset: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onReset }) => {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <ScanSearch className="w-8 h-8 text-blue-500 mr-2" />
          <span className="text-2xl font-bold text-blue-500">Resume Scan</span>
        </div>
        <nav className="flex items-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-900">Dashboard</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">LinkedIn</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Jobs</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Job Tracker</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Scan History</a>
          <button 
            onClick={onReset}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            New Scan
          </button>
        </nav>
      </div>
    </header>
  );
};
