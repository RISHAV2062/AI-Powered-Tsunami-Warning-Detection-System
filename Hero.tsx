import React from 'react';
import { Code, Braces, Volume2, Keyboard } from 'lucide-react';

const Hero = () => {
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="inline-block mb-4 px-4 py-1 bg-blue-100 rounded-full">
              <span className="text-blue-800 font-medium text-sm">1st Place Vanderbilt Hackathon</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Code4Good <br />
              <span className="text-blue-600">Accessibility Toolkit</span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 max-w-lg">
              Empowering visually impaired developers with audio code syntax, 
              braille support, and intuitive shortcuts.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#download" 
                className="px-8 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center font-medium"
              >
                Download Extension
              </a>
              <a 
                href="#demo" 
                className="px-8 py-4 bg-white text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors text-center font-medium"
              >
                See Demo
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <div className="ml-4 text-sm text-gray-500">extension.ts</div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="text-gray-400 mr-4 font-mono">1</div>
                  <code className="text-purple-600">import</code>
                  <code className="text-gray-800 ml-2">* as vscode from 'vscode';</code>
                </div>
                
                <div className="flex items-start">
                  <div className="text-gray-400 mr-4 font-mono">2</div>
                  <code className="text-purple-600">import</code>
                  <code className="text-gray-800 ml-2">&#123; AudioConverter &#125; from './audio';</code>
                </div>
                
                <div className="flex items-start">
                  <div className="text-gray-400 mr-4 font-mono">3</div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-gray-400 mr-4 font-mono">4</div>
                  <code className="text-purple-600">export function</code>
                  <code className="text-blue-600 ml-2">activate</code>
                  <code className="text-gray-800">(context: vscode.ExtensionContext) &#123;</code>
                </div>
                
                <div className="flex items-start">
                  <div className="text-gray-400 mr-4 font-mono">5</div>
                  <code className="text-gray-800 ml-8">const converter = new AudioConverter();</code>
                </div>
                
                <div className="flex items-start">
                  <div className="text-gray-400 mr-4 font-mono">6</div>
                  <code className="text-gray-800 ml-8">context.subscriptions.push(</code>
                </div>
                
                <div className="flex items-start">
                  <div className="text-gray-400 mr-4 font-mono">7</div>
                  <code className="text-gray-800 ml-12">vscode.commands.registerCommand(</code>
                </div>
                
                <div className="flex items-start">
                  <div className="text-gray-400 mr-4 font-mono">8</div>
                  <code className="text-gray-800 ml-16">'code4good.convertToAudio',</code>
                </div>
                
                <div className="flex items-start">
                  <div className="text-gray-400 mr-4 font-mono">9</div>
                  <code className="text-gray-800 ml-16">() => converter.convertCurrentSelection()</code>
                </div>
                
                <div className="flex items-start">
                  <div className="text-gray-400 mr-4 font-mono">10</div>
                  <code className="text-gray-800 ml-12">)</code>
                </div>
                
                <div className="flex items-start">
                  <div className="text-gray-400 mr-4 font-mono">11</div>
                  <code className="text-gray-800 ml-8">);</code>
                </div>
                
                <div className="flex items-start">
                  <div className="text-gray-400 mr-4 font-mono">12</div>
                  <code className="text-gray-800">&#125;</code>
                </div>
              </div>
              
              <div className="mt-4 flex items-center space-x-6">
                <div className="flex items-center">
                  <Volume2 className="h-4 w-4 text-blue-600 animate-pulse" />
                  <span className="ml-2 text-sm text-gray-600">Audio Active</span>
                </div>
                <div className="flex items-center">
                  <Keyboard className="h-4 w-4 text-blue-600" />
                  <span className="ml-2 text-sm text-gray-600">Ctrl+Shift+A</span>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <Braces className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;