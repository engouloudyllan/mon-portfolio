import React from 'react';

interface StackProgressionProps {
  value: number;       // de 0 à 100
  size?: number;       // taille totale en pixels
  strokeWidth?: number; // épaisseur du trait
  colorClass?: string;  // couleur de la progression (ex: text-indigo-500)
}

const Pourcentage: React.FC<StackProgressionProps> = ({
  value,
  size = 60,
  strokeWidth = 6,
  colorClass = "text-blue-500"
}) => {
  // Rayon du cercle (on retire la moitié de l'épaisseur pour ne pas déborder du SVG)
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  
  // Calcul de l'avancement
  const offset = circumference - (value / 100) * circumference;

  return (
    <div 
      className="relative flex items-center justify-center" 
      style={{ width: size, height: size }}
    >
      <svg 
        className="transform -rotate-90" 
        width={size} 
        height={size}
      >
        {/* Cercle de fond (Piste grise) */}
        <circle
          className="text-gray-200 dark:text-gray-800"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        {/* Cercle de progression (Barre active) */}
        <circle
          className={`${colorClass} transition-all duration-700 ease-in-out`}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round" // Donne cet aspect arrondi moderne
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>
      
      {/* Valeur centrale (Optionnelle, supprime le span si tu veux juste le cercle) */}
      <span className="absolute text-[10px] font-semibold text-gray-700 dark:text-gray-300 font-mono">
        {value}%
      </span>
    </div>
  );
};

export default Pourcentage;