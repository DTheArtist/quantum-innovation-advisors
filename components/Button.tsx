// filepath: /Users/dee/WorkingCode/quantum-innovation-advisors/components/Button.tsx
import React from 'react';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ href, children }) => {
  return (
    <a href={href} className="text-center text-teal-950 bg-beige-100 py-2 rounded block">
      {children}
    </a>
  );
};

export default Button;