// Core data types for CrossFit Comet

export interface Program {
  id: string;
  title: string;
  description: string;
  features: string[];
  level: 'beginner' | 'intermediate' | 'advanced' | 'all';
  image?: string;
}

export interface Coach {
  id: string;
  name: string;
  title: string;
  bio: string;
  certifications: string[];
  specialties: string[];
  image?: string;
}

export interface Stat {
  id: string;
  value: string | number;
  label: string;
  suffix?: string;
}

export interface WOD {
  id: string;
  date: string;
  title: string;
  description: string;
  movements: string[];
  type: 'amrap' | 'fortime' | 'emom' | 'strength' | 'endurance';
  duration?: string;
  rounds?: number;
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  period: 'month' | 'week' | 'day';
  features: string[];
  popular?: boolean;
  dropIn?: boolean;
}

export interface ClassSchedule {
  id: string;
  day: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
  time: string;
  className: string;
  coach?: string;
  capacity?: number;
}
