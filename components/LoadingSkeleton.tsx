'use client';

interface LoadingSkeletonProps {
  className?: string;
  variant?: 'image' | 'card' | 'text';
}

export default function LoadingSkeleton({ className = '', variant = 'card' }: LoadingSkeletonProps) {
  const baseClasses = 'animate-pulse bg-gradient-to-r from-navy-800 via-navy-700 to-navy-800 bg-[length:200%_100%]';

  if (variant === 'image') {
    return (
      <div className={`${baseClasses} ${className}`}>
        <div className="h-full w-full bg-navy-800/50" />
      </div>
    );
  }

  if (variant === 'text') {
    return (
      <div className={`${baseClasses} h-4 rounded ${className}`} />
    );
  }

  return (
    <div className={`${baseClasses} rounded-xl ${className}`}>
      <div className="h-full w-full bg-navy-800/50 rounded-xl" />
    </div>
  );
}

