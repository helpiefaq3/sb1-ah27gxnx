import React, { useState } from 'react';
import { X } from 'lucide-react';
import { PersonalInfoForm } from './PersonalInfoForm';
import { ProgressBar } from './ProgressBar';
import { NavigationButtons } from './NavigationButtons';
import { useOnboardingStore } from '../../stores/onboardingStore';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  quantity: number;
  pricePerResume: number;
}

export function OnboardingModal({ isOpen, onClose, quantity, pricePerResume }: Props) {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 1;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black opacity-30" onClick={onClose} />
        
        <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Get Started</h2>
            <p className="mt-1 text-gray-600">
              Step {currentStep} of {totalSteps}
            </p>
          </div>

          <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

          <div className="mt-6">
            <PersonalInfoForm
              quantity={quantity}
              pricePerResume={pricePerResume}
            />
          </div>

          <NavigationButtons
            currentStep={currentStep}
            totalSteps={totalSteps}
            onPrevious={() => setCurrentStep(prev => Math.max(prev - 1, 1))}
            onNext={() => setCurrentStep(prev => Math.min(prev + 1, totalSteps))}
            onClose={onClose}
          />
        </div>
      </div>
    </div>
  );
}