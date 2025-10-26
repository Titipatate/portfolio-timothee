function genererProjetActuIndex() {
  const container = document.querySelector("#projetActuelle").parentElement;

  //Permet de filtrer les éléments qui sont enCours uniquement
  const experiencesEnCours = dicoExperiencesPerso.filter(
    (exp) => exp.enCours === true
  );

  //Si aucun projet en cours n'est trouvé alors affiche un badge tout de même
  if (experiencesEnCours.length === 0) {
    container.innerHTML = `
      <h2 class="text-white" id="projetActuelle">Projets Actuels</h2>
      <div class="alert alert-info" role="alert">
        <span class="badge text-dark">Actuellement aucun projet en cours</span>
      </div>
    `;
    return;
  }

  // Grouper par lignes de 2
  let html = "";
  for (let i = 0; i < experiencesEnCours.length; i += 2) {
    html += '<div class="row">';

    // Première carte
    html += genererCarteProjet(experiencesEnCours[i]);

    // Deuxième carte (si elle existe)
    if (i + 1 < experiencesEnCours.length) {
      html += genererCarteProjet(experiencesEnCours[i + 1]);
    }

    html += "</div>";
  }

  container.innerHTML =
    '<h2 class="text-white" id="projetActuelle">Projets Actuels</h2>' + html;
}

function genererCarteProjet(exp) {
  // Générer l'icône ou le logo
  let iconHTML = "";
  if (exp.iconProjet) {
    iconHTML = `<i class="${exp.iconProjet}"></i>`;
  } else if (exp.logo) {
    iconHTML = `<img src="${exp.logo}" alt="Logo" width="30" height="30" class="d-inline-block align-text-top" />`;
  }

  // Générer le badge "En cours" si nécessaire
  let badgeHTML = exp.enCours
    ? '<span class="badge bg-success ms-2">En cours</span>'
    : "";

  // Générer la date si elle existe
  let dateHTML = exp.dateGenerale ? `<h6>${exp.dateGenerale}</h6>` : "";

  // Générer la description si elle existe
  let descHTML = exp.description ? exp.description : "";

  // Générer les points
  let pointsHTML = "<ul>";
  exp.points.forEach((point) => {
    pointsHTML += `<li>${point}</li>`;
  });
  pointsHTML += "</ul>";

  return `
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card border-black border-3 standard card-hover-ani">
      <div class="card-body">
        <div class="container-fluid paddingL">
          <h4 class="card-title">
            ${iconHTML}
            ${exp.titreProjet}
            ${badgeHTML}
          </h4>
        </div>
        <h5>${exp.sousTitre}</h5>
        ${dateHTML}
        ${descHTML}
        ${pointsHTML}
        ${
          exp.lienProjet
            ? `
          <div class="mt-3">
            <a href="${exp.lienProjet}" class="btn btn-primary btn-sm" rel="noopener noreferrer">
              Voir le projet →
            </a>
          </div>
        `
            : ""
        }
      </div>
    </div>
  </div>
`;
}

// Appeler la fonction au chargement
document.addEventListener("DOMContentLoaded", genererProjetActuIndex);
