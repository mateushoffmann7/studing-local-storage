'use client';

import { createContext, useEffect, useState } from 'react';
import { PostProps, PropsAddPost, ProviderProps } from '../types/types';
import { isServer } from '@/isServer';

const STORAGE_KEY = 'postContextContent';

export const ContextAddPost = createContext<PropsAddPost | null>(null);

export function PostProvider({ children }: ProviderProps) {
  const [post, setPost] = useState<PostProps[]>(() => {
    //se for server - retorna array vazio
    if (isServer) return [];
    //.parse converte em array, se tiver dados array com obj
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(post));
  }, [post]);

  return (
    <ContextAddPost.Provider value={{ post, setPost }}>
      {children}
    </ContextAddPost.Provider>
  );
}
