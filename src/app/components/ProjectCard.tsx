import { ArrowUpRight } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  year: string;
  link?: string;
}

export function ProjectCard({ title, description, image, tags, year, link }: ProjectCardProps) {
  const CardContent = () => (
    <>
      <div className="relative overflow-hidden aspect-[16/10] bg-gray-100">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {link && (
          <div className="absolute top-4 right-4 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowUpRight className="h-5 w-5" />
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl">{title}</h3>
          <span className="text-sm text-gray-500">{year}</span>
        </div>
        
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </div>
    </>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer">
          <CardContent />
        </Card>
      </a>
    );
  }

  return (
    <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300">
      <CardContent />
    </Card>
  );
}