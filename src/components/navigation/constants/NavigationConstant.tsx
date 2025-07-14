//#start region navigation-constants
export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];


export type NavItem = {
  label: string;
  href: string;
};
//#end region navigation-constants
