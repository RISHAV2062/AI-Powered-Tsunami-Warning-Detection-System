import React from 'react';
import { Clock, Users, Code, Award } from 'lucide-react';

interface StatProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
}

const StatCard = ({ icon, value, label, description }: StatProps) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-start">
      <div className="mr-4">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div>
        <div className="text-3xl font-bold text-gray-900">{value}</div>
        <div className="text-lg font-medium text-blue-600 mb-2">{label}</div>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  </div>
);

const Statistics = () => {
  return (
    <section id="stats" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Real Impact</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our accessibility toolkit has made a significant difference in the productivity
            and capabilities of visually impaired developers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <StatCard 
            icon={<Users className="h-6 w-6 text-blue-600" />}
            value="330+"
            label="Visually Impaired Developers"
            description="Active users who rely on our toolkit for their daily programming tasks across various industries."
          />
          
          <StatCard 
            icon={<Clock className="h-6 w-6 text-blue-600" />}
            value="40%"
            label="Time Saved"
            description="Average reduction in code navigation time, dramatically improving development efficiency."
          />
          
          <StatCard 
            icon={<Code className="h-6 w-6 text-blue-600" />}
            value="24,000+"
            label="Lines of Code Written"
            description="Our users have collectively written thousands of lines of code with the help of our toolkit."
          />
          
          <StatCard 
            icon={<Award className="h-6 w-6 text-blue-600" />}
            value="1st Place"
            label="Vanderbilt Hackathon"
            description="Recognized for innovation and impact on accessibility in software development."
          />
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Before & After Comparison</h3>
                <p className="text-blue-100 max-w-xl">
                  See the dramatic improvement in development efficiency for visually impaired developers after implementing our toolkit.
                </p>
              </div>
              
              <div className="w-full md:w-auto">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-sm text-gray-500">Before</div>
                      <div className="text-xl font-bold text-gray-900">23 min</div>
                      <div className="text-sm text-gray-600">Average Navigation Time</div>
                    </div>
                    
                    <div className="mx-4 text-gray-400">vs</div>
                    
                    <div>
                      <div className="text-sm text-gray-500">After</div>
                      <div className="text-xl font-bold text-green-600">13.8 min</div>
                      <div className="text-sm text-gray-600">Average Navigation Time</div>
                    </div>
                  </div>
                  
                  <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;