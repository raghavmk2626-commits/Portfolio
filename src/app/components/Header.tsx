import { Menu } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-semibold text-xl">Portfolio</div>
        
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('education')} className="text-gray-600 hover:text-gray-900 transition-colors">
            Education
          </button>
          <button onClick={() => scrollToSection('work')} className="text-gray-600 hover:text-gray-900 transition-colors">
            Work
          </button>
          <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-gray-900 transition-colors">
            Skills
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-gray-900 transition-colors">
            Contact
          </button>
        </div>

        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </nav>
    </header>
  );
}