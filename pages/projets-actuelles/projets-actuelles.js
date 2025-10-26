(function () {
  "use strict";

  // Générer les flocons de neige
  function createSnowflakes() {
    const snowflakeChars = ["❄", "❅", "❆"];
    const container = document.body;

    for (let i = 0; i < 50; i++) {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      snowflake.textContent =
        snowflakeChars[Math.floor(Math.random() * snowflakeChars.length)];
      snowflake.style.left = Math.random() * 100 + "%";
      snowflake.style.animationDuration = Math.random() * 5 + 5 + "s";
      snowflake.style.animationDelay = Math.random() * 5 + "s";
      snowflake.style.fontSize = Math.random() * 1 + 0.5 + "em";
      container.appendChild(snowflake);
    }
  }

  // Générer les étoiles
  function createStars() {
    const container = document.body;

    for (let i = 0; i < 100; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";
      star.style.animationDelay = Math.random() * 3 + "s";
      star.style.animationDuration = Math.random() * 2 + 2 + "s";
      container.appendChild(star);
    }
  }

  // Générer les lumières de Noël
  function createLights() {
    const colors = ["red", "green", "gold", "blue"];
    const container = document.body;

    for (let i = 0; i < 20; i++) {
      const light = document.createElement("div");
      light.className =
        "light " + colors[Math.floor(Math.random() * colors.length)];
      light.style.left = Math.random() * 100 + "%";
      light.style.top = Math.random() * 100 + "%";
      light.style.animationDelay = Math.random() * 4 + "s";
      light.style.animationDuration = Math.random() * 2 + 3 + "s";
      container.appendChild(light);
    }
  }

  // Initialiser toutes les animations au chargement de la page
  function initChristmasBackground() {
    createSnowflakes();
    createStars();
    createLights();
  }

  // Attendre que le DOM soit chargé
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initChristmasBackground);
  } else {
    initChristmasBackground();
  }
})();
