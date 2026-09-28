import React from 'react';

interface BadgeProps {
  text: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'outline';
}

export const Badge: React.FC<BadgeProps> = ({
  text,
  icon,
  variant = 'default',
}) => {
  const baseStyles =
    'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-colors';

  const variantStyles = {
    default: 'bg-blue-100 text-blue-900',
    outline: 'border border-gray-300 text-gray-700 bg-white',
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]}`}>
      {icon && <span className="w-4 h-4 flex items-center justify-center">{icon}</span>}
      <span>{text}</span>
    </span>
  );
};
