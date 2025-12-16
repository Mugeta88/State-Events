import React, { useState } from 'react';
import type { CharacterCounterProps, TextStats } from '../types';
import { TextInput } from '../TextInput/TextInput';
import { StatsDisplay } from '../StatsDisplay/StatsDisplay';

export const CharacterCounter: React.FC<CharacterCounterProps> = ({
  minWords = 0,
  maxWords,
  targetReadingTime
}) => {
  const [text, setText] = useState('');

  const calculateStats = (value: string): TextStats => {
    const characterCount = value.length;

    const wordsArray = value
      .trim()
      .split(/\s+/)
      .filter(Boolean);

    const wordCount = wordsArray.length;


    const readingTime = wordCount / 200;

    return {
      characterCount,
      wordCount,
      readingTime
    };
  };

  const stats = calculateStats(text);

  const isBelowMin = stats.wordCount < minWords;
  const isAboveMax = maxWords !== undefined && stats.wordCount > maxWords;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <TextInput onTextChange={setText} />

      <StatsDisplay stats={stats} />

      {(minWords || maxWords) && (
        <div className="mt-4 text-sm text-gray-600">
          Min: {minWords}
          {maxWords && ` | Max: ${maxWords}`}
        </div>
      )}

      {(isBelowMin || isAboveMax) && (
        <div className="mt-2 text-sm font-medium text-red-500">
          {isBelowMin && `You need at least ${minWords} words.`}
          {isAboveMax && ` You have exceeded the maximum word count.`}
        </div>
      )}

      {targetReadingTime && (
        <div className="mt-2 text-sm text-gray-600">
          Target reading time: {targetReadingTime} min
        </div>
      )}
    </div>
  );
};