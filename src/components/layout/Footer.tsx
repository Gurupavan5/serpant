import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Snake Classification Project</h3>
            <p className="text-gray-400 mb-4">
              Deep learning approach for classifying snakes as venomous or non-venomous.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#methodology" className="text-gray-400 hover:text-white transition-colors">Methodology</a>
              </li>
              <li>
                <a href="#results" className="text-gray-400 hover:text-white transition-colors">Results</a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-white transition-colors">Team</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Download Report</a>
              </li>
              <li>
                <a href="#references" className="text-gray-400 hover:text-white transition-colors">Research References</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Kaggle Dataset</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Snake Classification Research Team. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}