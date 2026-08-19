const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace Project Titles color
  content = content.replace(/dark:text-yellow-300/g, 'dark:text-secondary');
  content = content.replace(/text-amber-600/g, 'text-secondary');
  
  // Headers that were dark:text-green-100 -> electric blue
  content = content.replace(/dark:text-green-100/g, 'dark:text-primary');
  
  // Body text that was dark:text-green-50 or 200 or 300 -> electric blue with some opacity
  content = content.replace(/dark:text-green-50/g, 'dark:text-primary/90');
  content = content.replace(/dark:text-green-200/g, 'dark:text-primary/80');
  content = content.replace(/dark:text-green-300/g, 'dark:text-primary/70');
  content = content.replace(/dark:text-green-400/g, 'dark:text-primary/60');
  
  // Replace hover:bg-green-50 / hover:bg-green-100 to use primary or background
  content = content.replace(/hover:bg-green-50/g, 'hover:bg-primary/10');
  content = content.replace(/hover:bg-green-100/g, 'hover:bg-primary/15');
  
  // Replace border-green-600 to border-primary
  content = content.replace(/border-green-600/g, 'border-primary');
  content = content.replace(/text-green-700/g, 'text-primary');
  content = content.replace(/text-green-600/g, 'text-primary');
  content = content.replace(/bg-green-600/g, 'bg-primary');
  content = content.replace(/bg-green-100/g, 'bg-primary/20');
  
  fs.writeFileSync(filePath, content);
}

// Also update Hero.tsx specific classes for headers
let heroPath = path.join(dir, 'Hero.tsx');
let heroContent = fs.readFileSync(heroPath, 'utf8');
// Give "HELLO I AM RAFAT UL AMAN SAJID" neon yellow or cyan? 
// The prompt says "Project Titles: Neon Yellow/Gold", "Main text: Soft Electric Blue"
// Let's make the main Hero title Neon Yellow or Bright Cyan
heroContent = heroContent.replace(/text-gray-900 dark:text-primary\/90/, 'text-secondary dark:text-secondary drop-shadow-[0_0_15px_rgba(255,211,61,0.5)]');
fs.writeFileSync(heroPath, heroContent);

console.log('Update complete');
