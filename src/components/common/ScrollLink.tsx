import React from 'react';

interface ScrollLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export function ScrollLink({ to, children, className }: ScrollLinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector(to);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}