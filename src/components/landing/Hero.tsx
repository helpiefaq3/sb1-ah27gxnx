import React from 'react';
import { FileSearch, Sparkles } from 'lucide-react';
import { useModalStore } from '../../stores/modalStore';
import { CollapsibleSection } from '../ui/CollapsibleSection';

export function Hero() {
  const setModal = useModalStore((state) => state.setModal);

  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
            <span className="block">Get Your Resume</span>
            <span className="block text-blue-600">ATS-Ready in Minutes</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start with a FREE ATS analysis, then transform your resume with our AI-powered optimization service.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <CollapsibleSection title="Free Resume Analysis" defaultOpen>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <FileSearch className="w-5 h-5 text-blue-600" />
                  <span>Detailed ATS compatibility insights</span>
                </div>
                <button
                  onClick={() => setModal('analyze')}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Analyze Resume
                </button>
              </div>
            </CollapsibleSection>
            
            <CollapsibleSection title="Premium Optimization">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                  <span>Professional resume optimization</span>
                </div>
                <button
                  onClick={() => setModal('optimize')}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Optimize Resume
                </button>
              </div>
            </CollapsibleSection>
          </div>
        </div>
      </div>
    </div>
  );
}