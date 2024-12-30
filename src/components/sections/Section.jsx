import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

export const Section = ({ title, items }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    {items.map((item, index) => (
      <div key={index} className="flex items-start mb-4 last:mb-0">
        {item.status === 'success' ? (
          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
        ) : (
          <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
        )}
        <div className="ml-3">
          <p className="text-gray-900">{item.message}</p>
          {item.action && (
            <a href="#" className="text-blue-500 hover:text-blue-600 text-sm">
              {item.action}
            </a>
          )}
        </div>
      </div>
    ))}
  </div>
);
