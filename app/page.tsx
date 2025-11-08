import { Header } from './components/Header';
import { PostProvider } from './contexts/ContextAddPost';

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col max-w-96 items-center justify-center">
      <PostProvider>
        <Header />
      </PostProvider>
    </div>
  );
}
