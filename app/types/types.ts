import { ReactNode } from 'react';

export interface PostProps {
  id: number;
  title: string;
  body: string;
}

export interface PropsAddPost {
  post: PostProps[];
  setPost: (post: PostProps[]) => void;
}

export interface ProviderProps {
  children: ReactNode;
}
