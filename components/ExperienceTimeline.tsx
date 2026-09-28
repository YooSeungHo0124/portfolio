import React from 'react';

interface ExperienceTimelineProps {
  experiences?: any[];
  title?: string;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  experiences = [],
  title = 'Experience',
}) => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="space-y-12">
        {/* Header */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">{title}</h2>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative">
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 to-transparent" />
              )}

              {/* Timeline Dot */}
              <div className="flex gap-6">
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center border-4 border-white">
                    <div className="w-3 h-3 bg-blue-600 rounded-full" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2 pb-8">
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {exp.role}
                      </h3>
                      <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
                    </div>

                    <p className="text-sm text-gray-500 font-medium">{exp.period}</p>

                    <p className="text-gray-700 leading-relaxed">{exp.description}</p>

                    {exp.highlights && exp.highlights.length > 0 && (
                      <ul className="space-y-1 pt-2">
                        {exp.highlights.map((highlight: any, idx: number) => (
                          <li
                            key={idx}
                            className="text-sm text-gray-600 flex items-start gap-2"
                          >
                            <span className="text-blue-500 font-bold mt-0.5">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {experiences.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">Experience entries will be displayed here</p>
          </div>
        )}
      </div>
    </section>
  );
};
