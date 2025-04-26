import React, { useEffect, useRef } from 'react';
import { Image, Layers, Database, ArrowRightLeft } from 'lucide-react';

export default function Methodology() {
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
      id="methodology" 
      ref={sectionRef}
      className="py-20 bg-gray-50 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center">Methodology</h2>
          
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="flex items-center text-lg font-semibold text-green-700 mb-3">
                  <Database size={20} className="mr-2" /> Dataset
                </h3>
                <p className="text-gray-700 mb-4">
                  Our dataset was sourced from Kaggle's comprehensive snake image collection, 
                  which includes thousands of images categorized by snake species with clear 
                  metadata indicating venomous and non-venomous classifications.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h4 className="font-medium text-green-700 mb-2 text-sm">Dataset Statistics</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Total Images</p>
                      <p className="font-medium">5,408</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Venomous</p>
                      <p className="font-medium">2,703 images</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Non-venomous</p>
                      <p className="font-medium">2,705 images</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Species Count</p>
                      <p className="font-medium">78 species</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-lg shadow-sm">
                  <img 
                    src="https://images.pexels.com/photos/567540/pexels-photo-567540.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Venomous snake" 
                    className="w-full h-40 object-cover"
                  />
                  <div className="bg-red-100 text-red-800 text-xs p-1 text-center">Venomous</div>
                </div>
                <div className="overflow-hidden rounded-lg shadow-sm">
                  <img 
                    src="https://images.pexels.com/photos/2062322/pexels-photo-2062322.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Non-venomous snake" 
                    className="w-full h-40 object-cover"
                  />
                  <div className="bg-green-100 text-green-800 text-xs p-1 text-center">Non-venomous</div>
                </div>
                <div className="overflow-hidden rounded-lg shadow-sm">
                  <img 
                    src="https://images.pexels.com/photos/2679440/pexels-photo-2679440.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Venomous snake" 
                    className="w-full h-40 object-cover"
                  />
                  <div className="bg-red-100 text-red-800 text-xs p-1 text-center">Venomous</div>
                </div>
                <div className="overflow-hidden rounded-lg shadow-sm">
                  <img 
                    src="https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Non-venomous snake" 
                    className="w-full h-40 object-cover"
                  />
                  <div className="bg-green-100 text-green-800 text-xs p-1 text-center">Non-venomous</div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-8 mb-10">
              <h3 className="flex items-center text-lg font-semibold text-green-700 mb-5">
                <ArrowRightLeft size={20} className="mr-2" /> Data Preprocessing
              </h3>
              
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="md:w-1/3">
                    <h4 className="font-medium text-green-700 mb-2">Data Split</h4>
                    <p className="text-sm text-gray-700">
                      Images were split into training (70%), validation (15%), and testing (15%) sets, 
                      maintaining the same distribution of venomous and non-venomous snakes in each set.
                    </p>
                  </div>
                  <div className="md:w-2/3 bg-gray-50 p-4 rounded-lg">
                    <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className="flex h-full">
                        <div className="bg-green-600 h-full" style={{ width: '70%' }}>
                          <span className="text-xs text-white flex items-center justify-center h-full">
                            Training: 70%
                          </span>
                        </div>
                        <div className="bg-green-400 h-full" style={{ width: '15%' }}>
                          <span className="text-xs text-white flex items-center justify-center h-full">
                            Val: 15%
                          </span>
                        </div>
                        <div className="bg-green-300 h-full" style={{ width: '15%' }}>
                          <span className="text-xs text-white flex items-center justify-center h-full">
                            Test: 15%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="flex items-center font-medium text-green-700 mb-4">
                    <Image size={18} className="mr-2" /> Image Augmentation
                  </h4>
                  
                  <p className="text-gray-700 mb-4">
                    To increase the diversity of our training data and improve model generalization, 
                    we applied the following augmentation techniques:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h5 className="font-medium text-green-700 text-sm mb-2">Geometric Transforms</h5>
                      <ul className="text-xs text-gray-700 space-y-1">
                        <li>• Random rotation (±20°)</li>
                        <li>• Horizontal & vertical flips</li>
                        <li>• Width & height shift (±10%)</li>
                        <li>• Zoom range (0.8 to 1.2)</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h5 className="font-medium text-green-700 text-sm mb-2">Color Adjustments</h5>
                      <ul className="text-xs text-gray-700 space-y-1">
                        <li>• Brightness variation (±20%)</li>
                        <li>• Contrast adjustment (0.8 to 1.2)</li>
                        <li>• Channel shift range (20)</li>
                        <li>• Hue & saturation shifts</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h5 className="font-medium text-green-700 text-sm mb-2">Other Techniques</h5>
                      <ul className="text-xs text-gray-700 space-y-1">
                        <li>• Random crop & resize</li>
                        <li>• Gaussian noise (σ=0.01)</li>
                        <li>• Gaussian blur (σ=0.5)</li>
                        <li>• Random erasing (cutout)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-8">
              <h3 className="flex items-center text-lg font-semibold text-green-700 mb-5">
                <Layers size={20} className="mr-2" /> Model Selection
              </h3>
              
              <p className="text-gray-700 mb-6">
                We selected three state-of-the-art CNN architectures for our comparative study, 
                each with different characteristics in terms of depth, parameter count, and computational efficiency:
              </p>
              
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-medium text-green-700 mb-2">InceptionV3</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Parameters</p>
                      <p className="font-medium">23.8 million</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Input Size</p>
                      <p className="font-medium">299 × 299 pixels</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Architecture</p>
                      <p className="font-medium">42 layers deep</p>
                    </div>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-medium text-green-700 mb-2">EfficientNetB0</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Parameters</p>
                      <p className="font-medium">5.3 million</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Input Size</p>
                      <p className="font-medium">224 × 224 pixels</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Architecture</p>
                      <p className="font-medium">Compound scaling</p>
                    </div>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-medium text-green-700 mb-2">ResNet50</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Parameters</p>
                      <p className="font-medium">25.6 million</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Input Size</p>
                      <p className="font-medium">224 × 224 pixels</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Architecture</p>
                      <p className="font-medium">50 layers with residual connections</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-green-50 p-5 rounded-lg border border-green-100">
                <h4 className="font-semibold text-green-800 mb-3">Implementation Tools</h4>
                <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <li className="bg-white p-3 rounded shadow-sm text-center">
                    <p className="text-green-700 font-medium text-sm">Python 3.9</p>
                  </li>
                  <li className="bg-white p-3 rounded shadow-sm text-center">
                    <p className="text-green-700 font-medium text-sm">TensorFlow 2.7</p>
                  </li>
                  <li className="bg-white p-3 rounded shadow-sm text-center">
                    <p className="text-green-700 font-medium text-sm">Keras</p>
                  </li>
                  <li className="bg-white p-3 rounded shadow-sm text-center">
                    <p className="text-green-700 font-medium text-sm">Jupyter Notebook</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}