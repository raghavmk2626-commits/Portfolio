import { LucideIcon } from 'lucide-react';
import { Card } from './ui/card';

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function SkillCard({ icon: Icon, title, description }: SkillCardProps) {
  return (
    <Card className="p-6 border-0 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
}
