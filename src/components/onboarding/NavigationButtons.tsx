import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Props {
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext: () => void;
  onClose: () => void;
}

export function NavigationButtons({
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
  onClose,
}: Props) {
  return (
    <div className="mt-8 flex items-center justify-between">
      {currentStep > 1 ? (
        <button
          onClick={onPrevious}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="h-4 w-4" />
          Previous
        </button>
      ) : (
        <button
          onClick={onClose}
          className="text-gray-600 hover:text-gray-800"
        >
          Cancel
        </button>
      )}

      <button
        onClick={onNext}
        className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
      >
        {currentStep === totalSteps ? 'Complete' : 'Next'}
        {currentStep !== totalSteps && <ArrowRight className="h-4 w-4" />}
      </button>
    </div>
  );
}