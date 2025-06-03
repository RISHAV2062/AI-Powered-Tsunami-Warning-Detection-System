export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface KeyboardShortcut {
  keys: string[];
  description: string;
  icon: string;
}

export interface Statistic {
  value: string;
  label: string;
  description: string;
  icon: string;
}