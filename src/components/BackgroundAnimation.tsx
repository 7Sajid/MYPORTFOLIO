import { useEffect, useRef } from 'react';

export default function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let currentScrollFraction = 0;
    let targetScrollFraction = 0;

    // Resize canvas to fit screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Scroll handling
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      const maxScroll = scrollHeight - window.innerHeight;
      targetScrollFraction = maxScroll > 0 ? scrollTop / maxScroll : 0;
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Galaxy parameters
    const numStars = 2000;
    const a = 10; // Logarithmic spiral scale
    const b = 0.3; // Logarithmic spiral growth rate

    // Generate stars
    const stars = Array.from({ length: numStars }).map(() => {
      // 2 spiral arms (offset by PI)
      const arm = Math.random() > 0.5 ? 0 : Math.PI;
      // Bias theta towards 0 for a dense galactic core
      const theta = Math.pow(Math.random(), 2) * Math.PI * 6;
      
      // Scatter based on distance from center (larger scatter further out)
      const scatter = 0.4 * theta;
      const offsetX = (Math.random() - 0.5) * scatter * a;
      const offsetY = (Math.random() - 0.5) * scatter * a;

      // Color palette: mostly white/blueish, some yellowish
      const colorRand = Math.random();
      let color = '#ffffff';
      if (colorRand > 0.8) color = '#79c0ff'; // Electric Blue
      else if (colorRand > 0.6) color = '#ffd33d'; // Neon Yellow
      else if (colorRand > 0.95) color = '#39d353'; // Bright Cyan accent

      return {
        theta,
        arm,
        offsetX,
        offsetY,
        size: Math.random() * 1.5 + 0.3,
        twinkleSpeed: Math.random() * 2 + 0.5,
        twinklePhase: Math.random() * Math.PI * 2,
        color
      };
    });

    const draw = (time: number) => {
      // Smooth scroll interpolation
      currentScrollFraction += (targetScrollFraction - currentScrollFraction) * 0.1;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const t = time * 0.001; // convert to seconds
      // 60-second rotation
      const rotation = t * ((Math.PI * 2) / 60);

      // Zoom based on scroll (from 1x to 4x zoom)
      const minZoom = 1;
      const maxZoom = 4;
      // Use an exponential or ease-in curve for zoom to make it feel like diving in
      const zoom = minZoom + Math.pow(currentScrollFraction, 1.5) * (maxZoom - minZoom);

      ctx.save();
      // Center the galaxy
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.scale(zoom, zoom);
      ctx.rotate(rotation);

      // Draw core glow
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, 150);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.15)');
      gradient.addColorStop(0.2, 'rgba(121, 192, 255, 0.05)'); // Soft electric blue core
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(0, 0, 150, 0, Math.PI * 2);
      ctx.fill();

      // Draw stars
      stars.forEach(star => {
        // Logarithmic spiral formula: r = a * e^(b * theta)
        const r = a * Math.exp(b * star.theta);
        const currentAngle = star.theta + star.arm;

        const x = r * Math.cos(currentAngle) + star.offsetX;
        const y = r * Math.sin(currentAngle) + star.offsetY;

        // Twinkle effect
        const alpha = 0.4 + 0.6 * Math.abs(Math.sin(t * star.twinkleSpeed + star.twinklePhase));

        ctx.globalAlpha = alpha;
        ctx.fillStyle = star.color;
        ctx.beginPath();
        ctx.arc(x, y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.restore();

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-10 bg-white dark:bg-background flex items-center justify-center transition-colors duration-300 overflow-hidden">
      {/* Solid background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-100 dark:bg-[#0d1117] -z-10 transition-colors duration-300" />

      <canvas 
        ref={canvasRef} 
        className="w-full h-full object-cover opacity-60 dark:opacity-90 transition-opacity duration-300 mix-blend-difference dark:mix-blend-normal filter invert dark:invert-0"
      />
      
      {/* Light/Dark mode gradient overlays to blend with the rest of the page */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_35%_40%,_rgba(255,255,255,0.7)_0%,_rgba(255,255,255,0.95)_70%)] dark:bg-[radial-gradient(circle_at_35%_40%,_rgba(121,192,255,0.05)_0%,_rgba(13,17,23,0.9)_70%)] pointer-events-none z-10 transition-colors duration-300" />
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent dark:from-background dark:to-transparent z-10 transition-colors duration-300" />
    </div>
  );
}


