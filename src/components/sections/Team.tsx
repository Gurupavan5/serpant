import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
   name: "Pruthvi Raj Vadla",
    role: "software engineer",
    bio: "Expert in software development and machine learning. Responsible for the overall architecture and implementation of the project.",
    image: "./p.png",
  },
  {
     name: "Harika Rani Bodduluri",
    role: "Data Engineer",
    bio: "Specializes in data engineering and machine learning. Responsible for data collection, preprocessing, and model training.",
    image: "./h.png",
  },
  {
  name: "G V S P Kumar Appisetti",
    role: "full-stack developer",
    bio: "Specializes in building scalable web applications and seamless user experiences. Responsible for integrating front-end and back-end systems to ensure smooth functionality.",
    image: "./g.png",
    linkedin: "https://www.linkedin.com/in/g-v-s-p-kumar-appisetti-b6a70829a/",
    github: "https://github.com/Gurupavan5",
    email: "gappisetti@lamar.edu"
  }
];

export default function Team() {
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
      id="team" 
      ref={sectionRef}
      className="py-20 bg-cream-50 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center">Our Team</h2>
          
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
            Meet the researchers behind this project. Our team combines expertise in deep learning, 
            computer vision, and data science to develop effective snake classification models.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-green-700 font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-5">{member.bio}</p>
                  
                  <div className="flex space-x-4">
                    <a 
                      href={member.github} 
                      className="text-gray-400 hover:text-gray-700 transition-colors"
                      aria-label={`${member.name}'s Github`}
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={member.linkedin} 
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href={member.email} 
                      className="text-gray-400 hover:text-red-500 transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-white rounded-lg shadow-md p-6 md:p-8 text-center">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Acknowledgements</h3>
            <p className="text-gray-700">
              We would like to thank our academic advisors and the university's AI research lab for their 
              support and guidance throughout this project. We are also grateful to the Kaggle community 
              for providing the snake image dataset that made this research possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
