import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

export function NavLink({ href, children, isActive }: NavLinkProps) {
  return (
    <a
      href={href}
      className={`text-gray-600 hover:text-blue-600 transition-colors font-medium relative
        ${isActive ? 'text-blue-600' : ''}
      `}
    >
      {children}
      {isActive && (
        <div className="absolute bottom-[-2px] left-0 w-full h-0.5 bg-blue-600 transition-all duration-300" />
      )}
    </a>
  );
}