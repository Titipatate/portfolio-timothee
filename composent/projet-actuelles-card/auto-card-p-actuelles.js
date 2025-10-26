// Fonction principale pour générer tous les projets en cours (un par ligne)
function genererProjetsDetailles() {
  const container = document.querySelector("#container-projets-detailles");

  // Filtrer les projets en cours
  const projetsEnCours = dicoExperiencesPerso.filter(
    (exp) => exp.enCours === true
  );

  // Si aucun projet en cours
  if (projetsEnCours.length === 0) {
    container.innerHTML = `
      <div class="alert alert-info" role="alert">
        <span class="badge text-dark">Actuellement aucun projet en cours</span>
      </div>
    `;
    return;
  }

  // Générer chaque projet (un par ligne)
  let html = "";
  projetsEnCours.forEach((projet) => {
    html += genererCarteProjetComplete(projet);
  });

  container.innerHTML = html;
}

// Fonction pour générer une carte de projet complète
function genererCarteProjetComplete(exp) {
  // Badge du type de projet
  const badgeType =
    exp.type === "personnel"
      ? '<span class="badge bg-primary">Personnel</span>'
      : '<span class="badge bg-info">Étudiant</span>';

  // Badge en cours
  const badgeEnCours = exp.enCours
    ? '<span class="badge bg-success">En cours</span>'
    : "";

  // Icône du projet
  const iconHTML = exp.iconProjet ? `<i class="${exp.iconProjet}"></i>` : "";

  // Gestion de la date
  let dateHTML = "";
  if (exp.dateGenerale) {
    dateHTML = `<h5>${exp.dateGenerale}</h5>`;
  } else if (exp.dateDebut && exp.dateFin) {
    dateHTML = `<h5>${exp.dateDebut} - ${exp.dateFin}</h5>`;
  } else if (exp.dateDebut) {
    dateHTML = `<h5>Depuis ${exp.dateDebut}</h5>`;
  }

  // Dernières news en badges
  let newsHTML = "";
  if (exp.dernierenews && exp.dernierenews.length > 0) {
    newsHTML = "<p>";
    exp.dernierenews.forEach((news) => {
      newsHTML += `<span class="badge bg-warning text-dark me-2 mb-2">${news}</span>`;
    });
    newsHTML += "</p>";
  }

  // Description de la première image avec icônes personnalisés
  let descriptionImgHTML = "";
  if (exp.descriptionTextImag && exp.descriptionTextImag.length > 0) {
    descriptionImgHTML = "<ul style='list-style: none; padding-left: 0;'>";
    exp.descriptionTextImag.forEach((desc) => {
      const icon = exp.iconautre || "fa-solid fa-circle";
      descriptionImgHTML += `<li><i class="${icon}" style="margin-right: 8px;"></i>${desc}</li>`;
    });
    descriptionImgHTML += "</ul>";
  }

  // Compétences en badges
  let competencesHTML = "";
  if (exp.competence && exp.competence.length > 0) {
    competencesHTML = '<div class="row">';
    exp.competence.forEach((comp) => {
      let compContent = "";
      if (comp.image) {
        compContent = `<img src="${comp.image}" alt="${comp.nom}" style="height: 30px; width: auto; margin-right: 8px; vertical-align: middle;">${comp.nom}`;
      } else if (comp.icon) {
        compContent = `<i class="${comp.icon}" style="font-size: 1.2em; margin-right: 5px;"></i> ${comp.nom}`;
      } else {
        compContent = comp.nom;
      }

      const badgeColor = comp.color || "bg-primary";
      competencesHTML += `
      <div class="col-sm-6 mb-2">
        <span class="badge ${badgeColor}" style="font-size: 1em; padding: 0.5em 0.8em;">${compContent}</span>
      </div>
    `;
    });
    competencesHTML += "</div>";
  }

  // Pourquoi ce projet (avec icônes)
  let pourquoiHTML = "";
  if (exp.pourquoiCeProjet && exp.pourquoiCeProjet.length > 0) {
    pourquoiHTML = "<ul style='list-style: none; padding-left: 0;'>";
    exp.pourquoiCeProjet.forEach((raison) => {
      const icon = exp.iconautre || "fa-solid fa-circle";
      pourquoiHTML += `<li><i class="${icon}" style="margin-right: 8px;"></i>${raison}</li>`;
    });
    pourquoiHTML += "</ul>";
  }

  // Description des enjeux
  let enjeuxHTML = "";
  if (exp.descriptionEnjeu && exp.descriptionEnjeu.length > 0) {
    enjeuxHTML = "<ul style='list-style: none; padding-left: 0;'>";
    exp.descriptionEnjeu.forEach((enjeu) => {
      if (enjeu.trim() !== "") {
        const icon = exp.iconautre || "fa-solid fa-circle";
        enjeuxHTML += `<li><i class="${icon}" style="margin-right: 8px;"></i>${enjeu}</li>`;
      }
    });
    enjeuxHTML += "</ul>";
  }

  // Texte pour la première image
  const texteImage1 = exp.description1erimg
    ? "Photo contractuelle du projet"
    : "Idée de base";

  // Déterminer quelle source d'images utiliser (projet OU idées, pas les deux)
  let imagesSource = [];
  if (exp.imagesVideoProjet && exp.imagesVideoProjet.length > 0) {
    imagesSource = exp.imagesVideoProjet;
  } else if (exp.imagesVideoIdee && exp.imagesVideoIdee.length > 0) {
    imagesSource = exp.imagesVideoIdee;
  }

  // Image 1 - OPTIONNELLE
  let image1HTML = "";
  let hasImage1 = imagesSource.length > 0 && imagesSource[0];
  if (hasImage1) {
    image1HTML = `<img class="object-fit-cover rounded-top" src="${imagesSource[0]}" alt="${exp.titreProjet}" />`;
  }

  // Image 2 - OPTIONNELLE
  let image2HTML = "";
  let hasImage2 = imagesSource.length > 1 && imagesSource[1];
  if (hasImage2) {
    image2HTML = `<img class="object-fit-cover rounded-top" src="${imagesSource[1]}" alt="${exp.titreProjet}" />`;
  }

  // Image 3 - OPTIONNELLE
  let image3HTML = "";
  let hasImage3 = imagesSource.length > 2 && imagesSource[2];
  if (hasImage3) {
    image3HTML = `<img class="object-fit-cover rounded-top" src="${imagesSource[2]}" alt="${exp.titreProjet}" />`;
  }

  // Image 4 - OPTIONNELLE
  let image4HTML = "";
  let hasImage4 = imagesSource.length > 3 && imagesSource[3];
  if (hasImage4) {
    image4HTML = `<img class="object-fit-cover rounded-top" src="${imagesSource[3]}" alt="${exp.titreProjet}" />`;
  }

  // Générer la troisième rangée seulement si au moins une image 3 ou 4 existe
  let troisiemeRangeeHTML = "";
  if (hasImage3 || hasImage4) {
    troisiemeRangeeHTML = `
      <!-- Troisième rangée : 2 images supplémentaires -->
      <div class="row mb-3">
        ${
          hasImage3
            ? `
        <div class="col-sm-6 mb-3 mb-sm-0">
          <div class="card border-black border-3 standard card-hover-ani">
            <div class="ratio ratio-1x1">
              ${image3HTML}
            </div>
          </div>
        </div>
        `
            : ""
        }
        
        ${
          hasImage4
            ? `
        <div class="col-sm-6 mb-sm-0">
          <div class="card border-black border-3 standard card-hover-ani">
            <div class="ratio ratio-1x1">
              ${image4HTML}
            </div>
          </div>
        </div>
        `
            : ""
        }
      </div>
    `;
  }

  // Template complet
  return `
    <div class="card mb-3">
      <h2>
        ${iconHTML} ${exp.titreProjet} 
        <span class="badge bg-primary" style="font-size: 0.5em; margin-left: 10px;">${
          exp.type === "personnel" ? "Personnel" : "Étudiant"
        }</span>
        ${
          exp.enCours
            ? '<span class="badge bg-success" style="font-size: 0.5em; margin-left: 5px;">En cours</span>'
            : ""
        }
      </h2>
    </div>
    
    <div class="row mb-5">
      <div class="col-sm-12 mb-3 mb-sm-0">
        <div class="card border-black border-4 rounded-4 standard">
          
          <!-- Première rangée : Image + Informations -->
          <div class="row mb-3">
            ${
              hasImage1
                ? `
            <div class="col-sm-6 mb-3 mb-sm-0">
              <div class="card border-black border-3 standard card-hover-ani">
                <div>${texteImage1}</div>
                <div class="ratio ratio-1x1">
                  ${image1HTML}
                </div>
              </div>
            </div>
            `
                : ""
            }
            
            <div class="${hasImage1 ? "col-sm-6" : "col-sm-12"} mb-sm-0">
              <div class="card border-black border-3 standard card-hover-ani">
                <div class="card-body">
                  <h3>${exp.sousTitre}</h3>
                  ${dateHTML}
                  ${newsHTML}
                  ${descriptionImgHTML}
                  ${competencesHTML}
                </div>
              </div>
            </div>
          </div>
          
          <!-- Deuxième rangée : Pourquoi + Image -->
          <div class="row mb-3">
            <div class="${hasImage2 ? "col-sm-6" : "col-sm-12"} mb-3 mb-sm-0">
              <div class="card border-black border-3 standard card-hover-ani">
                <div class="card-body">
                  <h3>Pourquoi ce Projet ?</h3>
                  <h5>Enjeux derrière ?</h5>
                 <div class="row mb-3">
                    <div class="col-sm-12">
                        <div class="card border-black border-3 p-3 w-100">
                          <strong>Description du projet</strong>
                          ${pourquoiHTML}
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="card border-black border-3 p-3 w-100">
                          <strong>Les enjeux à viser</strong>
                          ${enjeuxHTML}
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            
            ${
              hasImage2
                ? `
            <div class="col-sm-6 mb-3 mb-sm-0">
              <div class="card border-black border-3 standard card-hover-ani">
                <div>${texteImage1}</div>
                <div class="ratio ratio-1x1">
                  ${image2HTML}
                </div>
              </div>
            </div>
            `
                : ""
            }
          </div>
          
          ${troisiemeRangeeHTML}
          
        </div>
      </div>
    </div>
  `;
}

// Appeler la fonction au chargement
document.addEventListener("DOMContentLoaded", genererProjetsDetailles);
