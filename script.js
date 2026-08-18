const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

// Defining the exact frames available to avoid 404s
const availableFrames = [
  ...Array.from({ length: 116 }, (_, i) => i + 1),
  ...Array.from({ length: 4 }, (_, i) => i + 119),
  ...Array.from({ length: 4 }, (_, i) => i + 125),
  ...Array.from({ length: 4 }, (_, i) => i + 131),
  ...Array.from({ length: 4 }, (_, i) => i + 137),
  ...Array.from({ length: 50 }, (_, i) => i + 143)
];

const frameCount = availableFrames.length;
const images = [];
let imagesLoaded = 0;

const currentFrame = index => {
  const frameNum = availableFrames[index];
  return `./video_frames_30fps/frame_${frameNum.toString().padStart(6, '0')}.png`;
};

const preloadImages = () => {
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    img.onload = () => {
        imagesLoaded++;
        // Initialize canvas size and draw first frame when the first image loads
        if (i === 0) { 
            canvas.width = img.width;
            canvas.height = img.height;
            context.drawImage(img, 0, 0);
        }
    };
    images.push(img);
  }
};

preloadImages();

window.addEventListener('scroll', () => {  
  const scrollTop = document.documentElement.scrollTop;
  const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
  
  // Calculate scroll progress (0 to 1)
  const scrollFraction = scrollTop / maxScrollTop;
  
  // Map progress to frame index
  const frameIndex = Math.min(
    frameCount - 1,
    Math.floor(scrollFraction * frameCount)
  );
  
  requestAnimationFrame(() => updateImage(frameIndex))
});

const updateImage = index => {
  if (images[index] && images[index].complete) {
    // Clear canvas before drawing (optional, but good for transparency if any)
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[index], 0, 0);
  }
}
