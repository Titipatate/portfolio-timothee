document.addEventListener("DOMContentLoaded", () => {
  //Warning card
  document.getElementById("warning-status").textContent =
    staticData.warningCard.status;
  document.getElementById("warning-recherche").textContent =
    staticData.warningCard.recherche;

  //Titre H2 pages
  document.getElementById("titre-presentation").textContent =
    staticData.titre.presentation;

  //Présentation
  // document.getElementById("pres-photo").src = staticData.presentation.photo;
  document.getElementById("pres-nom").textContent = staticData.presentation.nom;
  document.getElementById("pres-email").textContent =
    staticData.presentation.email;
  document.getElementById("pres-adresse").textContent =
    staticData.presentation.adresse;
  const lienLinkedin = document.getElementById("pres-lien-linke");
  lienLinkedin.href = staticData.presentation.linkedin;
  lienLinkedin.textContent = staticData.presentation.linkedinText;
  document.getElementById("pres-permis").textContent =
    staticData.presentation.permis;
  document.getElementById("pres-mobil").textContent =
    staticData.presentation.mobil;
  //SUITE prés avec profilPersonnel
  document.getElementById("premier-para").textContent =
    staticData.profilPersonnel.premierPara;
  document.getElementById("second-para").textContent =
    staticData.profilPersonnel.secondPara;
  document.getElementById("trois-para").textContent =
    staticData.profilPersonnel.troisPAr;
});
