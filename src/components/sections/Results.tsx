import React, { useEffect, useRef } from 'react';
import { BarChart, GitCompare, Award } from 'lucide-react';

const charts = {
  accuracyChart: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='300' viewBox='0 0 600 300'%3E%3Crect width='600' height='300' fill='white'/%3E%3Cpath d='M 50 250 L 550 250' stroke='%23ccc' stroke-width='1'/%3E%3Cpath d='M 50 200 L 550 200' stroke='%23ccc' stroke-width='1'/%3E%3Cpath d='M 50 150 L 550 150' stroke='%23ccc' stroke-width='1'/%3E%3Cpath d='M 50 100 L 550 100' stroke='%23ccc' stroke-width='1'/%3E%3Cpath d='M 50 50 L 550 50' stroke='%23ccc' stroke-width='1'/%3E%3Ctext x='40' y='255' text-anchor='end' fill='%23666' font-family='Arial' font-size='12'%3E0%25%3C/text%3E%3Ctext x='40' y='205' text-anchor='end' fill='%23666' font-family='Arial' font-size='12'%3E20%25%3C/text%3E%3Ctext x='40' y='155' text-anchor='end' fill='%23666' font-family='Arial' font-size='12'%3E40%25%3C/text%3E%3Ctext x='40' y='105' text-anchor='end' fill='%23666' font-family='Arial' font-size='12'%3E60%25%3C/text%3E%3Ctext x='40' y='55' text-anchor='end' fill='%23666' font-family='Arial' font-size='12'%3E80%25%3C/text%3E%3Ctext x='50' y='270' text-anchor='middle' fill='%23666' font-family='Arial' font-size='12'%3E0%3C/text%3E%3Ctext x='150' y='270' text-anchor='middle' fill='%23666' font-family='Arial' font-size='12'%3E10%3C/text%3E%3Ctext x='250' y='270' text-anchor='middle' fill='%23666' font-family='Arial' font-size='12'%3E20%3C/text%3E%3Ctext x='350' y='270' text-anchor='middle' fill='%23666' font-family='Arial' font-size='12'%3E30%3C/text%3E%3Ctext x='450' y='270' text-anchor='middle' fill='%23666' font-family='Arial' font-size='12'%3E40%3C/text%3E%3Ctext x='550' y='270' text-anchor='middle' fill='%23666' font-family='Arial' font-size='12'%3E50%3C/text%3E%3Ctext x='300' y='295' text-anchor='middle' fill='%23666' font-family='Arial' font-size='14'%3EEpochs%3C/text%3E%3Ctext transform='rotate(-90 15 175)' x='15' y='175' text-anchor='middle' fill='%23666' font-family='Arial' font-size='14'%3EAccuracy%3C/text%3E%3Cpath d='M 50 200 L 70 180 L 90 160 L 110 135 L 130 120 L 150 110 L 170 100 L 190 90 L 210 80 L 230 77 L 250 75 L 270 73 L 290 72 L 310 71 L 330 70 L 350 70 L 370 70 L 390 70 L 410 69 L 430 69 L 450 68 L 470 67 L 490 66 L 510 65 L 530 65 L 550 65' stroke='%233B82F6' stroke-width='3' fill='none'/%3E%3Cpath d='M 50 220 L 70 175 L 90 150 L 110 125 L 130 110 L 150 100 L 170 95 L 190 90 L 210 85 L 230 80 L 250 77 L 270 75 L 290 73 L 310 72 L 330 70 L 350 68 L 370 66 L 390 65 L 410 63 L 430 62 L 450 60 L 470 59 L 490 58 L 510 57 L 530 57 L 550 57' stroke='%2310B981' stroke-width='3' fill='none'/%3E%3Cpath d='M 50 210 L 70 170 L 90 140 L 110 115 L 130 105 L 150 95 L 170 85 L 190 77 L 210 72 L 230 68 L 250 65 L 270 60 L 290 56 L 310 52 L 330 48 L 350 46 L 370 44 L 390 42 L 410 40 L 430 39 L 450 38 L 470 37 L 490 36 L 510 35 L 530 34 L 550 33' stroke='%23EF4444' stroke-width='3' fill='none'/%3E%3Ccircle cx='550' cy='65' r='4' fill='%233B82F6'/%3E%3Ccircle cx='550' cy='57' r='4' fill='%2310B981'/%3E%3Ccircle cx='550' cy='33' r='4' fill='%23EF4444'/%3E%3Crect x='400' y='15' width='140' height='60' rx='5' ry='5' fill='white' stroke='%23ccc' stroke-width='1'/%3E%3Ccircle cx='420' cy='30' r='5' fill='%233B82F6'/%3E%3Ctext x='435' y='35' fill='%23333' font-family='Arial' font-size='12'%3EInceptionV3%3C/text%3E%3Ccircle cx='420' cy='50' r='5' fill='%2310B981'/%3E%3Ctext x='435' y='55' fill='%23333' font-family='Arial' font-size='12'%3EEfficientNetB0%3C/text%3E%3Ccircle cx='420' cy='70' r='5' fill='%23EF4444'/%3E%3Ctext x='435' y='75' fill='%23333' font-family='Arial' font-size='12'%3EResNet50%3C/text%3E%3C/svg%3E`,
  
  lossChart: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='300' viewBox='0 0 600 300'%3E%3Crect width='600' height='300' fill='white'/%3E%3Cpath d='M 50 250 L 550 250' stroke='%23ccc' stroke-width='1'/%3E%3Cpath d='M 50 200 L 550 200' stroke='%23ccc' stroke-width='1'/%3E%3Cpath d='M 50 150 L 550 150' stroke='%23ccc' stroke-width='1'/%3E%3Cpath d='M 50 100 L 550 100' stroke='%23ccc' stroke-width='1'/%3E%3Cpath d='M 50 50 L 550 50' stroke='%23ccc' stroke-width='1'/%3E%3Ctext x='40' y='255' text-anchor='end' fill='%23666' font-family='Arial' font-size='12'%3E0.0%3C/text%3E%3Ctext x='40' y='205' text-anchor='end' fill='%23666' font-family='Arial' font-size='12'%3E0.2%3C/text%3E%3Ctext x='40' y='155' text-anchor='end' fill='%23666' font-family='Arial' font-size='12'%3E0.4%3C/text%3E%3Ctext x='40' y='105' text-anchor='end' fill='%23666' font-family='Arial' font-size='12'%3E0.6%3C/text%3E%3Ctext x='40' y='55' text-anchor='end' fill='%23666' font-family='Arial' font-size='12'%3E0.8%3C/text%3E%3Ctext x='50' y='270' text-anchor='middle' fill='%23666' font-family='Arial' font-size='12'%3E0%3C/text%3E%3Ctext x='150' y='270' text-anchor='middle' fill='%23666' font-family='Arial' font-size='12'%3E10%3C/text%3E%3Ctext x='250' y='270' text-anchor='middle' fill='%23666' font-family='Arial' font-size='12'%3E20%3C/text%3E%3Ctext x='350' y='270' text-anchor='middle' fill='%23666' font-family='Arial' font-size='12'%3E30%3C/text%3E%3Ctext x='450' y='270' text-anchor='middle' fill='%23666' font-family='Arial' font-size='12'%3E40%3C/text%3E%3Ctext x='550' y='270' text-anchor='middle' fill='%23666' font-family='Arial' font-size='12'%3E50%3C/text%3E%3Ctext x='300' y='295' text-anchor='middle' fill='%23666' font-family='Arial' font-size='14'%3EEpochs%3C/text%3E%3Ctext transform='rotate(-90 15 175)' x='15' y='175' text-anchor='middle' fill='%23666' font-family='Arial' font-size='14'%3ELoss%3C/text%3E%3Cpath d='M 50 50 L 70 70 L 90 90 L 110 105 L 130 120 L 150 130 L 170 140 L 190 150 L 210 160 L 230 167 L 250 173 L 270 178 L 290 182 L 310 186 L 330 190 L 350 193 L 370 196 L 390 199 L 410 202 L 430 204 L 450 206 L 470 208 L 490 210 L 510 212 L 530 213 L 550 214' stroke='%233B82F6' stroke-width='3' fill='none'/%3E%3Cpath d='M 50 60 L 70 90 L 90 110 L 110 125 L 130 135 L 150 145 L 170 153 L 190 160 L 210 167 L 230 173 L 250 178 L 270 183 L 290 187 L 310 191 L 330 194 L 350 197 L 370 200 L 390 202 L 410 204 L 430 206 L 450 208 L 470 209 L 490 210 L 510 211 L 530 212 L 550 213' stroke='%2310B981' stroke-width='3' fill='none'/%3E%3Cpath d='M 50 40 L 70 80 L 90 100 L 110 115 L 130 125 L 150 135 L 170 143 L 190 150 L 210 155 L 230 160 L 250 165 L 270 169 L 290 173 L 310 176 L 330 179 L 350 181 L 370 183 L 390 185 L 410 187 L 430 189 L 450 190 L 470 191 L 490 192 L 510 193 L 530 194 L 550 194' stroke='%23EF4444' stroke-width='3' fill='none'/%3E%3Ccircle cx='550' cy='214' r='4' fill='%233B82F6'/%3E%3Ccircle cx='550' cy='213' r='4' fill='%2310B981'/%3E%3Ccircle cx='550' cy='194' r='4' fill='%23EF4444'/%3E%3Crect x='400' y='15' width='140' height='60' rx='5' ry='5' fill='white' stroke='%23ccc' stroke-width='1'/%3E%3Ccircle cx='420' cy='30' r='5' fill='%233B82F6'/%3E%3Ctext x='435' y='35' fill='%23333' font-family='Arial' font-size='12'%3EInceptionV3%3C/text%3E%3Ccircle cx='420' cy='50' r='5' fill='%2310B981'/%3E%3Ctext x='435' y='55' fill='%23333' font-family='Arial' font-size='12'%3EEfficientNetB0%3C/text%3E%3Ccircle cx='420' cy='70' r='5' fill='%23EF4444'/%3E%3Ctext x='435' y='75' fill='%23333' font-family='Arial' font-size='12'%3EResNet50%3C/text%3E%3C/svg%3E`,
  
  barChart: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='300' viewBox='0 0 500 300'%3E%3Crect width='500' height='300' fill='white'/%3E%3Cpath d='M 50 250 L 450 250' stroke='%23ccc' stroke-width='1'/%3E%3Cpath d='M 50 210 L 450 210' stroke='%23ccc' stroke-width='1' stroke-dasharray='2,2'/%3E%3Cpath d='M 50 170 L 450 170' stroke='%23ccc' stroke-width='1' stroke-dasharray='2,2'/%3E%3Cpath d='M 50 130 L 450 130' stroke='%23ccc' stroke-width='1' stroke-dasharray='2,2'/%3E%3Cpath d='M 50 90 L 450 90' stroke='%23ccc' stroke-width='1' stroke-dasharray='2,2'/%3E%3Cpath d='M 50 50 L 450 50' stroke='%23ccc' stroke-width='1' stroke-dasharray='2,2'/%3E%3Ctext x='40' y='255' text-anchor='end' fill='%23666' font-family='Arial' font-size='12'%3E0%25%3C/text%3E%3Ctext x='40' y='215' text-anchor='end' fill='%23666' font-family='Arial' font-size='12'%3E20%25%3C/text%3E%3Ctext x='40' y='175' text-anchor='end' fill='%23666' font-family='Arial' font-size='12'%3E40%25%3C/text%3E%3Ctext x='40' y='135' text-anchor='end' fill='%23666' font-family='Arial' font-size='12'%3E60%25%3C/text%3E%3Ctext x='40' y='95' text-anchor='end' fill='%23666' font-family='Arial' font-size='12'%3E80%25%3C/text%3E%3Ctext x='40' y='55' text-anchor='end' fill='%23666' font-family='Arial' font-size='12'%3E100%25%3C/text%3E%3Crect x='100' y='100' width='50' height='150' fill='%233B82F6' rx='4'/%3E%3Crect x='225' y='70' width='50' height='180' fill='%2310B981' rx='4'/%3E%3Crect x='350' y='17' width='50' height='233' fill='%23EF4444' rx='4'/%3E%3Ctext x='125' y='270' text-anchor='middle' fill='%23333' font-family='Arial' font-size='12'%3EInceptionV3%3C/text%3E%3Ctext x='250' y='270' text-anchor='middle' fill='%23333' font-family='Arial' font-size='12'%3EEfficientNetB0%3C/text%3E%3Ctext x='375' y='270' text-anchor='middle' fill='%23333' font-family='Arial' font-size='12'%3EResNet50%3C/text%3E%3Ctext x='125' y='90' text-anchor='middle' fill='white' font-family='Arial' font-size='14' font-weight='bold'%3E79.9%25%3C/text%3E%3Ctext x='250' y='60' text-anchor='middle' fill='white' font-family='Arial' font-size='14' font-weight='bold'%3E94.0%25%3C/text%3E%3Ctext x='375' y='30' text-anchor='middle' fill='white' font-family='Arial' font-size='14' font-weight='bold'%3E99.3%25%3C/text%3E%3Ctext x='250' y='295' text-anchor='middle' fill='%23666' font-family='Arial' font-size='14'%3EModel Architecture%3C/text%3E%3Ctext transform='rotate(-90 15 175)' x='15' y='175' text-anchor='middle' fill='%23666' font-family='Arial' font-size='14'%3EAccuracy%3C/text%3E%3C/svg%3E`
};

export default function Results() {
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
      id="results" 
      ref={sectionRef}
      className="py-20 bg-gray-50 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center">Experimental Results</h2>
          
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="mb-12">
              <h3 className="flex items-center text-xl font-semibold text-green-700 mb-6">
                <BarChart size={22} className="mr-2" /> Performance Comparison
              </h3>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Model</th>
                      <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Accuracy</th>
                      <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Precision</th>
                      <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recall</th>
                      <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">F1 Score</th>
                      <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Training Time</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-4 whitespace-nowrap font-medium text-gray-900">InceptionV3</td>
                      <td className="px-4 py-4 whitespace-nowrap text-gray-700">79.9%</td>
                      <td className="px-4 py-4 whitespace-nowrap text-gray-700">80.3%</td>
                      <td className="px-4 py-4 whitespace-nowrap text-gray-700">79.5%</td>
                      <td className="px-4 py-4 whitespace-nowrap text-gray-700">79.9%</td>
                      <td className="px-4 py-4 whitespace-nowrap text-gray-700">1h 22m</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 whitespace-nowrap font-medium text-gray-900">EfficientNetB0</td>
                      <td className="px-4 py-4 whitespace-nowrap text-gray-700">94.0%</td>
                      <td className="px-4 py-4 whitespace-nowrap text-gray-700">93.7%</td>
                      <td className="px-4 py-4 whitespace-nowrap text-gray-700">94.2%</td>
                      <td className="px-4 py-4 whitespace-nowrap text-gray-700">94.0%</td>
                      <td className="px-4 py-4 whitespace-nowrap text-gray-700">55m</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 whitespace-nowrap font-medium text-gray-900">ResNet50</td>
                      <td className="px-4 py-4 whitespace-nowrap font-medium text-green-700">99.3%</td>
                      <td className="px-4 py-4 whitespace-nowrap font-medium text-green-700">99.1%</td>
                      <td className="px-4 py-4 whitespace-nowrap font-medium text-green-700">99.5%</td>
                      <td className="px-4 py-4 whitespace-nowrap font-medium text-green-700">99.3%</td>
                      <td className="px-4 py-4 whitespace-nowrap text-gray-700">1h 10m</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-8 mb-10">
              <h3 className="flex items-center text-xl font-semibold text-green-700 mb-6">
                <GitCompare size={22} className="mr-2" /> Training and Validation Metrics
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-green-700 mb-3 text-center">Accuracy vs Epochs</h4>
                  <img 
                    src={charts.accuracyChart}
                    alt="Accuracy vs Epochs Chart" 
                    className="w-full border border-gray-200 rounded-lg"
                  />
                </div>
                
                <div>
                  <h4 className="font-medium text-green-700 mb-3 text-center">Loss vs Epochs</h4>
                  <img 
                    src={charts.lossChart}
                    alt="Loss vs Epochs Chart" 
                    className="w-full border border-gray-200 rounded-lg"
                  />
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-green-700 mb-3 text-center">Final Model Accuracy Comparison</h4>
                <div className="flex justify-center">
                  <img 
                    src={charts.barChart}
                    alt="Model Accuracy Comparison Chart" 
                    className="max-w-full border border-gray-200 rounded-lg"
                  />
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-8">
              <h3 className="flex items-center text-xl font-semibold text-green-700 mb-6">
                <Award size={22} className="mr-2" /> Key Findings
              </h3>
              
              <div className="space-y-4">
                <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-600">
                  <h4 className="font-medium text-green-800 mb-2">ResNet50 Superiority</h4>
                  <p className="text-gray-700">
                    ResNet50 significantly outperformed other models with an impressive 99.3% accuracy, 
                    suggesting that its architecture with residual connections is particularly well-suited 
                    for snake classification tasks.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
                  <h4 className="font-medium text-blue-800 mb-2">EfficientNetB0 Balance</h4>
                  <p className="text-gray-700">
                    EfficientNetB0 achieved a strong 94% accuracy while requiring the least training time, 
                    making it a good choice for applications where computational efficiency is important.
                  </p>
                </div>
                
                <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-amber-600">
                  <h4 className="font-medium text-amber-800 mb-2">InceptionV3 Limitations</h4>
                  <p className="text-gray-700">
                    Despite its complexity, InceptionV3 underperformed with only 79.9% accuracy, suggesting 
                    that the inception architecture may not be optimal for distinguishing the specific 
                    features that differentiate venomous from non-venomous snakes.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-600">
                  <h4 className="font-medium text-purple-800 mb-2">Convergence Rate</h4>
                  <p className="text-gray-700">
                    ResNet50 not only achieved the highest accuracy but also converged faster, reaching 
                    over 95% accuracy by epoch 25, whereas other models required more epochs to reach 
                    their peak performance.
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