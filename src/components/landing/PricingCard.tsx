import React from 'react';
import { Check } from 'lucide-react';

interface PricingFeature {
  text: string;
}

interface PricingCardProps {
  title: string;
  price: number;
  features: PricingFeature[];
  isPopular?: boolean;
}

export function PricingCard({ title, price, features, isPopular }: PricingCardProps) {
  return (
    <div className={`bg-white rounded-2xl shadow-lg p-8 ${isPopular ? 'ring-2 ring-blue-600' : ''}`}>
      {isPopular && (
        <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold text-blue-600 bg-blue-50 mb-4">
          Most Popular
        </span>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">${price}</span>
        <span className="text-gray-600">/resume</span>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
            <span className="text-gray-600">{feature.text}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 px-6 rounded-lg transition-colors ${
        isPopular 
          ? 'bg-blue-600 text-white hover:bg-blue-700' 
          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
      }`}>
        Get Started
      </button>
    </div>
  );
}