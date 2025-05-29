'use client';
import dynamic from 'next/dynamic';
import React from 'react';

const App2 = dynamic(() => import('../App2'), { ssr: false });

export default function Page() {
  return <App2 />;
}
