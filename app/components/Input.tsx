'use client';

import { useContext, useState } from 'react';
import { ContextAddPost } from '../contexts/ContextAddPost';

export function Input() {
  const context = useContext(ContextAddPost);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  function handleAddPost(title: string, body: string) {
    if (title && body !== '') {
      context?.setPost([
        ...context.post,
        {
          id: context.post.length + 1,
          title: title,
          body: body,
        },
      ]);
      setTitle('');
      setBody('');
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="Title"
          placeholder="Digite um título"
          className="bg-red-400 rounded-md py-2 px-4 m-2 outline-2 outline-red-800 text-white placeholder:text-white/50
          w-96"
        />
      </div>
      <div>
        <textarea
          name="Body"
          onChange={(e) => setBody(e.target.value)}
          value={body}
          placeholder="Digite um post"
          className="bg-red-400 rounded-md py-2 px-4 m-2 outline-2 outline-red-800 text-white placeholder:text-white/50
          w-96 max-h-32 resize-none"
        />
      </div>
      <button
        className="py-1 px-2 bg-teal-300 rounded outline outline-indigo-400 cursor-pointer hover:bg-indigo-400 mt-4"
        onClick={() => handleAddPost(title, body)}
      >
        Adicionar
      </button>
    </div>
  );
}
