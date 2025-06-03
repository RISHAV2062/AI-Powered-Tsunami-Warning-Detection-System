import React from 'react';
import { Github, Users, GitPullRequest, MessageSquare } from 'lucide-react';

const Community = () => {
  return (
    <section id="community" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Join Our Community</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Code4Good is built with and for visually impaired developers. Your contributions and
            feedback help us make programming more accessible for everyone.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <Github className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Open Source</h3>
            </div>
            
            <p className="text-gray-700 mb-6">
              Our project is completely open source. We welcome contributions from developers of all abilities and backgrounds to help improve the extension.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <GitPullRequest className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-gray-800">132 Pull Requests</span>
              </div>
              
              <div className="flex items-center">
                <Users className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-gray-800">87 Contributors</span>
              </div>
              
              <div className="flex items-center">
                <MessageSquare className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-gray-800">450+ GitHub Discussions</span>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors inline-flex items-center"
              >
                <Github className="h-5 w-5 mr-2" />
                View on GitHub
              </a>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Ways to Contribute</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Code Contributions</h4>
                <p className="text-gray-700">
                  Help us improve the extension by submitting pull requests for new features, bug fixes, or performance improvements.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Documentation</h4>
                <p className="text-gray-700">
                  Improve our guides and documentation to make the extension more accessible to new users.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Testing</h4>
                <p className="text-gray-700">
                  Test the extension in different environments and with different screen readers to ensure compatibility.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Feedback</h4>
                <p className="text-gray-700">
                  Share your experience using the extension and suggest improvements to make it more useful.
                </p>
              </div>
            </div>
            
            <div className="mt-8 bg-blue-50 p-6 rounded-md">
              <h4 className="font-medium text-blue-800 mb-3">Community Guidelines</h4>
              <p className="text-blue-700 mb-4">
                We're committed to creating an inclusive and welcoming community for all developers. Please read our community guidelines before contributing.
              </p>
              <a 
                href="#guidelines" 
                className="text-blue-600 font-medium hover:underline inline-flex items-center"
              >
                Read Guidelines
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Get Started?</h3>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#download" 
              className="px-8 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center font-medium"
            >
              Download Extension
            </a>
            <a 
              href="#contribute" 
              className="px-8 py-4 bg-white text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors text-center font-medium"
            >
              Contribute to Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;