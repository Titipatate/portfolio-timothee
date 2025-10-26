// Attendre que Bootstrap soit complètement chargé
window.addEventListener("load", function () {
  fetch("composent/navbar-second/navbar-index.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-index").innerHTML = data;

      // Fermer UNIQUEMENT la navbar secondaire au clic sur un lien (pour mobile)
      setTimeout(function () {
        const navbarSecondaryToggler = document.querySelector(
          ".navbar-secondary .navbar-toggler"
        );
        const navbarSecondaryCollapse = document.querySelector(
          "#navbarSupportedContent"
        );
        const navbarSecondaryLinks = document.querySelectorAll(
          "#navbarSupportedContent .nav-link"
        );

        if (
          navbarSecondaryToggler &&
          navbarSecondaryCollapse &&
          navbarSecondaryLinks.length > 0
        ) {
          navbarSecondaryLinks.forEach(function (link) {
            link.addEventListener("click", function () {
              // Vérifier si le menu secondaire est ouvert
              if (navbarSecondaryCollapse.classList.contains("show")) {
                // Fermer le menu secondaire
                navbarSecondaryToggler.click();
              }
            });
          });
        }
      }, 100);
    })
    .catch((error) => console.error("Erreur:", error));
});
