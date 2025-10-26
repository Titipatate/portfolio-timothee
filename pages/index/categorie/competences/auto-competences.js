function genererCompetences() {
  const container = document.querySelector("#competence").parentElement;

  let html = '<h2 class="text-white" id="competence">Compétences</h2>';

  // Première ligne : Langages + Outils
  html += '<div class="row marginB">';
  html += genererCarteCompetence("Langages", competences.langages, "langage");
  html += genererCarteCompetence("Outils", competences.outils, "outil");
  html += "</div>";

  // Deuxième ligne : Langues
  html += '<div class="row marginB">';
  html += genererCarteCompetence("Langues", competences.langues, "langue");
  html += "</div>";

  container.innerHTML = html;
}

function genererCarteCompetence(titre, items, type) {
  let itemsHTML = "";

  items.forEach((item) => {
    if (type === "langue") {
      // Pour les langues
      itemsHTML += `
        <li class="list-group-item">
          <span class="${item.drapeau} me-2"></span>${item.nom} : ${item.niveau}
        </li>
      `;
    } else {
      // Pour langages et outils
      let iconHTML = "";

      if (item.image) {
        // Si c'est une image (comme Tinkercad)
        iconHTML = `
          <img src="${item.image}" alt="Logo" width="30" height="30" 
               class="d-inline-block align-text-top me-3" />
        `;
      } else {
        // Si c'est une icône devicon
        let styleColor = item.color
          ? `style="font-size: 2.5rem; color: ${item.color}"`
          : 'style="font-size: 2.5rem"';
        iconHTML = `<span class="${item.icon} me-2" ${styleColor}></span>`;
      }

      itemsHTML += `
        <li class="list-group-item d-flex align-items-center">
          ${iconHTML}${item.nom}
        </li>
      `;
    }
  });

  return `
    <div class="col-sm-6 mb-3 mb-sm-0">
      <div class="card border-info standard card-hover-ani">
        <div class="card-body">
          <div class="container-fluid paddingL">
            <h4 class="card-title">${titre}</h4>
          </div>
          <ul class="list-group list-group-flush">
            ${itemsHTML}
          </ul>
        </div>
      </div>
    </div>
  `;
}

// Appeler la fonction au chargement
document.addEventListener("DOMContentLoaded", genererCompetences);
