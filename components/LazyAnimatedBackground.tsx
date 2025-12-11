'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import LoadingSkeleton from './LoadingSkeleton';

const AnimatedBackground = dynamic(() => import('./AnimatedBackground'), {
  loading: () => <LoadingSkeleton variant="card" className="absolute inset-0" />,
  ssr: false,
});

export default function LazyAnimatedBackground() {
  return (
    <Suspense fallback={<LoadingSkeleton variant="card" className="absolute inset-0" />}>
      <AnimatedBackground />
    </Suspense>
  );
}

