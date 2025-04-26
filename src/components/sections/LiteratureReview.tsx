import React, { useEffect, useRef } from 'react';

const papers = [
  {
    title: "CNN-Based Snake Classification",
    authors: "Kumar et al. (2020)",
    accuracy: 90.5,
    approach: "Used transfer learning with VGG16 for snake species identification",
    limitations: "Limited dataset size, focused only on specific regions"
  },
  {
    title: "YOLO and Faster-RCNN for Snake Detection",
    authors: "Singh & Lopez (2021)",
    accuracy: 81.6,
    approach: "Object detection models for identifying snakes in natural habitats",
    limitations: "Lower accuracy in complex backgrounds, limited to detection not classification"
  },
  {
    title: "EfficientNet for Snake Species Identification",
    authors: "Rahman et al. (2022)",
    accuracy: 94.0,
    approach: "EfficientNet architecture with custom dataset including 130 snake species",
    limitations: "Focused on species, not venom classification directly"
  }
];

export default function LiteratureReview() {
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
      id="literature" 
      ref={sectionRef}
      className="py-20 bg-gray-50 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center">Literature Review</h2>
          
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <p className="text-gray-700 mb-8">
              Several research efforts have been made in the field of snake classification using 
              deep learning techniques. Here's a summary of key relevant works that form the 
              foundation of our approach:
            </p>
            
            <div className="space-y-6">
              {papers.map((paper, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-green-800">{paper.title}</h3>
                      <p className="text-sm text-gray-500">{paper.authors}</p>
                    </div>
                    <div className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      {paper.accuracy}% accuracy
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <p className="text-gray-700 text-sm"><span className="font-medium">Approach:</span> {paper.approach}</p>
                    <p className="text-gray-700 text-sm mt-2"><span className="font-medium">Limitations:</span> {paper.limitations}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 border-t border-gray-200 pt-6">
              <h3 className="text-xl font-semibold text-green-700 mb-4">Research Gaps Identified</h3>
              
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
                <h4 className="font-medium text-amber-800 mb-2">Focus on Species, Not Venom Classification</h4>
                <p className="text-sm text-gray-700">
                  Most existing research focuses on identifying specific snake species rather than the more 
                  urgent medical need of determining whether a snake is venomous or non-venomous.
                </p>
              </div>
              
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
                <h4 className="font-medium text-amber-800 mb-2">Dataset Limitations</h4>
                <p className="text-sm text-gray-700">
                  Many studies use limited datasets with either few species or images captured in controlled 
                  environments, which doesn't reflect real-world scenarios where snake images are captured in 
                  various lighting conditions and angles.
                </p>
              </div>
              
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
                <h4 className="font-medium text-amber-800 mb-2">Room for Accuracy Improvement</h4>
                <p className="text-sm text-gray-700">
                  While some models achieve over 90% accuracy, there's still significant room for improvement, 
                  especially considering the life-critical nature of snake bite cases where accuracy is paramount.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}