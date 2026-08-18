import { useEffect, useState } from 'react';

export default function Loader({ fadeOut }: { fadeOut: boolean }) {
  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gray-950 transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative flex items-center justify-center w-full max-w-2xl px-6">
        <svg viewBox="0 0 600 200" className="w-full h-auto">
          <text 
            x="50%" 
            y="50%" 
            dominantBaseline="middle" 
            textAnchor="middle" 
            className="signature-text text-6xl md:text-8xl"
          >
            Aman Sajid
          </text>
        </svg>
      </div>
    </div>
  );
}
