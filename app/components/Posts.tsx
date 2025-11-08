'use client';

import { useContext } from 'react';
import { ContextAddPost } from '../contexts/ContextAddPost';

export function Posts() {
  const context = useContext(ContextAddPost);

  function handleDeleteItem(index: number) {
    const newPost = context?.post.filter((item) => item.id !== index) || [];
    context?.setPost(newPost);
  }

  return (
    <div>
      {context?.post.map((item) => {
        return (
          <div key={`${item.id}`}>
            <div
              onClick={() => handleDeleteItem(item.id)}
              className="bg-red-200 my-4 rounded p-2 cursor-pointer min-w-96 text-center"
            >
              <h1 className="font-bold text-xl">{item.title}</h1>
              <p>{item.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
