export interface NavigationConfig {
  url: string;
  label: string;
  isActive: boolean;
}

export const navigationConfig: NavigationConfig[] = [
  { url: "/", label: "Work", isActive: false },
  { url: "/about", label: "About", isActive: false },
  { url: "/play", label: "Play", isActive: false },
  { url: "/notes", label: "Notes", isActive: false },
  { url: "/contact", label: "Contact", isActive: false },
];
