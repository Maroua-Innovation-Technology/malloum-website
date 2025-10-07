import { LucideIcon } from 'lucide-react';

export interface Feature {
  icon: string;
  title: string;
  description: string;
  details?: string[];
}

export interface Step {
  number: number;
  title: string;
  description: string;
  example?: string;
  details?: string[];
}

export interface Impact {
  icon: string;
  title: string;
  description: string;
  stats?: string;
  testimonial?: Testimonial;
}

export interface Testimonial {
  text: string;
  author: string;
  role?: string;
  avatar?: string;
}

export interface Stat {
  value: string;
  label: string;
  color?: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface ContactInfo {
  address: string;
  email: string;
  phone: string;
  socialMedia: SocialMedia;
}

export interface SocialMedia {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
}

export interface FormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface TeamMember {
  name: string;
  role: string;
  emoji: string;
  bio?: string;
}