import React, { useState } from 'react';
import { Volume2, Braille, Mic, Search, RefreshCw, SkipForward, SkipBack, Code2 } from 'lucide-react';

interface ShortcutProps {
  icon: React.ReactNode;
  keys: string[];
  description: string;
  isActive?: boolean;
  onClick: () => void;
}

const ShortcutCard = ({ icon, keys, description, isActive = false, onClick }: ShortcutProps) => (
  <div 
    className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
      isActive 
        ? 'bg-blue-600 text-white shadow-lg' 
        : 'bg-white text-gray-800 shadow-md hover:shadow-lg hover:translate-y-[-5px]'
    }`}
    onClick={onClick}
  >
    <div className="flex items-start">
      <div className={`mr-4 p-2 rounded-lg ${isActive ? 'bg-blue-500' : 'bg-blue-100'}`}>
        <div className={isActive ? 'text-white' : 'text-blue-600'}>
          {icon}
        </div>
      </div>
      
      <div>
        <div className="flex items-center flex-wrap gap-2 mb-3">
          {keys.map((key, index) => (
            <span 
              key={index} 
              className={`px-3 py-1 rounded-md font-mono text-sm ${
                isActive 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              {key}
            </span>
          ))}
        </div>
        
        <p className={isActive ? 'text-blue-100' : 'text-gray-700'}>
          {description}
        </p>
      </div>
    </div>
  </div>
);

const KeyboardShortcuts = () => {
  const [activeShortcut, setActiveShortcut] = useState<number | null>(null);

  const shortcuts = [
    {
      icon: <Volume2 className="h-5 w-5" />,
      keys: ['Ctrl', 'Shift', 'A'],
      description: "Convert current selection to audio and play it."
    },
    {
      icon: <Braille className="h-5 w-5" />,
      keys: ['Ctrl', 'Shift', 'B'],
      description: "Toggle braille output for the current file."
    },
    {
      icon: <Mic className="h-5 w-5" />,
      keys: ['Ctrl', 'Alt', 'V'],
      description: "Start voice command mode for hands-free coding."
    },
    {
      icon: <Search className="h-5 w-5" />,
      keys: ['Ctrl', 'Shift', 'F'],
      description: "Auditory search through the current file or project."
    },
    {
      icon: <Code2 className="h-5 w-5" />,
      keys: ['Alt', 'C'],
      description: "Read code structure and hierarchy of current file."
    },
    {
      icon: <SkipForward className="h-5 w-5" />,
      keys: ['Alt', 'Right'],
      description: "Jump to next function or code block with audio feedback."
    },
    {
      icon: <SkipBack className="h-5 w-5" />,
      keys: ['Alt', 'Left'],
      description: "Jump to previous function or code block with audio feedback."
    },
    {
      icon: <RefreshCw className="h-5 w-5" />,
      keys: ['Ctrl', 'Alt', 'R'],
      description: "Refresh audio mapping for the current file."
    }
  ];

  return (
    <section id="shortcuts" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Intuitive Keyboard Shortcuts</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our carefully designed shortcuts reduce navigation time by 40%, allowing
            visually impaired developers to code more efficiently.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {shortcuts.map((shortcut, index) => (
            <ShortcutCard 
              key={index}
              icon={shortcut.icon}
              keys={shortcut.keys}
              description={shortcut.description}
              isActive={activeShortcut === index}
              onClick={() => setActiveShortcut(index === activeShortcut ? null : index)}
            />
          ))}
        </div>
        
        <div className="mt-16 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Customize Your Shortcuts</h3>
          <p className="text-gray-700 mb-6">
            Every developer has unique preferences. Our extension allows you to customize all shortcuts
            to create a personalized coding experience that works best for your workflow.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
            <code className="text-sm">
              <pre className="whitespace-pre-wrap">
{`// In settings.json
{
  "code4good.shortcuts": {
    "convertToAudio": "ctrl+shift+a",
    "toggleBraille": "ctrl+shift+b",
    "voiceCommand": "ctrl+alt+v",
    // Add more custom shortcuts here
  }
}`}
              </pre>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyboardShortcuts;