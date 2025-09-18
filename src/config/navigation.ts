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
  { href: 'https://github.com/ofekcohen', label: 'GitHub', icon: 'github' },
  { href: 'https://linkedin.com/in/ofekcohen', label: 'LinkedIn', icon: 'linkedin' },
  { href: 'mailto:ofek.cohen@email.com', label: 'Email', icon: 'email' },
];

// Additional footer links
export const footerLinksConfig: NavItem[] = [
  { href: '/resume', label: 'Resume' },
];

export type NavigationConfig = typeof navigationConfig;
export type SocialLinksConfig = typeof socialLinksConfig;
export type FooterLinksConfig = typeof footerLinksConfig;
