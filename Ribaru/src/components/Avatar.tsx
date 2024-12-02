import React from 'react';

export const Avatar = () => {
  return (
    <div className="w-10 h-10 rounded-full overflow-hidden bg-[#E6E9F4]">
      <svg width="100%" height="100%" viewBox="0 0 100 100">
        {/* Background */}
        <circle cx="50" cy="50" r="50" fill="#E6E9F4" />
        
        {/* Face */}
        <g transform="translate(15, 15) scale(0.7)">
          {/* Face shape */}
          <path d="M50 10 C25 10 10 30 10 50 C10 75 30 90 50 90 C70 90 90 75 90 50 C90 30 75 10 50 10" fill="#4C3B3B" />
          
          {/* Hair */}
          <path d="M50 5 C30 5 15 20 15 35 C15 45 20 50 30 55 C35 40 65 40 70 55 C80 50 85 45 85 35 C85 20 70 5 50 5" fill="#1F1F1F" />
          
          {/* Glasses */}
          <path d="M30 45 C25 45 25 50 30 50 L40 50 C45 50 45 45 40 45 L30 45" fill="#444444" />
          <path d="M60 45 C55 45 55 50 60 50 L70 50 C75 50 75 45 70 45 L60 45" fill="#444444" />
          <path d="M45 47 L55 47" stroke="#444444" strokeWidth="2" />
          
          {/* Beard */}
          <path d="M30 65 C40 80 60 80 70 65" fill="#1F1F1F" />
          
          {/* Smile */}
          <path d="M40 60 C45 65 55 65 60 60" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          
          {/* Eyes */}
          <circle cx="35" cy="47" r="2.5" fill="#222222" />
          <circle cx="65" cy="47" r="2.5" fill="#222222" />
        </g>
      </svg>
    </div>
  );
};
