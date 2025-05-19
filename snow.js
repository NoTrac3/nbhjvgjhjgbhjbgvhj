// snow.js - Creates red snowflakes
document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.zIndex = '-1';
  canvas.style.pointerEvents = 'none';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const flakes = [];
  const flakeCount = 100;

  // Create snowflakes
  for (let i = 0; i < flakeCount; i++) {
    flakes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 1,
      density: Math.random() * flakeCount,
      speed: Math.random() * 1 + 0.5,
      opacity: Math.random() * 0.5 + 0.3
    });
  }

  function drawFlakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw each flake
    flakes.forEach(flake => {
      ctx.beginPath();
      ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 60, 60, ${flake.opacity})`;
      ctx.shadowBlur = 10;
      ctx.shadowColor = 'rgba(255, 60, 60, 0.8)';
      ctx.fill();
    });
    
    moveFlakes();
  }

  function moveFlakes() {
    flakes.forEach(flake => {
      flake.y += flake.speed;
      if (flake.y > canvas.height) {
        flake.y = 0;
        flake.x = Math.random() * canvas.width;
      }
    });
  }

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resizeCanvas);
  setInterval(drawFlakes, 30);
});