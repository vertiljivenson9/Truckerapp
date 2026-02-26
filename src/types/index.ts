export interface Freelancer {
  id: string;
  name: string;
  title: string;
  location: string;
  country: string;
  rating: number;
  reviews: number;
  hourlyRate: number;
  skills: string[];
  category: string;
  image: string;
  completedJobs: number;
  description: string;
  isPro: boolean;
  isVerified: boolean;
}

export interface Job {
  id: string;
  title: string;
  description: string;
  budget: {
    min: number;
    max: number;
    type: 'fixed' | 'hourly' | 'monthly';
  };
  category: string;
  skills: string[];
  postedAt: string;
  proposals: number;
  client: {
    name: string;
    country: string;
    verified: boolean;
  };
  status: 'open' | 'closed';
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  freelancerCount: number;
  jobCount: number;
  color: string;
}

export interface Stat {
  label: string;
  value: string;
  description: string;
}
