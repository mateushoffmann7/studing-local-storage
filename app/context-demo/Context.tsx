import { createContext, ReactNode, useState } from 'react';

interface PropsContext {
  post: Post[];
  addPost: (title: string, body: string) => void;
}

interface Post {
  id: number;
  title: string;
  body: string;
}

const Context = createContext<PropsContext | null>(null);

export function ContextProvider({ children }: { children: ReactNode }) {
  const [post, setPost] = useState<Post[]>([]);

  function addPost(title: string, body: string) {
    setPost([...post, { id: post.length, title, body }]);
  }

  <Context.Provider value={{ post, addPost }}>{children}</Context.Provider>;
}
