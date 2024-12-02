import React from 'react';

export const ProfileImage = () => {
  return (
    <div className="w-24 h-24 bg-white rounded-full shadow-md overflow-hidden">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 120 120"
        preserveAspectRatio="xMidYMid meet"
        className="bg-white"
      >
        <circle cx="60" cy="60" r="58" fill="#E6E9F4" />
        <g transform="translate(20, 20)">
          <path
            d="M40 0C17.909 0 0 17.909 0 40s17.909 40 40 40 40-17.909 40-40S62.091 0 40 0z"
            fill="#E6E9F4"
          />
          <path
            d="M40 9.412c8.517 0 15.294 6.777 15.294 15.294S48.517 40 40 40s-15.294-6.777-15.294-15.294S31.483 9.412 40 9.412zM16.471 70.588C16.471 56.847 27.318 46 41.059 46h-2.118c13.741 0 24.588 10.847 24.588 24.588v2.824C63.529 87.153 52.682 98 38.941 98h2.118c-13.741 0-24.588-10.847-24.588-24.588v-2.824z"
            fill="#9BA3B7"
          />
        </g>
      </svg>
    </div>
  );
};
