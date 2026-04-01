import React from 'react';

interface StackProgressionProps {
  label: string;
  value: number; // de 0 à 100
  size?: number; // taille du cercle en pixels
  strokeWidth?: number; // épaisseur du trait
  colorClass?: string; // couleur Tailwind pour la barre
}

const StackProgression: React.FC<StackProgressionProps> = ({
  label,
  value,
  size = 60,
  strokeWidth = 6,
  colorClass = "text-blue-500"
}) => {
  // Calculs pour le cercle SVG
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex items-center justify-between w-full min-w-75 p-2 bg-primary-fixed/5 rounded-sm max-useCase2:min-w-[71vw] mx-auto">
      {/* Label à gauche */}
      <span className="text-lg font-medium text-[#6b7280] dark:text-gray-200">
        {label}
      </span>

      {/* Progression à droite */}
      <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
        <svg className="transform -rotate-90" width={size} height={size}>
          {/* Cercle de fond (piste) */}
          <circle
            className="text-gray-200 dark:text-gray-700"
            strokeWidth={strokeWidth}
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
          {/* Cercle de progression */}
          <circle
            className={`${colorClass} transition-all duration-500 ease-out`}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
        </svg>
        
        {/* Texte au centre du cercle */}
        <span className="absolute text-[10px] font-bold text-gray-600 dark:text-gray-300">
          {value}%
        </span>
      </div>
    </div>
  );
};

export default StackProgression;
