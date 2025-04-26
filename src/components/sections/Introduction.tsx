import React, { useEffect, useRef } from 'react';

export default function Introduction() {
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
      id="introduction" 
      ref={sectionRef}
      className="py-20 bg-cream-50 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center">Introduction</h2>
          
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
              <div className="md:w-1/2">
                <img 
                  src="https://images.pexels.com/photos/2062316/pexels-photo-2062316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Snake bite medical emergency" 
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl md:text-2xl font-semibold text-green-700 mb-4">A Global Health Challenge</h3>
                <p className="text-gray-700 mb-4">
                  Snakebite envenoming is a significant public health issue that affects millions 
                  of people worldwide, particularly in rural communities of developing countries. 
                  According to the World Health Organization, an estimated 5.4 million snake bites 
                  occur each year, resulting in 1.8 to 2.7 million cases of envenoming.
                </p>
                <p className="text-gray-700">
                  With between 81,410 and 137,880 deaths and around three times as many amputations 
                  and other permanent disabilities each year, the burden of snakebite is immense.
                </p>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-green-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Critical Time Window</h4>
                  <p className="text-sm text-gray-700">
                    The first few hours after a snake bite are crucial for treatment. Identifying venomous 
                    snakes quickly can significantly improve survival rates.
                  </p>
                </div>
                <div className="bg-green-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Limited Access to Expertise</h4>
                  <p className="text-sm text-gray-700">
                    Many snake bite incidents occur in regions with limited access to herpetologists or 
                    snake identification experts, leading to treatment delays.
                  </p>
                </div>
                <div className="bg-green-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Misidentification Risks</h4>
                  <p className="text-sm text-gray-700">
                    Misidentifying a venomous snake as non-venomous (or vice versa) can lead to incorrect 
                    treatment protocols and potentially fatal outcomes.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-green-700 mb-4">The Role of Deep Learning</h3>
              <p className="text-gray-700 mb-4">
                Convolutional Neural Networks (CNNs) have demonstrated remarkable success in image 
                classification tasks. By leveraging these advanced deep learning techniques, we aim 
                to develop a system that can accurately classify snakes as venomous or non-venomous 
                from images, potentially saving lives by:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Providing rapid identification in emergency situations</li>
                <li>Enabling non-experts to make informed decisions about medical treatment</li>
                <li>Creating a tool accessible via mobile devices for remote areas</li>
                <li>Reducing misidentification rates compared to human judgment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}