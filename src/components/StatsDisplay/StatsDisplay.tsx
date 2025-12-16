import React from 'react';
import type { StatsDisplayProps } from '../types';

export const StatsDisplay: React.FC<StatsDisplayProps> = ({
  stats,
  showReadingTime = true
}) => {
  const minutes = Math.floor(stats.readingTime);
  const seconds = Math.round((stats.readingTime - minutes) * 60);

  return (
    <div className="grid grid-cols-3 gap-4 mt-6 text-center">
      <div className="p-4 bg-gray-100 rounded-lg">
        <h3 className="text-sm text-gray-500">Characters</h3>
        <p className="text-2xl font-bold">{stats.characterCount}</p>
      </div>

      <div className="p-4 bg-gray-100 rounded-lg">
        <h3 className="text-sm text-gray-500">Words</h3>
        <p className="text-2xl font-bold">{stats.wordCount}</p>
      </div>

      {showReadingTime && (
        <div className="p-4 bg-gray-100 rounded-lg">
          <h3 className="text-sm text-gray-500">Reading Time</h3>
          <p className="text-2xl font-bold">
            {minutes}:{seconds.toString().padStart(2, '0')}
          </p>
        </div>
      )}
    </div>
  );
};