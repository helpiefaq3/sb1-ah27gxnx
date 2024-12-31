import React, { useState } from 'react';
import { Check, Calculator } from 'lucide-react';
import { OnboardingModal } from '../onboarding/OnboardingModal';
import { getPrice, getSavings } from '../../utils/pricing';

export function Pricing() {
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pricePerResume = getPrice(quantity);
  const totalPrice = pricePerResume * quantity;
  const savings = getSavings(quantity);

  return (
    <section className="py-20 bg-gray-50" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600">Choose the quantity that fits your needs</p>
        </div>

        <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8">
          <div className="mb-8">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
              Number of Resume Versions
            </label>
            <select
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              {[1, 2, 3, 5, 10].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'Resume' : 'Resumes'}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-500" />
              <span>ATS-optimized formatting</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-500" />
              <span>Industry-specific keywords</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-500" />
              <span>Professional editing</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-500" />
              <span>24/7 customer support</span>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Price per resume:</span>
              <span className="text-lg font-semibold">${pricePerResume}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Quantity:</span>
              <span className="text-lg">{quantity}</span>
            </div>
            {savings > 0 && (
              <div className="flex justify-between items-center mb-2 text-green-600">
                <span>Volume discount savings:</span>
                <span className="text-lg font-semibold">-${savings}</span>
              </div>
            )}
            <div className="border-t border-gray-200 mt-4 pt-4 flex justify-between items-center">
              <span className="text-gray-900 font-semibold">Total:</span>
              <span className="text-2xl font-bold text-blue-600">${totalPrice}</span>
            </div>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
          >
            Get Started Now
          </button>
        </div>
      </div>

      <OnboardingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        quantity={quantity}
        pricePerResume={pricePerResume}
      />
    </section>
  );
}