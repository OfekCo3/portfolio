import { contactMethodsConfig } from './contact';

export interface NavItem {
  href: string;
  label: string;
}

export interface SocialLink {
  href: string;
  label: string;
  icon: 'github' | 'linkedin' | 'twitter' | 'email' | 'website';
}

export const navigationConfig: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export const socialLinksConfig: SocialLink[] = [
  { href: contactMethodsConfig.github.href, label: contactMethodsConfig.github.title, icon: 'github' },
  { href: contactMethodsConfig.linkedin.href, label: contactMethodsConfig.linkedin.title, icon: 'linkedin' },
  { href: contactMethodsConfig.email.href, label: contactMethodsConfig.email.title, icon: 'email' },
];


export type NavigationConfig = typeof navigationConfig;
export type SocialLinksConfig = typeof socialLinksConfig;
