import React from 'react';
import { Hero } from './components/landing/Hero';
import { Pricing } from './components/landing/Pricing';
import { Testimonials } from './components/landing/Testimonials';
import { FAQ } from './components/landing/FAQ';
import { OnboardingModal } from './components/onboarding/OnboardingModal';
import { useModalStore } from './stores/modalStore';

export default function App() {
  const { isOpen, type, quantity, closeModal } = useModalStore();
  const pricePerResume = 25;

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Pricing />
      <Testimonials />
      <FAQ />
      
      <OnboardingModal
        isOpen={isOpen}
        onClose={closeModal}
        quantity={quantity}
        pricePerResume={pricePerResume}
        type={type}
      />
    </div>
  );
}