'use client';

import { useEffect, useState } from 'react';
import { Footer } from './Footer';
import { Input } from './Input';
import { Posts } from './Posts';

export function Header() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h1 className="text-2xl font-bold">Lista de Posts</h1>
      <Input />
      <Posts />
      <Footer />
    </div>
  );
}
