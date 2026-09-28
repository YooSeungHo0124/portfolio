import React from 'react';
import { ProjectCard } from './ProjectCard';

interface ProjectsGridProps {
  projects?: any[];
  groupByCategory?: boolean;
  featuredFirst?: boolean;
  columns?: 1 | 2 | 3;
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({
  projects = [],
  groupByCategory = true,
  featuredFirst = true,
  columns = 2,
}) => {
  // Sort projects: featured first, then by category
  const sortedProjects = React.useMemo(() => {
    let sorted = [...projects];

    if (featuredFirst) {
      sorted.sort((a, b) => {
        if (a.featured === b.featured) return 0;
        return a.featured ? -1 : 1;
      });
    }

    if (groupByCategory) {
      sorted.sort((a, b) => {
        if (a.category === b.category) return 0;
        return (a.category || '').localeCompare(b.category || '');
      });
    }

    return sorted;
  }, [projects, featuredFirst, groupByCategory]);

  // Group by category if needed
  const groupedProjects = React.useMemo(() => {
    if (!groupByCategory) {
      return { 'All Projects': sortedProjects };
    }

    const groups: Record<string, any[]> = {};
    sortedProjects.forEach((project) => {
      const category = project.category || 'Other';
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(project);
    });

    return groups;
  }, [sortedProjects, groupByCategory]);

  const gridColsClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  };

  if (sortedProjects.length === 0) {
    return (
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <p className="text-gray-600 text-lg">Projects will be displayed here</p>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="space-y-12">
        {Object.entries(groupedProjects).map(([category, categoryProjects]) => (
          <div key={category}>
            {groupByCategory && (
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                {category}
              </h2>
            )}
            <div className={`grid ${gridColsClass[columns]} gap-6`}>
              {categoryProjects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
