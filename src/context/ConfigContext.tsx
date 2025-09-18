'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import * as config from '@/config';

/**
 * Provider Pattern: Configuration Context
 * Provides global access to configuration without prop drilling
 */

type ConfigContextType = typeof config;

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

interface ConfigProviderProps {
  children: ReactNode;
}

export function ConfigProvider({ children }: ConfigProviderProps) {
  return (
    <ConfigContext.Provider value={config}>
      {children}
    </ConfigContext.Provider>
  );
}

/**
 * Custom hook to access configuration
 * Throws error if used outside of ConfigProvider
 */
export function useConfig() {
  const context = useContext(ConfigContext);
  if (context === undefined) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
}

/**
 * Specialized hooks for specific config sections
 */
export function usePersonalConfig() {
  const { personalConfig } = useConfig();
  return personalConfig;
}

export function useSiteConfig() {
  const { siteConfig } = useConfig();
  return siteConfig;
}

export function useNavigationConfig() {
  const { navigationConfig, socialLinksConfig, footerLinksConfig } = useConfig();
  return { navigationConfig, socialLinksConfig, footerLinksConfig };
}

export function useContactConfig() {
  const { contactReasonsConfig, contactMethodsConfig } = useConfig();
  return { contactReasonsConfig, contactMethodsConfig };
}

export function useSkillsConfig() {
  const { skillsConfig, homePageSkills } = useConfig();
  return { skillsConfig, homePageSkills };
}

export function useAboutConfig() {
  const { timelineConfig, interestsConfig } = useConfig();
  return { timelineConfig, interestsConfig };
}
