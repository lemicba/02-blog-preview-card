import Card from './components/Card';
import imageBlog from '@/public/illustration-article.svg';

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center overflow-x-hidden bg-yellow font-figtree">
      <main className="flex justify-center">
        <Card
          image={imageBlog}
          tagName="Learning"
          date="21 Dec 2023"
          title="HTML & CSS foundations"
          description="These languages are the backbone of every website, defining structure,
          content, and presentation."
        />
      </main>
    </div>
  );
}
