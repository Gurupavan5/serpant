import React, { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';

export default function ProposedSolution() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      id="solution" 
      ref={sectionRef}
      className="py-20 bg-cream-50 opacity-0 transition-opacity duration-1000"
      style={{ background: 'linear-gradient(180deg, #f9f8f3 0%, #ffffff 100%)' }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center">Proposed Solution</h2>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-green-700 text-white p-6">
              <h3 className="text-xl md:text-2xl font-semibold">Venom Classification Over Species Identification</h3>
              <p className="mt-2 text-green-100">
                Our approach focuses on the critical medical distinction between venomous and non-venomous snakes
                rather than identifying specific species.
              </p>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h4 className="text-lg font-semibold text-green-700 mb-4">Key Focus Areas</h4>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" size={18} />
                      <div>
                        <span className="font-medium">Binary Classification:</span>
                        <p className="text-gray-700 text-sm mt-1">
                          Instead of multi-class species identification, we focus on the binary classification 
                          of venomous vs. non-venomous snakes, which is more relevant for immediate medical decisions.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <CheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" size={18} />
                      <div>
                        <span className="font-medium">Transfer Learning:</span>
                        <p className="text-gray-700 text-sm mt-1">
                          Leveraging pre-trained deep learning models (InceptionV3, EfficientNetB0, ResNet50) 
                          and fine-tuning them for our specific classification task.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <CheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" size={18} />
                      <div>
                        <span className="font-medium">Comparative Analysis:</span>
                        <p className="text-gray-700 text-sm mt-1">
                          Rigorous comparison of multiple model architectures to determine the most 
                          accurate approach for snake venom classification.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <CheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" size={18} />
                      <div>
                        <span className="font-medium">Real-world Variability:</span>
                        <p className="text-gray-700 text-sm mt-1">
                          Training with augmented images that simulate various real-world conditions 
                          to ensure the model performs well in different environments.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="md:w-1/2">
                  <img 
                    src="https://images.pexels.com/photos/45246/green-tree-python-python-tree-python-green-45246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Snake classification" 
                    className="rounded-lg shadow-md w-full h-auto mb-6"
                  />
                  
                  <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                    <h4 className="font-semibold text-green-800 mb-3">Expected Impact</h4>
                    <p className="text-gray-700 text-sm mb-4">
                      Our solution aims to create a practical tool that can be deployed in medical settings 
                      or as a mobile application to assist in snake identification during emergencies.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-3 rounded shadow-sm">
                        <p className="text-green-700 font-medium text-sm">Faster Treatment Decisions</p>
                      </div>
                      <div className="bg-white p-3 rounded shadow-sm">
                        <p className="text-green-700 font-medium text-sm">Reduced Mortality Rates</p>
                      </div>
                      <div className="bg-white p-3 rounded shadow-sm">
                        <p className="text-green-700 font-medium text-sm">Accessible in Remote Areas</p>
                      </div>
                      <div className="bg-white p-3 rounded shadow-sm">
                        <p className="text-green-700 font-medium text-sm">Non-Expert Usability</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}