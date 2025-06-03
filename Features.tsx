import React from 'react';
import { Volume2, Brain as Braille, Keyboard, GitMerge, Users, Code2, GitPullRequest, Eye } from 'lucide-react';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: <Volume2 className="h-6 w-6 text-blue-600" />,
      title: "Code to Audio Conversion",
      description: "Translates code syntax into audio patterns, making it easy to understand code structure through sound."
    },
    {
      icon: <Braille className="h-6 w-6 text-blue-600" />,
      title: "Braille Enhancement",
      description: "Provides braille output for code elements, enabling tactile interpretation of programming syntax."
    },
    {
      icon: <Keyboard className="h-6 w-6 text-blue-600" />,
      title: "Intuitive Shortcuts",
      description: "Custom keyboard shortcuts designed specifically for visually impaired developers to navigate code efficiently."
    },
    {
      icon: <Code2 className="h-6 w-6 text-blue-600" />,
      title: "Syntax Highlighting Audio",
      description: "Different audio tones for different syntax elements, creating an auditory code map for developers."
    },
    {
      icon: <Eye className="h-6 w-6 text-blue-600" />,
      title: "Screen Reader Integration",
      description: "Seamlessly works with popular screen readers to provide comprehensive code narration."
    },
    {
      icon: <GitMerge className="h-6 w-6 text-blue-600" />,
      title: "Version Control Assistance",
      description: "Audio feedback for git operations, making version control accessible for visually impaired developers."
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "Community Driven",
      description: "Built with and for visually impaired developers, continuously improved through community feedback."
    },
    {
      icon: <GitPullRequest className="h-6 w-6 text-blue-600" />,
      title: "Open Source",
      description: "Completely open source, enabling contributions and extensions from developers worldwide."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Innovative Features</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our toolkit transforms how visually impaired developers interact with code, 
            making programming more accessible than ever before.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;