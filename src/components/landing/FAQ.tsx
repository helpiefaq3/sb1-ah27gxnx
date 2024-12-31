import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How does the free resume analysis work?',
    answer: 'Upload your resume and receive a detailed report within 24 hours. The analysis includes ATS compatibility check, keyword optimization assessment, and industry-specific recommendations.'
  },
  {
    question: 'Do the resume credits expire?',
    answer: 'No, your purchased credits never expire. You can use them whenever you need to update or optimize your resume.'
  },
  {
    question: 'What if I\'m not satisfied with the results?',
    answer: 'We offer a 100% satisfaction guarantee. If you\'re not happy with our service, we\'ll revise your resume or provide a full refund.'
  },
  {
    question: 'How long does the optimization process take?',
    answer: 'Once you submit your resume, our team will deliver the optimized version within 2 business days.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Everything you need to know about our service</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm">
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}