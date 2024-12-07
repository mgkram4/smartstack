export interface BaseApp {
    name: string;
    price: string;
    stack: string;
    features: string[];
    hosting: string;
  }
  
  export interface AddOn {
    name: string;
    price: string;
    includes: string;
  }
  
  // Specific app types for different tiers
  export interface BasicApp extends BaseApp {
    price: string; // Range: $3,000-$5,000
  }
  
  export interface BusinessApp extends BaseApp {
    price: string; // Range: $8,000-$15,000
  }
  
  export interface EnterpriseApp extends BaseApp {
    price: string; // Range: $25,000+
  }
  
  // Configuration types
  export interface PricingTier {
    title: string;
    apps: BaseApp[];
    highlighted?: boolean;
  }
  
  export interface CTAButton {
    text: string;
    icon?: React.ReactNode;
    variant: 'primary' | 'secondary';
  }
  
  // Props types for components
  export interface AppTierProps {
    title: string;
    apps: BaseApp[];
    highlighted?: boolean;
  }
  
  export interface AddOnSectionProps {
    addOns: AddOn[];
  }
  
  export interface CTASectionProps {
    title: string;
    description: string;
    buttons: CTAButton[];
  }