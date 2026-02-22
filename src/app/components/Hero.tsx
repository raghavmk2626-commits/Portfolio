import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const scrollToWork = () => {
    const element = document.getElementById('work');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6 inline-block px-4 py-2 bg-gray-100 rounded-full text-sm">
          👋 Available for freelance projects
        </div>
        
        <h1 className="text-5xl md:text-7xl mb-6 tracking-tight">
          Raghav M K
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
          UI/UX Designer creating delightful digital experiences through thoughtful design, user research, and creative problem-solving
        </p>

        <div className="flex items-center justify-center gap-4">
          <Button onClick={scrollToWork} size="lg" className="gap-2">
            View My Work
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" onClick={() => {
            const element = document.getElementById('contact');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
}