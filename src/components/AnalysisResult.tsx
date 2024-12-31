import React from 'react';
import { CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import type { ResumeAnalysis } from '../types';

interface Props {
  analysis: ResumeAnalysis;
  onOptimize: () => void;
}

export function AnalysisResult({ analysis, onOptimize }: Props) {
  const getScoreColor = (score: number) => {
    if (score >= 85) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6 w-full max-w-2xl">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">ATS Compatibility Analysis</h2>
        
        <div className="flex items-center justify-between mb-6">
          <span className="text-gray-700">Compatibility Score:</span>
          <span className={`text-2xl font-bold ${getScoreColor(analysis.atsScore)}`}>
            {analysis.atsScore}%
          </span>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">Matching Keywords</h3>
            <div className="flex flex-wrap gap-2">
              {analysis.keywordMatches.map((keyword, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm flex items-center gap-1"
                >
                  <CheckCircle size={16} />
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">Missing Keywords</h3>
            <div className="flex flex-wrap gap-2">
              {analysis.missingKeywords.map((keyword, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm flex items-center gap-1"
                >
                  <XCircle size={16} />
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">Suggestions</h3>
            <ul className="space-y-2">
              {analysis.suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-gray-700"
                >
                  <AlertTriangle size={20} className="text-yellow-500 mt-1" />
                  <span>{suggestion}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button
          onClick={onOptimize}
          className="mt-6 w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Optimize Resume
        </button>
      </div>
    </div>
  );
}