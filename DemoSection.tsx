import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Code, RefreshCw } from 'lucide-react';

const codeExample = `function calculateArea(width, height) {
  if (width <= 0 || height <= 0) {
    throw new Error("Dimensions must be positive");
  }
  return width * height;
}

const area = calculateArea(5, 10);
console.log(\`The area is \${area} square units\`);`;

const DemoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const [highlightedSyntax, setHighlightedSyntax] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const togglePlay = () => {
    if (isPlaying) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    } else {
      // Simulate audio playback by highlighting lines
      intervalRef.current = window.setInterval(() => {
        setCurrentLine(prev => {
          const lines = codeExample.split('\n');
          return prev < lines.length - 1 ? prev + 1 : 0;
        });
      }, 2000) as unknown as number;
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const resetDemo = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsPlaying(false);
    setCurrentLine(0);
  };

  const toggleSyntaxHighlight = () => {
    setHighlightedSyntax(!highlightedSyntax);
  };

  const codeLines = codeExample.split('\n');

  return (
    <section id="demo" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">See It In Action</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Experience how our extension converts code to audio patterns,
            making programming accessible for visually impaired developers.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
          <div className="lg:w-1/2 bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <div className="ml-4 text-sm text-gray-500">example.js</div>
            </div>
            
            <div className="font-mono text-sm mb-6 overflow-x-auto">
              {codeLines.map((line, index) => (
                <div 
                  key={index}
                  className={`py-1 ${currentLine === index ? 'bg-blue-100 pl-2 rounded' : ''}`}
                >
                  {highlightedSyntax ? (
                    <span dangerouslySetInnerHTML={{ 
                      __html: line
                        .replace(/function|return|const|if|throw new Error/g, match => `<span class="text-purple-600">${match}</span>`)
                        .replace(/calculateArea/g, match => `<span class="text-blue-600">${match}</span>`)
                        .replace(/"[^"]*"/g, match => `<span class="text-green-600">${match}</span>`)
                        .replace(/console\.log/g, match => `<span class="text-red-500">${match}</span>`)
                        .replace(/\$\{.*?\}/g, match => `<span class="text-yellow-600">${match}</span>`)
                    }} />
                  ) : (
                    line
                  )}
                </div>
              ))}
            </div>
            
            <div className="flex items-center justify-between border-t pt-4">
              <div className="flex items-center space-x-4">
                <button 
                  onClick={togglePlay} 
                  className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                >
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                </button>
                
                <button 
                  onClick={toggleMute} 
                  className="p-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors"
                >
                  {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                </button>
                
                <button 
                  onClick={resetDemo} 
                  className="p-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors"
                >
                  <RefreshCw className="h-5 w-5" />
                </button>
              </div>
              
              <button 
                onClick={toggleSyntaxHighlight} 
                className={`px-4 py-2 rounded-md transition-colors ${
                  highlightedSyntax 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <div className="flex items-center">
                  <Code className="h-4 w-4 mr-2" />
                  Syntax Highlighting
                </div>
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Audio Patterns</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 rounded-full bg-purple-600 mr-2"></div>
                    <span className="text-gray-800 font-medium">Keywords</span>
                  </div>
                  <div className={`h-8 bg-purple-100 rounded-md overflow-hidden ${isPlaying && !isMuted ? 'animate-pulse' : ''}`}>
                    <div className="h-full bg-purple-300 rounded-md" style={{ width: '60%' }}></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Higher pitched tones for language keywords</p>
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                    <span className="text-gray-800 font-medium">Function Names</span>
                  </div>
                  <div className={`h-8 bg-blue-100 rounded-md overflow-hidden ${isPlaying && !isMuted ? 'animate-pulse' : ''}`}>
                    <div className="h-full bg-blue-300 rounded-md" style={{ width: '75%' }}></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Medium tones with distinct pattern</p>
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 rounded-full bg-green-600 mr-2"></div>
                    <span className="text-gray-800 font-medium">Strings</span>
                  </div>
                  <div className={`h-8 bg-green-100 rounded-md overflow-hidden ${isPlaying && !isMuted ? 'animate-pulse' : ''}`}>
                    <div className="h-full bg-green-300 rounded-md" style={{ width: '40%' }}></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Smooth, continuous tones</p>
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-600 mr-2"></div>
                    <span className="text-gray-800 font-medium">Errors & Console</span>
                  </div>
                  <div className={`h-8 bg-red-100 rounded-md overflow-hidden ${isPlaying && !isMuted ? 'animate-pulse' : ''}`}>
                    <div className="h-full bg-red-300 rounded-md" style={{ width: '50%' }}></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Distinctive alert pattern</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Braille Output</h3>
              
              <div className="font-mono bg-gray-100 p-4 rounded-md">
                {currentLine < codeLines.length && (
                  <div className="flex flex-wrap gap-4">
                    {codeLines[currentLine].split(' ').map((word, idx) => (
                      <div key={idx} className="flex">
                        {[...word].map((char, charIdx) => (
                          <div key={charIdx} className="relative w-6 h-10 bg-white border border-gray-300 rounded-sm mx-0.5">
                            <div className="absolute grid grid-cols-2 gap-1 p-1 w-full h-full">
                              {[1, 2, 3, 4, 5, 6].map((dot) => {
                                // Simplified braille simulation - not actual braille encoding
                                const isActive = char.charCodeAt(0) % (dot + 1) === 0 || 
                                                 charIdx % (dot + 1) === 0;
                                return (
                                  <div 
                                    key={dot}
                                    className={`rounded-full ${isActive ? 'bg-blue-600' : 'bg-gray-200'}`}
                                  ></div>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Simulated braille output for the current line of code. Our actual implementation 
                uses standard braille patterns for programming symbols.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;