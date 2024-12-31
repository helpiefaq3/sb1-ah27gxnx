import React from 'react';

interface Props {
  currentStep: number;
  totalSteps: number;
}

export function ProgressBar({ currentStep, totalSteps }: Props) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="relative h-2 w-full rounded-full bg-gray-200">
      <div
        className="absolute left-0 top-0 h-full rounded-full bg-blue-600 transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}