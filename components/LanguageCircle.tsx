// LanguageCircle.tsx
import React from 'react';
type Colors = string
interface LanguageCircleProps {
  language: any;
  colors: Colors;
}

const LanguageCircle: React.FC<LanguageCircleProps> = ({ language, colors }) => {
  const backgroundColor = colors[language] || "bg-gray-100";
  return <div className={`w-4 h-4 ${backgroundColor} rounded-full`} />;
};

export default LanguageCircle;
