"use client";

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";

export function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false);

  const closeModal = () => setIsVisible(false);

  return (
    <>
      <div className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} id="how-it-works">
        <div className="flex items-center justify-center min-h-screen p-4">
          <Card className="bg-white/95 backdrop-blur-md border-0 shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <CardContent className="p-6 sm:p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">How WaddleJob Works</h2>
                <button 
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold transition-colors duration-200"
                >
                  ×
                </button>
              </div>
            
              <div className="space-y-6 text-gray-700">
                <div className="border-l-4 border-violet-500 pl-4">
                  <h3 className="font-semibold text-lg mb-2">1. Create Your Profile</h3>
                  <p>Sign up and build your professional profile showcasing your skills, experience, and what you're looking for in your next opportunity.</p>
                </div>
                
                <div className="border-l-4 border-violet-500 pl-4">
                  <h3 className="font-semibold text-lg mb-2">2. Get Matched</h3>
                  <p>Our smart algorithm connects you with opportunities that match your skills, preferences, and career goals. No more endless scrolling through irrelevant listings.</p>
                </div>
                
                <div className="border-l-4 border-violet-500 pl-4">
                  <h3 className="font-semibold text-lg mb-2">3. Connect Directly</h3>
                  <p>Engage directly with hiring managers and teams. Skip the recruiters and talk to the people who actually make decisions.</p>
                </div>
                
                <div className="border-l-4 border-violet-500 pl-4">
                  <h3 className="font-semibold text-lg mb-2">4. Land Your Dream Role</h3>
                  <p>Find the perfect opportunity that aligns with your talents and career aspirations. Join thousands who've already found their ideal match.</p>
                </div>
              </div>
            
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">Ready to get started?</p>
                <a 
                  href="https://www.app.waddlejob.xyz" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-violet-500 to-violet-400 text-white px-6 py-3 rounded-full font-medium hover:from-violet-600 hover:to-violet-500 transition-all duration-300"
                >
                  Launch App
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Invisible trigger for external function calls */}
      <div 
        id="how-it-works-trigger" 
        onClick={() => setIsVisible(true)}
        className="hidden"
      />
    </>
  );
}

// Export function to open modal from external components
export const openHowItWorks = () => {
  // Try to use React state first
  const trigger = document.getElementById('how-it-works-trigger');
  if (trigger) {
    trigger.click();
  } else {
    // Fallback to direct DOM manipulation
    const modal = document.getElementById('how-it-works');
    if (modal) {
      modal.classList.remove('hidden');
    }
  }
};
