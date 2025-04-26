import React, { useEffect, useRef } from 'react';
import { CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react';

export default function Conclusion() {
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
      id="conclusion" 
      ref={sectionRef}
      className="py-20 bg-cream-50 opacity-0 transition-opacity duration-1000"
      style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f9f8f3 100%)' }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center">Conclusion</h2>
          
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-green-700 mb-4">Summary of Achievements</h3>
              
              <p className="text-gray-700 mb-6">
                This research project successfully developed and evaluated three deep learning models for the 
                classification of snakes as venomous or non-venomous based on image data. Our findings highlight 
                the effectiveness of deep learning approaches for this critical task, with ResNet50 emerging as 
                the superior model with an exceptional 99.3% accuracy rate.
              </p>
              
              <div className="bg-green-50 rounded-lg p-5 border border-green-100">
                <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                  <CheckCircle size={18} className="mr-2" /> Key Accomplishments
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-gray-700">
                      Developed a binary classification system that focuses on the medically relevant distinction 
                      between venomous and non-venomous snakes rather than species identification.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-gray-700">
                      Achieved a significantly higher accuracy (99.3% with ResNet50) than previous research 
                      efforts in snake classification.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-gray-700">
                      Identified that residual networks (ResNet) architecture is particularly effective for 
                      distinguishing the visual features that differentiate venomous from non-venomous snakes.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-gray-700">
                      Created a potential foundation for a life-saving application that could be deployed in 
                      medical settings or as a mobile tool for emergency situations.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-8 mb-10">
              <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
                <AlertTriangle size={20} className="mr-2" /> Limitations
              </h3>
              
              <p className="text-gray-700 mb-6">
                Despite the impressive results, our research has several limitations that should be 
                acknowledged:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-amber-500">
                  <h4 className="font-medium text-amber-800 mb-2">Dataset Constraints</h4>
                  <p className="text-sm text-gray-700">
                    While our dataset was balanced and diverse, it primarily consisted of clear, well-lit 
                    images. Real-world snake encounters often involve poor lighting, partial visibility, 
                    or motion blur, which may affect model performance.
                  </p>
                </div>
                
                <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-amber-500">
                  <h4 className="font-medium text-amber-800 mb-2">Geographic Specificity</h4>
                  <p className="text-sm text-gray-700">
                    The dataset may not fully represent the global diversity of snake species, potentially 
                    limiting the model's applicability in certain regions where less common species are prevalent.
                  </p>
                </div>
                
                <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-amber-500">
                  <h4 className="font-medium text-amber-800 mb-2">Juvenile vs. Adult Snakes</h4>
                  <p className="text-sm text-gray-700">
                    Some snake species look dramatically different in juvenile and adult forms, which may 
                    not be adequately captured in the current models if training data didn't include sufficient 
                    examples of both life stages.
                  </p>
                </div>
                
                <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-amber-500">
                  <h4 className="font-medium text-amber-800 mb-2">Real-world Validation</h4>
                  <p className="text-sm text-gray-700">
                    The models have been evaluated on test data but not yet in real-world emergency scenarios 
                    where additional factors like user expertise and image capture conditions may affect 
                    performance.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
                <Lightbulb size={20} className="mr-2" /> Future Work
              </h3>
              
              <p className="text-gray-700 mb-6">
                Building on the success of this research, several promising directions for future work have been identified:
              </p>
              
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2 bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500 flex flex-col h-full">
                    <h4 className="font-medium text-blue-800 mb-2">Enhanced Dataset</h4>
                    <p className="text-sm text-gray-700 flex-grow">
                      Expand the dataset to include more species, diverse environments, and challenging 
                      conditions such as poor lighting, partial visibility, and various snake postures.
                    </p>
                    <div className="mt-3 pt-3 border-t border-blue-100">
                      <span className="text-xs text-blue-600 font-medium">Expected impact: Improved real-world accuracy</span>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500 flex flex-col h-full">
                    <h4 className="font-medium text-blue-800 mb-2">Mobile Application</h4>
                    <p className="text-sm text-gray-700 flex-grow">
                      Develop a user-friendly mobile application that integrates the ResNet50 model, 
                      allowing users to quickly classify snakes in potential emergency situations.
                    </p>
                    <div className="mt-3 pt-3 border-t border-blue-100">
                      <span className="text-xs text-blue-600 font-medium">Expected impact: Practical application for emergency use</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2 bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500 flex flex-col h-full">
                    <h4 className="font-medium text-blue-800 mb-2">Model Optimization</h4>
                    <p className="text-sm text-gray-700 flex-grow">
                      Further optimize the ResNet50 model for mobile deployment, potentially using techniques 
                      like quantization and pruning to reduce model size without sacrificing accuracy.
                    </p>
                    <div className="mt-3 pt-3 border-t border-blue-100">
                      <span className="text-xs text-blue-600 font-medium">Expected impact: Faster inference on mobile devices</span>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500 flex flex-col h-full">
                    <h4 className="font-medium text-blue-800 mb-2">Contextual Features</h4>
                    <p className="text-sm text-gray-700 flex-grow">
                      Incorporate geographical information and habitat data to enhance classification accuracy by 
                      considering the likelihood of specific venomous species in different regions.
                    </p>
                    <div className="mt-3 pt-3 border-t border-blue-100">
                      <span className="text-xs text-blue-600 font-medium">Expected impact: Region-specific predictions</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-700 text-white p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Final Thoughts</h4>
                  <p>
                    This project demonstrates the significant potential of deep learning in addressing important 
                    public health challenges. By accurately classifying snakes as venomous or non-venomous, we 
                    can provide a valuable tool for medical professionals and the general public, potentially 
                    reducing the devastating impact of snake bites worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}