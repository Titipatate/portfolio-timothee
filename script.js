(function () {
  "use strict";

  const canvas = document.getElementById("particle-canvas");
  const ctx = canvas.getContext("2d");
  let particles = [];
  let animationId;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.radius = Math.random() * 2 + 1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(88, 166, 255, 0.8)";
      ctx.shadowBlur = 10;
      ctx.shadowColor = "rgba(88, 166, 255, 0.5)";
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  function createParticles() {
    const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }

  function drawConnections() {
    const maxDistance = 150;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          const opacity = (1 - distance / maxDistance) * 0.3;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(88, 166, 255, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle) => {
      particle.update();
      particle.draw();
    });
    drawConnections();
    animationId = requestAnimationFrame(animate);
  }

  function createPrintLines() {
    const container = document.body;
    const lineCount = 8;
    for (let i = 0; i < lineCount; i++) {
      const line = document.createElement("div");
      line.className = "print-line";
      line.style.top = Math.random() * 100 + "%";
      line.style.width = Math.random() * 400 + 300 + "px";
      line.style.animationDuration = Math.random() * 3 + 4 + "s";
      line.style.animationDelay = Math.random() * 5 + "s";
      container.appendChild(line);
    }
  }

  function createPrintLayers() {
    const container = document.body;
    const layerCount = 6;
    for (let i = 0; i < layerCount; i++) {
      const layer = document.createElement("div");
      layer.className = "print-layer";
      const size = Math.random() * 150 + 100;
      layer.style.width = size + "px";
      layer.style.height = size * 0.6 + "px";
      layer.style.left = Math.random() * 100 + "%";
      layer.style.top = Math.random() * 100 + "%";
      layer.style.animationDelay = i * 1.5 + "s";
      container.appendChild(layer);
    }
  }

  function createHotends() {
    const container = document.body;
    const hotendCount = 4;
    for (let i = 0; i < hotendCount; i++) {
      const hotend = document.createElement("div");
      hotend.className = "hotend";
      hotend.style.left = Math.random() * 100 + "%";
      hotend.style.top = Math.random() * 100 + "%";
      hotend.style.animationDelay = Math.random() * 2 + "s";
      container.appendChild(hotend);
    }
  }

  function createFilamentDrops() {
    const container = document.body;
    const dropCount = 10;
    for (let i = 0; i < dropCount; i++) {
      const drop = document.createElement("div");
      drop.className = "filament-drop";
      drop.style.left = Math.random() * 100 + "%";
      drop.style.animationDuration = Math.random() * 2 + 3 + "s";
      drop.style.animationDelay = Math.random() * 3 + "s";
      container.appendChild(drop);
    }
  }

  function createHexagons() {
    const container = document.body;
    const hexCount = 8;
    for (let i = 0; i < hexCount; i++) {
      const hex = document.createElement("div");
      hex.className = "hex";
      hex.style.left = Math.random() * 100 + "%";
      hex.style.top = Math.random() * 100 + "%";
      hex.style.animationDuration = Math.random() * 5 + 8 + "s";
      hex.style.animationDelay = Math.random() * 3 + "s";
      container.appendChild(hex);
    }
  }

  function init() {
    createParticles();
    createPrintLines();
    createPrintLayers();
    createHotends();
    createFilamentDrops();
    createHexagons();
    animate();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      cancelAnimationFrame(animationId);
    } else {
      animate();
    }
  });
})();
