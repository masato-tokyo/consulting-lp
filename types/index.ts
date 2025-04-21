export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  onClick?: () => void;
}