import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "This extension has completely transformed how I approach programming. The audio feedback makes it so much easier to understand code structure, and I'm now able to code faster than ever before.",
    author: "Sarah Johnson",
    role: "Software Engineer",
    company: "Microsoft"
  },
  {
    quote: "As someone who lost their sight mid-career, I was worried my programming days were over. Code4Good has not only kept me in the industry but made me more productive than I was before.",
    author: "Michael Chen",
    role: "Backend Developer",
    company: "Salesforce"
  },
  {
    quote: "The keyboard shortcuts are incredibly intuitive. I've reduced my navigation time dramatically, which means I can focus more on the actual coding rather than figuring out where I am in the file.",
    author: "Alex Rodriguez",
    role: "Full-Stack Developer",
    company: "Independent"
  },
  {
    quote: "Teaching programming to visually impaired students used to be challenging. With Code4Good, my students can now understand code structure through audio patterns, making learning to code accessible for everyone.",
    author: "Dr. Emily Patel",
    role: "Computer Science Professor",
    company: "Stanford University"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Developer Stories</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Hear from visually impaired developers who have transformed their coding
            experience with our accessibility toolkit.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 md:p-12 shadow-lg">
            <div className="absolute top-8 left-8 opacity-20">
              <Quote className="h-24 w-24 text-blue-300" />
            </div>
            
            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-gray-800 italic mb-8">
                "{testimonials[currentIndex].quote}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {testimonials[currentIndex].author.charAt(0)}
                </div>
                
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">{testimonials[currentIndex].author}</div>
                  <div className="text-gray-600">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;