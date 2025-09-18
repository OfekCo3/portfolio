/**
 * Design Patterns Documentation and Examples
 * 
 * This file demonstrates the key design patterns used in the portfolio
 * to make it maintainable, scalable, and easy to configure.
 */

// =============================================================================
// 1. CONFIGURATION PATTERN
// =============================================================================

/**
 * Pattern: Centralized Configuration
 * Problem: Scattered hardcoded values throughout components
 * Solution: Single source of truth for all configurable data
 * 
 * Benefits:
 * - Easy to update content without touching component code
 * - Type-safe configuration with TypeScript
 * - Consistent data structure across the app
 * - Supports different environments (dev, staging, prod)
 */

// Example usage:
// import { personalConfig, siteConfig } from '@/config';
// <h1>{personalConfig.name}</h1>
// <title>{siteConfig.title}</title>

// =============================================================================
// 2. FACTORY PATTERN
// =============================================================================

/**
 * Pattern: Metadata Factory
 * Problem: Repetitive metadata creation for different pages
 * Solution: Factory function that creates consistent metadata objects
 * 
 * Benefits:
 * - DRY principle - no repeated metadata code
 * - Consistent SEO structure across all pages
 * - Easy to add global metadata changes
 * - Type-safe metadata generation
 */

// Example usage:
// export const metadata = metadataGenerators.page("About", "Learn more about me", "/about");

// =============================================================================
// 3. PROVIDER PATTERN
// =============================================================================

/**
 * Pattern: Configuration Provider (React Context)
 * Problem: Prop drilling configuration through multiple components
 * Solution: Context provider for global configuration access
 * 
 * Benefits:
 * - No prop drilling
 * - Global access to configuration
 * - Type-safe hooks for specific config sections
 * - Easy testing with custom providers
 */

// Example usage:
// const { personalConfig } = usePersonalConfig();
// const { navigationConfig } = useNavigationConfig();

// =============================================================================
// 4. BUILDER PATTERN (Advanced)
// =============================================================================

/**
 * Pattern: Configuration Builder
 * Problem: Complex configuration objects with many optional properties
 * Solution: Builder pattern for constructing configuration objects
 * 
 * This could be useful for dynamic configuration or user customization
 */

export class ConfigBuilder {
  private config: Record<string, unknown> = {};

  personal(data: Record<string, unknown>) {
    this.config.personal = data;
    return this;
  }

  site(data: Record<string, unknown>) {
    this.config.site = data;
    return this;
  }

  theme(data: Record<string, unknown>) {
    this.config.theme = data;
    return this;
  }

  build() {
    return this.config;
  }
}

// Example usage:
// const customConfig = new ConfigBuilder()
//   .personal({ name: "John Doe" })
//   .site({ title: "John's Portfolio" })
//   .build();

// =============================================================================
// 5. STRATEGY PATTERN
// =============================================================================

/**
 * Pattern: Theme Strategy
 * Problem: Different styling approaches for different themes
 * Solution: Strategy pattern for theme implementations
 */

export interface ThemeStrategy {
  primaryColor: string;
  secondaryColor: string;
  getButtonStyles(): string;
  getCardStyles(): string;
}

export class BlueTheme implements ThemeStrategy {
  primaryColor = "#3B82F6";
  secondaryColor = "#1E40AF";

  getButtonStyles(): string {
    return "bg-blue-600 hover:bg-blue-700 text-white";
  }

  getCardStyles(): string {
    return "bg-white shadow-lg hover:shadow-xl border border-blue-100";
  }
}

export class DarkTheme implements ThemeStrategy {
  primaryColor = "#374151";
  secondaryColor = "#111827";

  getButtonStyles(): string {
    return "bg-gray-700 hover:bg-gray-800 text-white";
  }

  getCardStyles(): string {
    return "bg-gray-800 shadow-lg hover:shadow-xl border border-gray-700";
  }
}

// =============================================================================
// 6. OBSERVER PATTERN (Advanced)
// =============================================================================

/**
 * Pattern: Configuration Observer
 * Problem: Need to react to configuration changes
 * Solution: Observer pattern for configuration updates
 * 
 * Useful for dynamic configuration or user preferences
 */

export class ConfigObserver {
  private listeners: Array<(config: Record<string, unknown>) => void> = [];

  subscribe(listener: (config: Record<string, unknown>) => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify(config: Record<string, unknown>) {
    this.listeners.forEach(listener => listener(config));
  }
}

// =============================================================================
// SUMMARY OF PATTERNS USED IN PORTFOLIO
// =============================================================================

/**
 * Current Implementation:
 * 
 * ✅ Configuration Pattern - All config files in src/config/
 * ✅ Factory Pattern - Metadata factory in src/lib/metadata.ts
 * ✅ Provider Pattern - ConfigContext for global access
 * 
 * Potential Future Enhancements:
 * 
 * 🔄 Builder Pattern - For dynamic configuration
 * 🔄 Strategy Pattern - For multiple themes
 * 🔄 Observer Pattern - For real-time config updates
 * 🔄 Decorator Pattern - For feature toggles
 * 🔄 Command Pattern - For undo/redo functionality
 * 
 * Benefits Achieved:
 * - 📦 Separation of Concerns
 * - 🔧 Easy Configuration
 * - 🛡️ Type Safety
 * - 🚀 Scalability
 * - 🧪 Testability
 * - 🔄 Maintainability
 */
