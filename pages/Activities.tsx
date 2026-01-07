import React from 'react';
import { activities } from '../data/activities';

const Activities: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl font-bold text-gray-900 mb-4">Our Activities</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover how we translate our philosophy into action through our three main pillars of engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {activities.map((activity) => (
            <div 
              key={activity.id} 
              className="group bg-sand-beige rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={activity.imageUrl} 
                  alt={activity.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-forest-green text-white text-xs px-2 py-1 rounded-md uppercase tracking-wide">
                    {activity.id}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3 group-hover:text-soil-brown transition-colors">
                  {activity.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                  {activity.description}
                </p>
                <div className="mt-auto pt-6 border-t border-gray-200">
                  <span className="text-sm font-semibold text-forest-green cursor-pointer hover:underline">
                    Learn more &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;