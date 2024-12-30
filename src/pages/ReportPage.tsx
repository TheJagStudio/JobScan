import React, { useState } from 'react';
import { Tabs } from '../components/Tabs';
import { SidebarStats } from '../components/SidebarStats';
import { ScanResults } from '../components/ScanResults';
import { DocumentView } from '../components/DocumentView';
import type { UploadState } from '../types';

interface ReportPageProps {
  uploadState: UploadState;
}

export const ReportPage: React.FC<ReportPageProps> = ({ uploadState }) => {
  const [activeTab, setActiveTab] = useState('report');

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-xl text-gray-900">Resume scan results</h1>
        <div className="flex items-center text-gray-600">
          <span>Company - Associate</span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3">
          <SidebarStats />
        </div>

        <div className="col-span-9">
          <Tabs
            tabs={[
              { id: 'report', label: 'Full Report' },
              { id: 'documents', label: 'Documents' },
            ]}
            activeTab={activeTab}
            onChange={setActiveTab}
          />

          <div className="mt-6">
            {activeTab === 'report' ? (
              <ScanResults />
            ) : (
              <DocumentView uploadState={uploadState} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
