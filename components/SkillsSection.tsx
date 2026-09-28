import React from 'react';
import { Badge } from './Badge';

interface SkillCategory {
  name: string;
  skills: Array<{
    name: string;
    icon?: React.ReactNode;
  }>;
}

interface SkillsSectionProps {
  categories?: SkillCategory[];
  title?: string;
  description?: string;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({
  categories = [],
  title = 'Skills & Expertise',
  description = 'Technologies and tools I work with',
}) => {
  const defaultCategories: SkillCategory[] = [
    {
      name: 'Languages',
      skills: [
        { name: 'Python' },
        { name: 'TypeScript' },
        { name: 'JavaScript' },
        { name: 'SQL' },
      ],
    },
    {
      name: 'Frontend',
      skills: [
        { name: 'React' },
        { name: 'Tailwind CSS' },
        { name: 'Next.js' },
      ],
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Node.js' },
        { name: 'FastAPI' },
        { name: 'PostgreSQL' },
      ],
    },
    {
      name: 'DevOps & Cloud',
      skills: [
        { name: 'Docker' },
        { name: 'AWS' },
        { name: 'Kubernetes' },
      ],
    },
    {
      name: 'ML/AI',
      skills: [
        { name: 'PyTorch' },
        { name: 'TensorFlow' },
        { name: 'Hugging Face' },
      ],
    },
  ];

  const displayCategories = categories.length > 0 ? categories : defaultCategories;

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-gray-50 rounded-2xl">
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">{title}</h2>
          {description && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
          )}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayCategories.map((category) => (
            <div key={category.name} className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill.name}
                    text={skill.name}
                    icon={skill.icon}
                    variant="default"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
