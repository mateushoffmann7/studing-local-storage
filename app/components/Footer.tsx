'use client';

import { useContext } from 'react';
import { ContextAddPost } from '../contexts/ContextAddPost';

export function Footer() {
  const context = useContext(ContextAddPost);

  return (
    <div>
      <h3>
        {context?.post.length}{' '}
        {(context?.post?.length ?? 0) > 1 ? 'posts' : 'post'}
      </h3>
    </div>
  );
}
