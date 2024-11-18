"use client";


import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';
import { useStep } from '../dashsideber/setprovider/page';


export default function RoutineLayout({ children }) {
  const steps = [ { number: 1, label: 'Information' }, { number: 2, label: 'Time & Period' }, { number: 3, label: 'Sunday' }, { number: 4, label: 'Monday' }, { number: 5, label: 'Tuesday' }, { number: 6, label: 'Wednesday' }, { number: 7, label: 'Thursday' }, { number: 8, label: 'Finalize' }];
  const { currentStep , goToStep } = useStep();

  return (
    <div className="flex">
      <div className="w-68 bg-[#12284c] text-white fixed top-0 left-0 h-full p-10 font-semibold">
        <Link href="/">
          <div className="text-xl font-bold mb-8">SLACMS</div>
        </Link>
        <div className="space-y-4">
          {steps.map((step) => (
            <div
              key={step.number}
              onClick={() => goToStep(step.number)}
              className={`flex items-center space-x-2 cursor-pointer ${currentStep === step.number ? 'text-blue-400' : 'text-gray-400'}`}
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-current">
                {currentStep > step.number ? <FaCheckCircle className='text-blue-600' /> : step.number}
              </span>
              <span>{step.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <div className="text-sm mb-2">ROUTINE COMPLETENESS:</div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${(currentStep / steps.length) * 100}%` }}></div>
          </div>
          <div className="text-right">{Math.round((currentStep / steps.length) * 100)}%</div>
        </div>
        <div className="mt-auto text-sm space-y-2">
          <Link href="/terms" className="block">Terms and Conditions</Link>
          <Link href="/privacy" className="block">Privacy Policy</Link>
          <Link href="/accessibility" className="block">Accessibility</Link>
          <Link href="/contact" className="block">Contact Us</Link>
        </div>
        <div className="text-xs mt-6">© 2024, Team SLACMS-RIIT. All rights reserved.</div>
      </div>
      <div className="flex-grow ml-[400px] p-8">
        {children}
        
      </div>
    </div>
  );
}
