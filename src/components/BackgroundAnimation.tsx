import { useEffect, useRef } from 'react';

const availableFrames = [
  ...Array.from({ length: 116 }, (_, i) => i + 1),
  ...Array.from({ length: 4 }, (_, i) => i + 119),
  ...Array.from({ length: 4 }, (_, i) => i + 125),
  ...Array.from({ length: 4 }, (_, i) => i + 131),
  ...Array.from({ length: 4 }, (_, i) => i + 137),
  ...Array.from({ length: 50 }, (_, i) => i + 143)
];

const frameCount = availableFrames.length;

const currentFrame = (index: number) => {
  const frameNum = availableFrames[index];
  return `/video_frames_30fps/frame_${frameNum.toString().padStart(6, '0')}.png`;
};

export default function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    // Reset images array on mount
    imagesRef.current = [];

    // Preload images
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        if (i === 0) { 
          canvas.width = img.width;
          canvas.height = img.height;
          context.drawImage(img, 0, 0);
        }
      };
      imagesRef.current.push(img);
    }

    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
      
      const scrollFraction = maxScrollTop > 0 ? scrollTop / maxScrollTop : 0;
      
      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollFraction * frameCount)
      );
      
      requestAnimationFrame(() => {
        const img = imagesRef.current[frameIndex];
        if (img && img.complete) {
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(img, 0, 0);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-10 bg-white dark:bg-background flex items-center justify-center transition-colors duration-300">
      {/* Solid background to ensure no white flash, dark/light variations */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-100 dark:bg-[#050806] -z-10 transition-colors duration-300" />

      <canvas 
        ref={canvasRef} 
        className="w-full h-full object-cover object-[center_35%] opacity-30 dark:opacity-70 transition-opacity duration-300"
      />
      
      {/* Light/Dark mode gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_35%_40%,_rgba(255,255,255,0.7)_0%,_rgba(255,255,255,0.95)_70%)] dark:bg-[radial-gradient(circle_at_35%_40%,_rgba(0,208,96,0.1)_0%,_rgba(11,15,12,0.9)_70%)] pointer-events-none z-10 transition-colors duration-300" />
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent dark:from-background dark:to-transparent z-10 transition-colors duration-300" />
    </div>
  );
}
