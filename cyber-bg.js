// cyber-bg.js - Creates the cyberpunk grid background
document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.zIndex = '-1';
  canvas.style.opacity = '0.7';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Grid settings
  const gridSize = 40;
  const lineWidth = 0.3;
  const glowIntensity = 0.1;

  function drawGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw vertical lines
    for (let x = 0; x < canvas.width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.strokeStyle = `rgba(255, 60, 60, ${glowIntensity})`;
      ctx.lineWidth = lineWidth;
      ctx.stroke();
      
      // Glow effect
      const gradient = ctx.createLinearGradient(x, 0, x + gridSize/2, 0);
      gradient.addColorStop(0, 'rgba(255, 60, 60, 0.3)');
      gradient.addColorStop(1, 'rgba(255, 60, 60, 0)');
      ctx.strokeStyle = gradient;
      ctx.lineWidth = lineWidth * 3;
      ctx.stroke();
    }
    
    // Draw horizontal lines
    for (let y = 0; y < canvas.height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.strokeStyle = `rgba(255, 60, 60, ${glowIntensity})`;
      ctx.lineWidth = lineWidth;
      ctx.stroke();
      
      // Glow effect
      const gradient = ctx.createLinearGradient(0, y, 0, y + gridSize/2);
      gradient.addColorStop(0, 'rgba(255, 60, 60, 0.3)');
      gradient.addColorStop(1, 'rgba(255, 60, 60, 0)');
      ctx.strokeStyle = gradient;
      ctx.lineWidth = lineWidth * 3;
      ctx.stroke();
    }
  }

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawGrid();
  }

  window.addEventListener('resize', resizeCanvas);
  drawGrid();
});