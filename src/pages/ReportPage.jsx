import React, { useState } from 'react';
import { Tabs } from '../components/Tabs';
import { SidebarStats } from '../components/SidebarStats';
import { ScanResults } from '../components/ScanResults';
import { DocumentView } from '../components/DocumentView';
import { useAIAnalysis } from '../hooks/useAIAnalysis';

export const ReportPage = ({ uploadState }) => {
	const [activeTab, setActiveTab] = useState('report');
	const { loading, error, data } = useAIAnalysis(uploadState.resume, uploadState.jobDescription);

	return (
		<div>
			<div className="mb-6">
				<h1 className="text-xl text-gray-900">Resume scan results</h1>
				<div className="flex items-center text-gray-600">
					<span>Resume Analysis Report</span>
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
							<ScanResults 
								loading={loading}
								error={error}
								analysisData={data}
							/>
						) : (
							<DocumentView uploadState={uploadState} />
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
