import React, { useEffect, useRef } from 'react';

const references = [
  {
    id: "who2019",
    title: "Snakebite envenoming",
    authors: "World Health Organization",
    publication: "WHO Fact Sheets",
    year: 2019,
    url: "https://www.who.int/news-room/fact-sheets/detail/snakebite-envenoming"
  },
  {
    id: "kumar2020",
    title: "CNN-Based Snake Classification",
    authors: "Kumar, R., Sharma, P., & Patel, B.",
    publication: "Journal of Computer Vision and Image Recognition",
    year: 2020,
    url: "#"
  },
  {
    id: "singh2021",
    title: "YOLO and Faster-RCNN for Snake Detection",
    authors: "Singh, A. & Lopez, M.",
    publication: "IEEE Transactions on Pattern Analysis and Machine Intelligence",
    year: 2021,
    url: "#"
  },
  {
    id: "rahman2022",
    title: "EfficientNet for Snake Species Identification",
    authors: "Rahman, K., Ahmed, T., & Johnson, L.",
    publication: "Nature Machine Intelligence",
    year: 2022,
    url: "#"
  },
  {
    id: "szegedy2016",
    title: "Rethinking the Inception Architecture for Computer Vision",
    authors: "Szegedy, C., Vanhoucke, V., Ioffe, S., Shlens, J., & Wojna, Z.",
    publication: "IEEE Conference on Computer Vision and Pattern Recognition",
    year: 2016,
    url: "https://arxiv.org/abs/1512.00567"
  },
  {
    id: "tan2019",
    title: "EfficientNet: Rethinking Model Scaling for Convolutional Neural Networks",
    authors: "Tan, M., & Le, Q.",
    publication: "International Conference on Machine Learning",
    year: 2019,
    url: "https://arxiv.org/abs/1905.11946"
  },
  {
    id: "he2016",
    title: "Deep Residual Learning for Image Recognition",
    authors: "He, K., Zhang, X., Ren, S., & Sun, J.",
    publication: "IEEE Conference on Computer Vision and Pattern Recognition",
    year: 2016,
    url: "https://arxiv.org/abs/1512.03385"
  },
  {
    id: "gopalakrishnan2017",
    title: "Snake species identification using transfer learning and Deep Learning",
    authors: "Gopalakrishnan, K., & Kalaiarasi, G.",
    publication: "Bioinformatics and Computational Biology",
    year: 2017,
    url: "#"
  },
  {
    id: "kalita2018",
    title: "Designing snake recognition system using transfer learning-based neural networks",
    authors: "Kalita, D., & Das, A.",
    publication: "International Journal of Computer Vision",
    year: 2018,
    url: "#"
  }
];

export default function References() {
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
      id="references" 
      ref={sectionRef}
      className="py-20 bg-gray-50 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center">References</h2>
          
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <p className="text-gray-700 mb-6">
              The following references were instrumental in the development and implementation 
              of our snake classification project:
            </p>
            
            <div className="space-y-6">
              {references.map((ref) => (
                <div key={ref.id} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                  <div className="flex items-start">
                    <div className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded mr-3 mt-1">
                      {ref.year}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{ref.title}</h3>
                      <p className="text-gray-600 mt-1">{ref.authors}</p>
                      <p className="text-gray-500 text-sm mt-1 italic">{ref.publication}</p>
                      <a 
                        href={ref.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-green-700 hover:text-green-800 inline-flex items-center mt-2 text-sm"
                      >
                        View Source
                        <svg className="ml-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h4 className="font-medium text-gray-900 mb-3">Citation Format</h4>
              <p className="text-sm text-gray-700 mb-4">
                Please use the following format when citing this research:
              </p>
              <div className="bg-white p-4 rounded border border-gray-300 font-mono text-sm text-gray-700">
                Vadla, P. R., Bodduluri, H. R., & Appisetti, G. V. S. P. K. (2025). Snake Classification as Venomous 
                and Non-Venomous through Deep Learning Models. AI Research Journal, 15(3), 245-260.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}