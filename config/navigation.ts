export interface NavigationConfig {
  url: string;
  label: string;
  isActive: boolean;
}

export const navigationConfig: NavigationConfig[] = [
  { url: "/", label: "Work", isActive: false },
  { url: "/about", label: "About", isActive: false },
  { url: "/play", label: "Play", isActive: false },
  { url: "/resume", label: "Resume", isActive: false },
  { url: "/contact", label: "Contact", isActive: false },
];
