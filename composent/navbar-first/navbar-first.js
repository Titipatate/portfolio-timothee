// Détecte le chemin relatif vers la racine
function getBasePath() {
  const path = window.location.pathname;
  const depth =
    path.split("/").filter((segment) => segment && segment !== "index.html")
      .length - 1;

  // Si on est à la racine (depth = -1 ou 0), retourne chaîne vide
  // Sinon retourne les "../" nécessaires
  if (depth <= 0) {
    return "";
  }
  return "../".repeat(depth);
}

// Génère les items de la navbar selon la config
function generateNavbarItems(config) {
  const navbarItems = document.getElementById("navbar-items");

  config.items.forEach((item) => {
    const li = document.createElement("li");
    li.className = "nav-item";

    if (item.status === "coming-soon") {
      const span = document.createElement("span");
      span.className = "nav-link disabled position-relative";
      span.style.cursor = "not-allowed";
      span.style.opacity = "0.5";
      span.innerHTML = `
    <span style="text-decoration: line-through;">${item.label}</span>
    <span class="badge bg-info mt-1" style="font-size: 0.6rem;">
      Coming Soon
    </span>
  `;
      li.appendChild(span);
    } else {
      // Pour les items actifs
      const a = document.createElement("a");
      a.className = "nav-link";
      a.href = item.href;
      a.setAttribute("data-page", item.dataPage);
      a.textContent = item.label;
      li.appendChild(a);
    }

    navbarItems.appendChild(li);
  });
}

// Charge la navbar principale
function loadNavbar() {
  const basePath = getBasePath();

  fetch(`${basePath}composent/navbar-first/navbar-first.html`)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-principal").innerHTML = data;

      // Puis charge la configuration et génère les items
      return fetch(`${basePath}composent/navbar-first/navbar-config.json`);
    })
    .then((response) => response.json())
    .then((config) => {
      generateNavbarItems(config);
      setActivePage();
    })
    .catch((error) => console.error("Erreur de chargement navbar:", error));
}

// Marque la page active dans la navbar
function setActivePage() {
  // Récupère le nom de la page actuelle (sans le chemin)
  const fullPath = window.location.pathname;
  const currentPage = fullPath.split("/").pop() || "index.html";

  // Trouve tous les liens de la navbar primaire
  const navLinks = document.querySelectorAll("#navbarPrimary .nav-link");

  navLinks.forEach((link) => {
    const linkHref = link.getAttribute("href");
    if (linkHref) {
      const linkPage = linkHref.split("/").pop();
      if (linkPage === currentPage) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  });
}

// Charge la navbar au chargement de la page
document.addEventListener("DOMContentLoaded", loadNavbar);
