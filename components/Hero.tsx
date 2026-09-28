import React from 'react';

interface HeroProps {
  name?: string;
  title?: string;
  description?: string;
  profileImage?: string;
  onViewProjects?: () => void;
  onContact?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  name = 'Shawn Yu',
  title = 'AI/ML Engineer & Full-Stack Developer',
  description = 'Building intelligent systems and scalable applications. Passionate about machine learning, cloud architecture, and creating products that solve real problems.',
  profileImage,
  onViewProjects,
  onContact,
}) => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="flex flex-col gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {name}
            </h1>
            <p className="text-xl sm:text-2xl text-blue-600 font-semibold">{title}</p>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={onViewProjects}
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Projects
            </button>
            <button
              onClick={onContact}
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Profile Image */}
        {profileImage && (
          <div className="flex justify-center md:justify-end">
            <div className="relative w-80 h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50 shadow-xl">
              <img
                src={profileImage}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Placeholder when no image */}
        {!profileImage && (
          <div className="flex justify-center md:justify-end">
            <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center shadow-xl">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-4xl text-blue-600">👤</span>
                </div>
                <p className="text-gray-600 mt-4 text-sm">Profile Image</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
