function genererExperiences() {
  const container = document.querySelector("#experiencePro").parentElement;

  // Grouper par lignes de 2
  let html = "";
  for (let i = 0; i < dicoExperiencesPro.length; i += 2) {
    html += '<div class="row">';

    // Première carte
    html += genererCarte(dicoExperiencesPro[i]);

    // Deuxième carte (si elle existe)
    if (i + 1 < dicoExperiencesPro.length) {
      html += genererCarte(dicoExperiencesPro[i + 1]);
    }

    html += "</div>";
  }

  container.innerHTML =
    '<h2 class="text-white" id="experiencePro">Expériences Professionnels</h2>' +
    html;
}

function genererCarte(expe) {
  // Générer l'icône ou le logo
  let iconHTML = "";
  if (expe.icon) {
    iconHTML = `<i class="${expe.icon}"></i>`;
  } else if (expe.logo) {
    iconHTML = `<img src="${expe.logo}" alt="Logo" width="30" height="30" class="d-inline-block align-text-top" />`;
  }

  // Générer le badge "En cours" si nécessaire
  let badgeHTML = expe.enCours
    ? '<span class="badge bg-success ms-2">En cours</span>'
    : "";

  // Générer la date si elle existe
  let dateHTML = expe.date ? `<h6>${expe.date}</h6>` : "";

  // Générer la description si elle existe
  let descHTML = expe.description ? expe.description : "";

  // Générer les points
  let pointsHTML = "<ul>";
  expe.points.forEach((point) => {
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
              ${expe.titre}
              ${badgeHTML}
            </h4>
          </div>
          <h5>${expe.poste}</h5>
          ${dateHTML}
          ${descHTML}
          ${pointsHTML}
        </div>
      </div>
    </div>
  `;
}

// Appeler la fonction au chargement
document.addEventListener("DOMContentLoaded", genererExperiences);
