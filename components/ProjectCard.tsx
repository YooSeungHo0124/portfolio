import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Badge } from './Badge';

interface ProjectCardProps {
  title?: string;
  description?: string;
  techStack?: any[];
  technologies?: any[];
  links?: any;
  period?: any;
  featured?: boolean;
  category?: string;
  image?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  technologies,
  links = {},
  period,
  featured = false,
  category,
  image,
}) => {
  return (
    <div
      className={`rounded-xl overflow-hidden border transition-all hover:shadow-lg ${
        featured
          ? 'border-blue-200 bg-gradient-to-br from-blue-50 to-white shadow-md'
          : 'border-gray-200 bg-white hover:border-gray-300'
      }`}
    >
      {/* Image */}
      {image && (
        <div className="h-48 overflow-hidden bg-gray-100">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {!image && (
        <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
          <span className="text-gray-400 text-4xl">📦</span>
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex flex-col gap-4">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl font-semibold text-gray-900 leading-tight">
              {title}
            </h3>
            {featured && (
              <div className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-semibold whitespace-nowrap">
                Featured
              </div>
            )}
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-600">
            {category && <span className="font-medium text-gray-700">{category}</span>}
            {period && (
              <span>
                {typeof period === 'string'
                  ? period
                  : `${period.start} - ${period.end}`}
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-2">
          {(techStack || technologies || []).map((tech: any) => (
            <Badge key={tech?.name} text={tech?.name} icon={tech?.icon} variant="outline" />
          ))}
        </div>

        {/* Links */}
        {(links.github || links.demo) && (
          <div className="flex gap-3 pt-4 border-t border-gray-200">
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Code</span>
              </a>
            )}
            {links.demo && (
              <a
                href={links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Demo</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
