const dicoExperiencesPerso = [
  {
    enCours: true, // Permet et de l'afficher dans index et de l'afficher dnas la pages projet Actuels
    type: "personnel", //Savoir c'est quoi comme projet, personnel ou étudiant
    titreProjet: "Calendrier de Noel 2.0", // titre générale
    iconProjet: "fa-solid fa-sleigh", //icon du projet
    description1erimg: false, // Est pour faire choisir entre true donc afficher : Photo contractuelle et false donc : Idée de base
    sousTitre: "Projet en impression 3D", // Permet de mieux comprendre qu'est-ce que ce projet
    dateGenerale: "2025-2027",
    dateDebut: null,
    dateFin: null,
    dernierenews: ["Découverte d'un logiciel de création 3D Catia"], //Permet d'afficher dans un badge dynamqieu les dernière news du projet
    descriptionTextImag: [
      "Voila une des idée que j'ai pue voir en ligne",
      "Elle me permet de me projeter",
      "Mais elle ne répond pas à mes enjeux",
    ], // Description pour la 1 er image
    competence: [
      {
        nom: "Catia",
        icon: null,
        color: null,
        image: "/portfolio-timothee/media/img/logo-icon/catia.png",
      },
    ], // pour permettre de les afficher dans des badges dynamiques
    iconautre: "fa-regular fa-snowflake", //Pour remplacer les point des ul li par des icons
    pourquoiCeProjet: [
      "Ce projet n'est pas nouveau car cela fait 6 ans que je fais des calendriers de l'avent moi même",
      "Tous en papier et carton, avec peintures, pistolet à colle",
      "Et en faite j'avais besoin de changez car je me suis rendu compte que le calendrier n'avait qu'une seule fonction et que une fois offert il ne servait plus",
      "Je veux pouvoir crer un calendrier qui aura par la suite une autre utilité",
    ], // liste à puse décrire les grandes lignes de pq je fais ce projet
    descriptionEnjeu: [
      "Je veux pouvoir concevoir, créer, assembler un calendrier qui aura une seconde vie par la suite",
      "Pas juste recyclé, non, je voudrais réalisé une création qui offrira de la joie pendant 1 mois et qui pourra continuer par la suite",
      "",
    ], // Les enjeux pour moi derrière ce projet
    imagesVideoProjet: null, // stocker en dur dans l'arobrecences ou lien internet mettre ici le lien
    imagesVideoIdee: [
      "/portfolio-timothee/media/img/projet/idee-calendrier-2.0.jpg",
      "/portfolio-timothee/media/img/projet/idee2-calendrier-2.0.webp",
    ], // stocker en dur dans l'arobrecences ou lien internet mettre ici le lien
    points: [
      "Imaginez/imprimer un calendrier qui aura une autre utilité par la suite",
    ], // ce points c'est juste pour un autre composant qui en a besoin, c'est pour l'explication minime ce tranvant dans index
    lienProjet: "/portfolio-timothee/pages/projets-actuelles/projets-actuelles.html",
  },

  {
    enCours: false,
    type: "personnel",
    titreProjet: "Robot autonome Lego",
    iconProjet: "fa-solid fa-robot",
    description1erimg: true,
    sousTitre: "Projet en Lego Technic",
    dateGenerale: "2025-2026",
    dateDebut: null,
    dateFin: null,
    dernierenews: [null, null],
    descriptioonImag: ["", "", ""],
    competence: [{ nom: "", icon: "", color: "", image: null }],
    iconautre: "",
    descritpionPqProjet: "",
    pourquoiCeProjet: ["", "", ""],
    descriptionEnjeu: "",
    imagesVideoProjet: ["lien", "lien"],
    imagesVideoIdee: null,
    points: ["Concevoir/construire un robot format compacte autonome"],
    lienProjet: "/portfolio-timothee/pages/projets-actuelles/projets-actuelles.html",
  },

  //   Ancienne form du dico à changé si le temps
  {
    enCours: false,
    type: "personnel",
    icon: "fa-solid fa-user",
    titreProjet: "Projet personnel (3 semaines)",
    sousTitre: "Simulation bras robotique 3DOF",
    dateGenerale: "Juillet 2025",
    description: null,
    points: [
      "Utilisation de ROS 2 Jazzy, Gazebo 4.2 et visulation dans Rviz",
      "Modélisation du robot en URDF/XACRO et intégration de ros2_control",
    ],
  },
  {
    enCours: false,
    type: "etudiant",
    icon: "fa-solid fa-users-line",
    titreProjet: "Projet étudiant (2 semaines)",
    sousTitre: "Maison domotique sur Arduino (Tinkercad)",
    dateGenerale: null,
    description: null,
    points: [
      "Implémentation de systèmes domotiques en C++ (chauffage, volets, VMC)",
    ],
  },
  {
    enCours: false,
    type: "personnel",
    icon: "fa-solid fa-user",
    titreProjet: "Projet Personnel (1 an)",
    sousTitre: "Projet Bras Robotique en Lego Technique",
    dateGenerale: "2024/2025",
    description: null,
    points: [
      "Conception autonome avec capteurs, moteurs, programmation Python",
    ],
  },
];
