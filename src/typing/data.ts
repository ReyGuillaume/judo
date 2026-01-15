import {OsaekomiWaza, ShimeWaza, TeWaza, AshiWaza, KansetsuWaza, KoshiWaza, SutemiWaza} from './types';

export const osaekomiWaza: { [name: string]: OsaekomiWaza } = {
  'KesaGatame': {
    image: 'https://www.judopourtous.com/Images/NeHonGesaGatame.gif',
    etapes: [
      'Se placer perpendiculairement à Uke, poitrine contre poitrine',
      'Contrôler la tête de Uke avec le bras proche',
      'Enrouler le bras opposé autour du bras de Uke',
      'Écarter les jambes pour élargir la base',
      'Abaisser le centre de gravité et stabiliser'
    ],
    video: 'https://youtu.be/NDaQuJOFBYk?si=EO0QkwGXu0m2nPP5',
    prise: undefined,
    positionTori: 'dessus',
    variante: ['KuzureKesaGatame']
  },

  'KuzureKesaGatame': {
    image: 'https://www.judopourtous.com/Images/NeHonGesaGatame.gif',
    etapes: [
      'Se placer en position de Kesa-gatame',
      'Abandonner le contrôle direct de la tête',
      'Saisir le bras ou la ceinture de Uke',
      'Maintenir la pression avec le buste',
      'Stabiliser par un large écartement des jambes'
    ],
    video: 'https://youtu.be/Q2fb9jaoUFQ?si=-tER3SAuERc4y9ep',
    prise: undefined,
    positionTori: 'dessus',
  },

  'TateShihoGatame': {
    image: 'https://www.judopourtous.com/Images/NeTateShihoGatame.gif',
    etapes: [
      'Se placer à califourchon sur le buste de Uke',
      'Contrôler les bras de Uke vers le sol',
      'Coller le buste contre la poitrine de Uke',
      'Écarter les genoux pour la stabilité',
      'Garder la tête basse et le dos gainé'
    ],
    video: 'https://youtu.be/55-rFmBx53g?si=3SdnfNqSp_ENlU02',
    prise: undefined,
    positionTori: 'dessus',
  },

  'UshiroKesaGatame': {
    image: 'https://www.judopourtous.com/Images/NeUshiroGesaGatame.gif',
    etapes: [
      'Se placer derrière la tête de Uke',
      'Passer un bras autour du cou ou de l’épaule',
      'Contrôler le bras proche de Uke',
      'S’asseoir bas pour empêcher le retournement',
      'Stabiliser en écartant les jambes'
    ],
    video: 'https://youtu.be/SBapox2M2dE?si=I4VhI22-KEzzoO__',
    prise: undefined,
    positionTori: 'derriere',
  },

  'KamiShihoGatame': {
    image: 'https://www.judopourtous.com/Images/NeKamiShihoGatame.gif',
    etapes: [
      'Se placer au-dessus de la tête de Uke',
      'Glisser les bras sous les épaules de Uke',
      'Saisir le revers ou le dos du judogi',
      'Abaisser les hanches et la poitrine',
      'Écarter les jambes pour la stabilité'
    ],
    video: 'https://youtu.be/HFuMjOv0WN8?si=YpQhFQ_MFKGRi7xg',
    prise: undefined,
    positionTori: 'dessus',
  },

  'KuzureKamiShihoGatame': {
    image: 'https://www.judopourtous.com/Images/NeKamiShihoGatame.gif',
    etapes: [
      'Entrer en Kami-shiho-gatame',
      'Modifier la prise en contrôlant un bras',
      'Adapter la position du buste selon la défense',
      'Maintenir la pression vers le sol',
      'Empêcher le pont ou la rotation de Uke'
    ],
    video: 'https://youtu.be/YUrogQWdwiY?si=dKWmT2CNJq6WxnHm',
    prise: undefined,
    positionTori: 'dessus',
  },

  'YokoShihoGatame': {
    image: 'https://www.judopourtous.com/Images/NeYokoShihoGatame.gif',
    etapes: [
      'Se placer latéralement par rapport à Uke',
      'Contrôler la tête et le bras éloigné',
      'Coller le buste contre le torse de Uke',
      'Écarter les jambes pour élargir la base',
      'Maintenir une pression constante'
    ],
    video: 'https://youtu.be/TT7XJVSEQxA?si=sSEtKTpTN3wuwsFU',
    prise: undefined,
    positionTori: 'cote',
    variante: ['KuzureYokoShihoGatame']
  },

  'KuzureYokoShihoGatame': {
    image: 'https://www.judopourtous.com/Images/NeYokoShihoGatame.gif',
    etapes: [
      'Entrer en Yoko-shiho-gatame',
      'Adapter la prise selon la défense de Uke',
      'Contrôler un bras ou la ceinture',
      'Abaisser le centre de gravité',
      'Empêcher le retournement de Uke'
    ],
    video: 'https://youtu.be/TT7XJVSEQxA?si=sSEtKTpTN3wuwsFU',
    prise: undefined,
    positionTori: 'cote',
  },

  'UkiGatame': {
    image: 'https://www.judopourtous.com/Images/TechniquesOublieesUkiGatame.jpg',
    etapes: [
      'Se placer en contrôle latéral haut',
      'Immobiliser les épaules de Uke',
      'Maintenir le buste léger mais stable',
      'Ajuster la pression selon les mouvements',
      'Anticiper les tentatives de sortie'
    ],
    video: 'https://youtu.be/e_lAjik1SUM?si=yIY6kdPFtFVpqdiT',
    prise: undefined,
    positionTori: 'dessus',
  },

  'KataGatame': {
    image: 'https://www.judopourtous.com/Images/NeKataGatame.gif',
    etapes: [
      'Contrôler la tête et un bras de Uke',
      'Former un verrou avec le bras autour du cou',
      'Se placer de côté, poitrine vers Uke',
      'Abaisser les hanches pour stabiliser',
      'Maintenir l’immobilisation sans écraser'
    ],
    video: 'https://youtu.be/zQR3IOXxO_Q?si=QqShLlrBbQlIxu_L',
    prise: undefined,
    positionTori: 'cote',
    variante: ['KuzureKataGatame']
  },

  'KuzureKataGatame': {
    image: 'https://www.judopourtous.com/Images/NeKataGatame.gif',
    etapes: [
      'Entrer en Kata-gatame',
      'Modifier la prise pour plus de contrôle',
      'S’adapter à la réaction de Uke',
      'Maintenir la pression latérale',
      'Empêcher la sortie par roulade'
    ],
    video: '',
    prise: undefined,
    positionTori: 'cote',
  }
};

export const shimeWaza: {[name: string]: ShimeWaza} = {
  'HadakaJime': {
    image: 'https://www.judopourtous.com/Images/NeHadakaJime.gif',
    etapes: [
      'Se placer derrière Uke, poitrine contre son dos',
      'Passer un bras autour du cou sans comprimer la trachée',
      'Fermer le cercle avec l’autre bras',
      'Serrer par rapprochement des coudes',
      'Stabiliser en contrôlant le buste de Uke'
    ],
    video: 'https://youtu.be/9f0n8jez7iA?si=4HtD3rmp9bftXbHU',
    prise: 'sansGi',
    variante: ['KataHaJime'],
    positionUke: 'dos',
    positionTori: 'dessus',
    type: 'sanguin',
    membresUtilises: ['bras'],
    directionPression: 'circulaire',
  },

  'JujiJime': {
    image: 'https://www.judopourtous.com/Images/NeGyakuJujiJime.gif',
    etapes: [
      'Croiser les avant-bras devant le cou de Uke',
      'Insérer les revers sous les côtés du cou',
      'Positionner les poignets à plat',
      'Serrer par rotation des avant-bras',
      'Maintenir la pression sans tirer vers le haut'
    ],
    video: 'https://youtu.be/t3tQriIPdlI?si=rQMQVK0HXKUxFQhV',
    prise: 'croisee',
    positionUke: 'dos',
    positionTori: 'dessus',
    type: 'sanguin',
    membresUtilises: ['bras','revers'],
    directionPression: 'circulaire',
  },

  'OkuriEriJime': {
    image: 'https://www.judopourtous.com/Images/NeOkuriEriJime.gif',
    etapes: [
      'Se placer derrière Uke',
      'Passer une main profondément dans le revers opposé',
      'Amener l’autre main derrière la tête',
      'Serrer latéralement en tirant les coudes',
      'Stabiliser la position avec le buste'
    ],
    video: 'https://youtu.be/EiqyoVcIAi8?si=bOMfJO-Ui29EpT8M',
    prise: 'classique',
    positionUke: 'debout',
    positionTori: 'derriere',
    type: 'sanguin',
    membresUtilises: ['bras','revers'],
    directionPression: 'laterale',
  },

  'KataJujiJime': {
    image: 'https://www.judopourtous.com/Images/NeTsukkomiJime.gif',
    etapes: [
      'Croiser les bras devant le cou de Uke',
      'Insérer un revers profondément',
      'Utiliser l’autre avant-bras comme appui',
      'Serrer en rotation asymétrique',
      'Maintenir la pression de façon contrôlée'
    ],
    video: 'https://youtu.be/3VZVUAmiMD8?si=ltLQQ8lrf6pwe3Uj',
    prise: 'croisee',
    positionUke: 'dos',
    positionTori: 'dessus',
    type: 'sanguin',
    membresUtilises: ['bras','revers'],
    directionPression: 'circulaire',
  },

  'NamiJujiJime': {
    image: 'https://www.judopourtous.com/Images/NeTsukkomiJime.gif',
    etapes: [
      'Croiser les bras symétriquement devant le cou',
      'Placer les deux revers à hauteur égale',
      'Positionner les poignets à plat',
      'Serrer en rapprochant les avant-bras',
      'Stabiliser sans basculer en avant'
    ],
    video: 'https://youtu.be/k2cHry9HByQ?si=fZZ6k9IFmq0juTvO',
    prise: 'croisee',
    positionUke: 'dos',
    positionTori: 'dessus',
    type: 'sanguin',
    membresUtilises: ['bras','revers'],
    directionPression: 'circulaire',
  },

  'GyakuJujiJime': {
    image: 'https://www.judopourtous.com/Images/NeTsukkomiJime.gif',
    etapes: [
      'Croiser les bras avec les paumes orientées vers soi',
      'Insérer les revers profondément',
      'Tourner les poignets vers l’intérieur',
      'Serrer par rotation des avant-bras',
      'Maintenir la stabilité du corps'
    ],
    video: 'https://youtu.be/t3tQriIPdlI?si=2zPG6W4F0aODv5S0',
    prise: 'croisee',
    positionUke: 'dos',
    positionTori: 'dessus',
    type: 'sanguin',
    membresUtilises: ['bras','revers'],
    directionPression: 'circulaire',
  },

  'KataHaJime': {
    image: 'https://www.judopourtous.com/Images/NeKataHaJime.gif',
    etapes: [
      'Passer un bras autour du cou de Uke',
      'Saisir le revers opposé avec l’autre main',
      'Utiliser l’avant-bras libre comme levier',
      'Serrer en rapprochant bras et coude',
      'Contrôler la position de Uke'
    ],
    video: 'https://youtu.be/yaTGgRjnwB8?si=Eo2wZMeU5qi2neza',
    prise: 'croisee',
    positionUke: 'dos',
    positionTori: 'dessus',
    type: 'sanguin',
    membresUtilises: ['bras','revers'],
    directionPression: 'circulaire',
  },

  'SodeGurumaJime': {
    image: 'https://www.judopourtous.com/Images/NeSodeGurumaJime.gif',
    etapes: [
      'Saisir les deux manches de Uke',
      'Passer les avant-bras autour du cou',
      'Croiser les bras devant la gorge',
      'Serrer en rapprochant les coudes',
      'Stabiliser en restant bas'
    ],
    video: 'https://youtu.be/E3nvQzClcAU?si=u3TtbpYkfMWA9IiJ',
    prise: 'doubleRevers',
    positionUke: 'dos',
    positionTori: 'dessus',
    type: 'sanguin',
    membresUtilises: ['bras','revers'],
    directionPression: 'circulaire',
  },

  'KataEriJime': {
    image: 'https://www.judopourtous.com/Images/NeKataTeJime.jpg',
    etapes: [
      'Saisir un seul revers profondément',
      'Passer l’avant-bras sous le menton',
      'Utiliser le bras libre pour verrouiller',
      'Serrer en rotation du buste',
      'Maintenir la pression de façon progressive'
    ],
    video: '',
    prise: 'classique',
    positionUke: 'dos',
    positionTori: 'dessus',
    type: 'sanguin',
    membresUtilises: ['bras'],
    directionPression: 'circulaire',
  },

  'OkuriEriJimeAssis': {
    image: 'https://www.judopourtous.com/Images/NeOkuriEriJime.gif',
    etapes: [
      'Se placer derrière Uke assis',
      'Passer une main dans le revers opposé',
      'Placer l’autre main derrière la tête',
      'Serrer latéralement',
      'Contrôler le buste de Uke'
    ],
    video: 'https://youtu.be/EiqyoVcIAi8?si=_B-dQWll_aK4CE-D',
    prise: 'classique',
    positionUke: 'assis',
    positionTori: 'derriere',
    type: 'sanguin',
    membresUtilises: ['bras','revers'],
    directionPression: 'laterale',
  },

  'TsukkomiJime': {
    image: 'https://www.judopourtous.com/Images/NeTsukkomiJime.gif',
    etapes: [
      'Saisir profondément les revers',
      'Enfoncer les poignets contre le cou',
      'Utiliser les avant-bras comme leviers',
      'Appliquer une pression vers l’intérieur',
      'Stabiliser sans écraser Uke'
    ],
    video: '',
    prise: 'classique',
    positionUke: 'ventre',
    positionTori: 'dessus',
    type: 'respiratoire',
    membresUtilises: ['bras'],
    directionPression: 'laterale',
  },
};

export const kansetsuWaza: {[name: string]: KansetsuWaza} = {
  'JujiGatame': {
    image: 'https://www.jc-langegardien.fr/wp-content/uploads/2011/06/juji_gatame.gif',
    etapes: [
      'Isoler un bras de Uke',
      'Placer le bras de Uke entre les cuisses',
      'Bloquer l’épaule avec les cuisses',
      'Contrôler le poignet à deux mains',
      'Lever progressivement le bassin pour étendre le coude'
    ],
    video: 'https://youtu.be/OWgSOlCuMXw?si=5y4irLPgTOzEXdF7',
    prise: 'classique',
    positionUke: 'dos',
    positionTori: 'dessus',
    articulation: 'coude',
    typeLevier: 'hyperextension',
  },

  'UdeGarami': {
    image: 'https://www.jc-langegardien.fr/wp-content/uploads/2011/06/ude_garami.gif',
    etapes: [
      'Contrôler le bras de Uke au sol',
      'Plier le bras à angle droit',
      'Saisir le poignet et l’avant-bras',
      'Appliquer une torsion progressive',
      'Stabiliser l’épaule de Uke au sol'
    ],
    video: 'https://youtu.be/AIlTvZb4RlE?si=YnBerl6nYWUQVC5K',
    prise: 'classique',
    positionUke: 'dos',
    positionTori: 'dessus',
    articulation: 'coude',
    typeLevier: 'torsion',
  },

  'UdeHishigiUdeGatame': {
    image: 'https://judo-lemanique.ch/wp-content/uploads/2021/04/Ude-Hishigi-Ude-Gatame-removebg-preview.png',
    etapes: [
      'Contrôler le bras tendu de Uke',
      'Positionner l’avant-bras comme levier',
      'Bloquer l’épaule avec le corps',
      'Maintenir le bras aligné',
      'Appliquer une extension progressive'
    ],
    video: 'https://youtu.be/SBf0aTma1VI?si=I3-lc7spt6OQr5-a',
    prise: 'classique',
    positionUke: 'dos',
    positionTori: 'dessus',
    articulation: 'coude',
    typeLevier: 'hyperextension',
  },

  'UdeHishigiJujiGatame': {
    image: 'https://judo-lemanique.ch/wp-content/uploads/2021/04/Ude-Hishigi-Jugi-Gatame-removebg-preview.png',
    etapes: [
      'Amener le bras de Uke entre les jambes',
      'Croiser les jambes pour bloquer l’épaule',
      'Contrôler le poignet avec les deux mains',
      'Aligner le coude',
      'Soulever progressivement le bassin'
    ],
    video: 'https://youtu.be/OWgSOlCuMXw?si=ZrtGB2GoTyUUNUyZ',
    prise: 'classique',
    positionUke: 'dos',
    positionTori: 'dessus',
    articulation: 'coude',
    typeLevier: 'hyperextension',
  },

  'UdeHishigiHizaGatame': {
    image: 'https://www.judosport.net/technik/udehishigihiza1.240x150.gif',
    etapes: [
      'Contrôler le bras de Uke sur le côté',
      'Placer le genou contre le coude',
      'Maintenir le poignet fermement',
      'Bloquer l’épaule avec le corps',
      'Appuyer progressivement avec le genou'
    ],
    video: 'https://youtu.be/H2HtAJdiJcE?si=v_L5cPhXpvICRXHr',
    prise: 'classique',
    positionUke: 'cote',
    positionTori: 'cote',
    articulation: 'coude',
    typeLevier: 'hyperextension',
  },

  'UdeHishigiWakiGatame': {
    image: 'https://judo-lemanique.ch/wp-content/uploads/2021/04/Ude-Hishigi-Waki-Gatame-removebg-preview-1.png',
    etapes: [
      'Isoler le bras de Uke',
      'Coincer le bras sous l’aisselle',
      'Contrôler le poignet',
      'Aligner le coude',
      'Appliquer une extension vers le bas'
    ],
    video: 'https://youtu.be/8F5p1zuJRG0?si=dvhl4Khtgv9tbIrd',
    prise: 'classique',
    positionUke: 'ventre',
    positionTori: 'dessus',
    articulation: 'coude',
    typeLevier: 'hyperextension',
  },

  'UdeHishigiHaraGatame': {
    image: 'https://judo-lemanique.ch/wp-content/uploads/2021/04/ude-hishigi-hara-gatame-removebg-preview.png',
    etapes: [
      'Contrôler le bras de Uke au sol',
      'Placer le ventre contre le bras',
      'Bloquer l’épaule avec le poids du corps',
      'Maintenir le poignet',
      'Appliquer une extension progressive'
    ],
    video: 'https://youtu.be/ZzEycg8R_9M?si=k1RhmBMwuPqJKAjW',
    prise: 'classique',
    positionUke: 'ventre',
    positionTori: 'dessus',
    articulation: 'coude',
    typeLevier: 'hyperextension',
  },

  'UdeHishigiAshiGatame': {
    image: 'https://judo-lemanique.ch/wp-content/uploads/2021/04/ude-shigi-ashi-gatame-removebg-preview.png',
    etapes: [
      'Contrôler le bras de Uke sur le côté',
      'Placer la jambe sur le bras',
      'Bloquer l’épaule avec le corps',
      'Maintenir le poignet',
      'Étendre le coude en levant la jambe'
    ],
    video: 'https://youtu.be/ClY7g_pX-4s?si=GcsV7iFfFqqYg5qA',
    prise: 'classique',
    positionUke: 'dos',
    positionTori: 'cote',
    articulation: 'coude',
    typeLevier: 'hyperextension',
  },

  'AshiGarami': {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUpyQoU23PrWl9IgS-SFNvCjYZXM6Hm0RIaQ&s',
    etapes: [
      'Contrôler le bras de Uke au sol',
      'Enrouler la jambe autour du bras',
      'Bloquer l’épaule avec le corps',
      'Créer une torsion contrôlée',
      'Maintenir sans mouvement brusque'
    ],
    video: 'https://youtu.be/BWWb0GoAtZw?si=J4rjDfbXAQSzJTbe',
    prise: undefined,
    positionUke: 'cote',
    positionTori: 'cote',
    articulation: 'coude',
    typeLevier: 'torsion',
  },
};

export const ashiWaza: {[name: string]: AshiWaza} = {
  'DeAshiHarai': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/De-ashi-barai.jpg',
    etapes: [
      'Accompagner le déplacement latéral de Uke',
      'Créer un déséquilibre par traction des bras',
      'Attendre que le pied de Uke effleure le sol',
      'Balayer le pied au ras du tatami',
      'Accompagner la chute sans pousser'
    ],
    video: 'https://youtu.be/4BUUvqxi_Kk?si=yskIi6uZnVD58oXr',
    prise: 'classique',
    variante: ['DeAshiBaraiGauche', 'DeAshiBaraiDroite'],
    action: 'balayage',
    directionAR: 'avant',
    directionLaterale: undefined,
    deplacementUke: 'lateral',
  },

  'OkuriAshiHarai': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Okuri-ashi-barai.jpg/250px-Okuri-ashi-barai.jpg',
    etapes: [
      'Provoquer un déplacement latéral de Uke',
      'Synchroniser le moment où les pieds se rapprochent',
      'Balayer les deux pieds dans le même sens',
      'Maintenir la traction des bras',
      'Accompagner la rotation de Uke au sol'
    ],
    video: 'https://youtu.be/nw1ZdRjrdRI?si=Fal01HPwQGtb6jDe',
    prise: 'classique',
    variante: [],
    action: 'balayage',
    directionAR: 'avant',
    directionLaterale: undefined,
    deplacementUke: 'lateral',
  },

  'SasaeTsuriKomiAshi': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Sasae-tsuri-komi-ashi.jpg',
    etapes: [
      'Créer un déséquilibre vers l’avant',
      'Placer la plante du pied contre la cheville de Uke',
      'Bloquer la jambe sans faucher',
      'Lever et tirer avec les bras',
      'Accompagner la chute en rotation'
    ],
    video: 'https://youtu.be/699i--pvYmE?si=aGVLXQ-6OVWfJ3Pk',
    prise: 'classique',
    action: 'blocage',
    directionAR: 'avant',
    directionLaterale: undefined,
    deplacementUke: 'statique',
  },

  'HizaGuruma': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Hiza-guruma.jpg',
    etapes: [
      'Déséquilibrer Uke vers l’avant',
      'Placer le pied contre le genou',
      'Bloquer la rotation de la jambe',
      'Tirer avec les bras en cercle',
      'Accompagner la chute'
    ],
    video: 'https://youtu.be/JPJx9-oAVns?si=ZKTHP21JNUyqN6Tc',
    prise: 'classique',
    action: 'blocage',
    directionAR: 'avant',
    directionLaterale: undefined,
    deplacementUke: 'statique',
  },

  'KoSotoGari': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Ko-soto-gari.jpg',
    etapes: [
      'Créer un déséquilibre latéral',
      'Placer la jambe derrière celle de Uke',
      'Faucher avec un mouvement court',
      'Maintenir le buste de Uke incliné',
      'Accompagner la chute sur le côté'
    ],
    video: 'https://youtu.be/jeQ541ScLB4?si=WSeKrUVlxUYng-qF',
    prise: 'classique',
    variante: [],
    action: 'fauchage',
    directionAR: undefined,
    directionLaterale: 'droite',
    deplacementUke: 'statique',
  },

  'KoSotoGake': {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqo_cxqj2q2-7F3OP4BbEbgAVII-OoEZuXRQ&s',
    etapes: [
      'Déséquilibrer Uke sur l’arrière',
      'Accrocher la jambe avec le pied',
      'Bloquer la jambe sans faucher',
      'Pousser le haut du corps',
      'Accompagner la chute'
    ],
    video: 'https://youtu.be/8b6kY4s4zH4?si=ddPziSJDYXFxN-wU',
    prise: 'classique',
    variante: [],
    action: 'blocage',
    directionAR: undefined,
    directionLaterale: 'droite',
    deplacementUke: 'statique',
  },

  'KoUchiGari': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Ko-uchi-gari.jpg',
    etapes: [
      'Créer un déséquilibre vers l’arrière',
      'Entrer la jambe entre celles de Uke',
      'Faucher la jambe intérieure',
      'Maintenir la traction des bras',
      'Accompagner la chute'
    ],
    video: 'https://youtu.be/3Jb3tZvr9Ng?si=8cXj8hp_jteFUfOD',
    prise: 'classique',
    variante: [],
    action: 'fauchage',
    directionAR: undefined,
    directionLaterale: 'gauche',
    deplacementUke: 'statique',
  },

  'OUchiGari': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/O-uchi-gari.jpg',
    etapes: [
      'Provoquer l’avance de Uke',
      'Entrer profondément la jambe',
      'Faucher la jambe intérieure',
      'Contrôler le buste',
      'Accompagner la chute vers l’arrière'
    ],
    video: 'https://youtu.be/0itJFhV9pDQ?si=dqfmqCJKhvu90sEb',
    prise: 'classique',
    variante: [],
    action: 'fauchage',
    directionAR: 'arriere',
    directionLaterale: undefined,
    deplacementUke: 'avance',
  },

  'OSotoGari': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/O-soto-gari.jpg/250px-O-soto-gari.jpg',
    etapes: [
      'Créer un déséquilibre arrière',
      'Placer la jambe à l’extérieur',
      'Faucher la jambe de Uke',
      'Maintenir la poitrine proche',
      'Accompagner la chute'
    ],
    video: 'https://youtu.be/c-A_nP7mKAc?si=fsF2kslyD8ibajks',
    prise: 'classique',
    variante: [],
    action: 'fauchage',
    directionAR: 'arriere',
    directionLaterale: undefined,
    deplacementUke: 'recule',
  },

  'HaraiTsurikomiAshi': {
    image: 'https://judo-lemanique.ch/wp-content/uploads/2022/01/Harai-tsurikomi-ashi-removebg-preview.png',
    etapes: [
      'Créer une avancée de Uke',
      'Placer la jambe en balayage',
      'Balayer la jambe au moment opportun',
      'Soulever et tirer avec les bras',
      'Accompagner la rotation'
    ],
    video: 'https://youtu.be/gGPXvWL8VbE?si=PqHJv5dimhKijB3r',
    prise: 'classique',
    variante: [],
    action: 'balayage',
    directionAR: 'arriere',
    directionLaterale: undefined,
    deplacementUke: 'avance',
  },

  'TsubameGaeshi': {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtzpux8yqNsplaqFtDqwCShX2iWDwaMLqcuw&s',
    etapes: [
      'Subir un balayage de Uke',
      'Retirer la jambe attaquée',
      'Enchaîner immédiatement un balayage inverse',
      'Maintenir l’équilibre du buste',
      'Accompagner la chute'
    ],
    video: 'https://youtu.be/GwweWqqFB5g?si=ckqBt1JS0OgIphU1',
    prise: undefined,
    variante: ['TsubameGaeshiDroite', 'TsubameGaeshiGauche'],
    action: 'balayage',
    directionAR: 'arriere',
    directionLaterale: undefined,
    deplacementUke: 'recule',
  },
};

export const teWaza: {[name: string]: TeWaza} = {
  'IpponSeoiNage': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Ippon-seoi-nage.jpg',
    etapes: [
      'Saisir fermement le revers de Uke avec le bras dominant',
      'Amener le bras sous l’aisselle de Uke et tourner le dos',
      'Placer le pied proche de celui de Uke',
      'Lever le bras pour charger Uke sur votre dos et projeter vers l’avant',
      'Accompagner la chute pour contrôler Uke au sol'
    ],
    video: 'https://youtu.be/FQnOlCxo4oI?si=vVwC_CyVbFHRzsWj',
    prise: 'classique',
    variante: ['KatateSeoiNage'],
    brasDominant: 'droite',
    tractionPrincipale: 'avant',
    directionAR: 'avant',
    directionLaterale: undefined,
    deplacementUke: 'avance',
  },

  'MoroteSeoiNage': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Morote-seoi-nage.jpg',
    etapes: [
      'Saisir le revers et la manche de Uke avec les deux mains',
      'Créer un déséquilibre vers l’avant',
      'Tourner le dos et placer les pieds proches de ceux de Uke',
      'Soulever Uke sur votre dos',
      'Projeter Uke vers l’avant en accompagnant la chute'
    ],
    video: 'https://youtu.be/zIq0xI0ogxk?si=W28lTNoR7K3BH8HL',
    prise: 'classique',
    variante: [],
    brasDominant: 'droite',
    tractionPrincipale: 'avant',
    directionAR: 'avant',
    directionLaterale: undefined,
    deplacementUke: 'avance',
  },

  'EriSeoiNage': {
    image: 'https://atlantiquejudo.com/wp-content/uploads/2020/01/eriseoinage.gif',
    etapes: [
      'Saisir le revers opposé de Uke',
      'Créer un déséquilibre circulaire vers l’avant',
      'Tourner le corps et placer le pied proche de Uke',
      'Soulever Uke avec le bras dominant',
      'Projeter Uke en avant et contrôler la chute'
    ],
    video: 'https://youtu.be/zIq0xI0ogxk?si=W28lTNoR7K3BH8HL',
    prise: 'croisee',
    variante: ['KataEriSeoi'],
    brasDominant: 'droite',
    tractionPrincipale: 'circulaire',
    directionAR: 'avant',
    directionLaterale: undefined,
    deplacementUke: 'avance',
  },

  'TaiOtoshi': {
    image: 'https://judo-lemanique.ch/wp-content/uploads/2021/04/Tai-otoshi-removebg-preview.png',
    etapes: [
      'Saisir le revers et la manche de Uke',
      'Créer un déséquilibre vers l’avant',
      'Étendre une jambe devant Uke pour bloquer ses pieds',
      'Faire pivoter le corps et tirer Uke par les bras',
      'Accompagner la chute au sol'
    ],
    video: 'https://youtu.be/4x6S3Q-Ktv8?si=N7nFwjwH5Jfn44UC',
    prise: 'classique',
    variante: [],
    brasDominant: 'droite',
    tractionPrincipale: 'avant',
    directionAR: 'avant',
    directionLaterale: undefined,
    deplacementUke: 'statique',
  },

  'SumiOtoshi': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Sumi-otoshi.jpg',
    etapes: [
      'Saisir Uke en prise classique',
      'Créer un déséquilibre circulaire latéral',
      'Pivoter légèrement pour contrôler le corps',
      'Faire tomber Uke en le guidant avec les bras',
      'Accompagner la chute au sol'
    ],
    video: 'https://youtu.be/lLU9wv52ni0?si=o1TKEp15nN8PR9H8',
    prise: 'classique',
    variante: [],
    brasDominant: 'droite',
    tractionPrincipale: 'circulaire',
    directionAR: undefined,
    directionLaterale: 'gauche',
    deplacementUke: 'statique',
  },

  'KataGuruma': {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZKWPzvBvJA0QkploizWEtpH5vtzKGu2v9gQ&s',
    etapes: [
      'Saisir Uke par le revers ou la manche',
      'Placer la tête sous l’aisselle pour préparer le levier',
      'Accroupir et charger Uke sur vos épaules',
      'Soulever Uke en pivotant',
      'Projeter Uke vers l’avant en contrôlant la chute'
    ],
    video: 'https://youtu.be/cnHRhSy8yi4?si=Yag5RdzkEQ3oZW3i',
    prise: 'classique',
    variante: [],
    brasDominant: 'droite',
    tractionPrincipale: 'haut',
    directionAR: 'avant',
    directionLaterale: undefined,
    deplacementUke: 'statique',
  },

  'UkiOtoshi': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Uki-otoshi.jpg/250px-Uki-otoshi.jpg',
    etapes: [
      'Saisir Uke et créer un déséquilibre vers l’avant',
      'Tourner légèrement pour guider le corps de Uke',
      'Tirer Uke vers le bas',
      'Maintenir un contrôle des bras et du buste',
      'Accompagner la chute en douceur'
    ],
    video: 'https://youtu.be/6H5tmncOY4Q?si=C4Md_IflYm15ZRAl',
    prise: 'classique',
    variante: [],
    brasDominant: 'droite',
    tractionPrincipale: 'circulaire',
    directionAR: 'avant',
    directionLaterale: undefined,
    deplacementUke: 'statique',
  },

  'TeGuruma': {
    image: 'https://judo-lemanique.ch/wp-content/uploads/2022/01/Te-Guruma-removebg-preview.png',
    etapes: [
      'Saisir Uke au niveau des jambes ou des hanches',
      'Plier les genoux pour préparer le levier',
      'Soulever Uke sur l’épaule',
      'Pivoter pour projeter Uke en avant',
      'Accompagner la chute en contrôlant le buste'
    ],
    video: '',
    prise: 'classique',
    variante: ['SukuiNage'],
    brasDominant: 'droite',
    tractionPrincipale: 'haut',
    directionAR: 'avant',
    directionLaterale: undefined,
    deplacementUke: 'statique',
  },

  'MoroteGari': {
    image: 'https://judo-lemanique.ch/wp-content/uploads/2022/01/Morote-gari.svg-removebg-preview.png',
    etapes: [
      'Saisir les jambes de Uke avec les deux bras',
      'Créer un déséquilibre vers l’avant',
      'Pencher le buste en avant pour lever les jambes',
      'Tirer les jambes pour faire tomber Uke',
      'Maintenir le contrôle de la chute'
    ],
    video: 'https://youtu.be/BHLQS4K85bs?si=g-fuAmCM4maDcljX',
    prise: undefined,
    variante: [],
    brasDominant: 'droite',
    tractionPrincipale: 'haut',
    directionAR: undefined,
    directionLaterale: undefined,
    deplacementUke: 'avance',
  },

  'KuchikiDaoshi': {
    image: 'https://judo-lemanique.ch/wp-content/uploads/2022/01/Kuchiki-Taoshi-removebg-preview.png',
    etapes: [
      'Saisir une jambe isolée de Uke',
      'Créer un déséquilibre vers l’arrière',
      'Pencher le buste pour bloquer la jambe',
      'Tirer et pousser simultanément',
      'Accompagner la chute au sol'
    ],
    video: 'https://youtu.be/ZNL47q1aJNY?si=HTgR4hxfwrkMM2Ms',
    prise: undefined,
    variante: [],
    brasDominant: 'droite',
    tractionPrincipale: 'circulaire',
    directionAR: undefined,
    directionLaterale: undefined,
    deplacementUke: 'recule',
  },

  'KibisuGaeshi': {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWQezKm0ohMD6DzXZyxn7KMg_dahj5Ouw7w&s',
    etapes: [
      'Saisir le talon de Uke',
      'Créer un déséquilibre vers l’avant ou latéral',
      'Faucher le pied en arrière',
      'Maintenir la traction des bras',
      'Accompagner la chute en douceur'
    ],
    video: 'https://youtu.be/tJylJYfBliA?si=zjGSCz9IHqfSDysI',
    prise: undefined,
    variante: [],
    brasDominant: 'droite',
    tractionPrincipale: 'avant',
    directionAR: undefined,
    directionLaterale: undefined,
    deplacementUke: 'lateral',
  },
};

export const koshiWaza: {[name: string]: KoshiWaza} = {
  'OGoshi': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/72/O-goshi.jpg',
    etapes: [
      'Saisir le revers de Uke avec le bras dominant',
      'Créer un déséquilibre vers l’avant',
      'Placer le dos contre Uke et passer la hanche en dessous de la sienne',
      'Soulever Uke sur la hanche',
      'Projeter Uke en avant en accompagnant la chute'
    ],
    video: 'https://youtu.be/yhu1mfy2vJ4?si=ePoWkcGlluwajXqn',
    prise: 'classique',
    variante: [],
    contactHanche: 'frontal',
    directionAR: 'avant',
    directionLaterale: undefined,
    deplacementUke: 'avance',
  },

  'KoshiGuruma': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Koshi-guruma.jpg',
    etapes: [
      'Saisir la tête et le revers de Uke',
      'Créer un déséquilibre vers l’avant',
      'Placer la hanche sous Uke et tourner le dos',
      'Soulever Uke sur l’épaule',
      'Projeter Uke en avant et contrôler la chute'
    ],
    video: 'https://youtu.be/SU7Id6uVJ44?si=4EPzu4arIIFdpEUP',
    prise: 'classique',
    variante: [],
    contactHanche: 'frontal',
    directionAR: 'avant',
    directionLaterale: undefined,
    deplacementUke: 'statique',
  },

  'TsuriGoshi': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Tsuri-goshi.jpg',
    etapes: [
      'Saisir la manche et le revers de Uke',
      'Créer un déséquilibre vers l’avant',
      'Placer la hanche sous Uke',
      'Soulever Uke verticalement en utilisant la traction',
      'Projeter Uke en avant en accompagnant la chute'
    ],
    video: 'https://youtu.be/51Htlp7xEvE?si=9yIZHBInvbFt8w3T',
    prise: 'classique',
    variante: ['OTsuriGoshi','KoTsuriGoshi'],
    contactHanche: 'frontal',
    directionAR: 'avant',
    directionLaterale: undefined,
    deplacementUke: 'avance',
  },

  'SodeTsuriKomiGoshi': {
    image: 'https://judo-lemanique.ch/wp-content/uploads/2021/04/Sode-tsuri-komi-goshi-removebg-preview.png',
    etapes: [
      'Saisir les revers de Uke avec les deux mains',
      'Créer un déséquilibre vers l’avant',
      'Placer la hanche sous Uke et tourner le dos',
      'Soulever Uke en utilisant les bras',
      'Projeter Uke en avant et contrôler la chute'
    ],
    video: 'https://youtu.be/QsmAxpmYLOI?si=qC1qv2Lnj_RK9Ka5',
    prise: 'croisee',
    variante: [],
    contactHanche: 'frontal',
    directionAR: 'avant',
    directionLaterale: undefined,
    deplacementUke: 'statique',
  },

  'UkiGoshi': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Uki-goshi2.jpg',
    etapes: [
      'Saisir le revers de Uke',
      'Créer un déséquilibre vers l’avant',
      'Tourner le corps et placer la hanche légèrement sous Uke',
      'Faire pivoter Uke sur le côté',
      'Accompagner la chute et contrôler Uke'
    ],
    video: 'https://youtu.be/bPKwtB4lyOQ?si=KMZwdfqo-mJ6wvTc',
    prise: 'classique',
    variante: [],
    contactHanche: 'frontal',
    directionAR: 'avant',
    directionLaterale: undefined,
    deplacementUke: 'statique',
  },

  'UtsuriGoshi': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Utsuri-goshi.jpg',
    etapes: [
      'Saisir Uke par le revers et la manche',
      'Créer un déséquilibre latéral',
      'Placer la hanche sous Uke et lever légèrement',
      'Transférer Uke de l’épaule avant à l’arrière',
      'Projeter Uke en pivotant et accompagner la chute'
    ],
    video: 'https://youtu.be/4pQd_bEnlf0?si=sLTJ6cBtu12PV07k',
    prise: 'classique',
    variante: [],
    contactHanche: 'frontal',
    directionAR: undefined,
    directionLaterale: undefined,
    deplacementUke: 'lateral',
  },

  'HaraiGoshi': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Harai-goshi.jpg',
    etapes: [
      'Saisir le revers et la manche de Uke',
      'Créer un déséquilibre vers l’avant et à droite',
      'Placer la hanche et balayer la jambe de Uke',
      'Soulever légèrement Uke avec les bras',
      'Projeter Uke en avant en contrôlant la chute'
    ],
    video: 'https://youtu.be/qTo8HlAAkOo?si=oo6qIhzM0vxo1Dcc',
    prise: 'classique',
    variante: [],
    contactHanche: 'frontal',
    directionAR: 'avant',
    directionLaterale: 'droite',
    deplacementUke: 'avance',
  },

  'HaneGoshi': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Hane-goshi.jpg',
    etapes: [
      'Saisir le revers et la manche de Uke',
      'Créer un déséquilibre vers l’avant et à gauche',
      'Placer la hanche et lever la jambe pour bloquer Uke',
      'Projeter Uke en effectuant un balayage avec la jambe',
      'Accompagner la chute et maintenir le contrôle'
    ],
    video: 'https://youtu.be/M9_7De6A1kk?si=Y6VSQsZWtCCe1QhT',
    prise: 'classique',
    variante: [],
    contactHanche: 'frontal',
    directionAR: 'avant',
    directionLaterale: 'gauche',
    deplacementUke: 'avance',
  },

  'KubiNage': {
    image: 'https://judo-lemanique.ch/wp-content/uploads/2021/04/Kubi-Nage.png',
    etapes: [
      'Saisir le cou de Uke avec précaution',
      'Créer un déséquilibre vers l’avant',
      'Amener la tête de Uke vers le côté',
      'Utiliser la hanche comme levier pour projeter Uke',
      'Accompagner la chute en douceur'
    ],
    video: '',
    prise: undefined,
    variante: [],
    contactHanche: 'frontal',
    directionAR: 'avant',
    directionLaterale: undefined,
    deplacementUke: 'statique',
  },

  'KoshiUchiMata': {
    image: 'https://www.judopourtous.com/Images/TachiUchiMataKoshi.jpg',
    etapes: [
      'Saisir le revers et la manche de Uke',
      'Créer un déséquilibre vers l’avant et à gauche',
      'Placer la hanche et lever la jambe interne',
      'Projeter Uke en pivotant la hanche',
      'Accompagner la chute et maintenir le contrôle'
    ],
    video: '',
    prise: 'classique',
    variante: [],
    contactHanche: 'frontal',
    directionAR: 'avant',
    directionLaterale: 'gauche',
    deplacementUke: 'avance',
  },

  'UshiroGoshi': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Ushiro-goshi.jpg',
    etapes: [
      'Saisir Uke par le revers ou la taille',
      'Créer un déséquilibre vers l’arrière',
      'Placer les hanches derrière Uke',
      'Soulever Uke en utilisant le levier des jambes et des hanches',
      'Projeter Uke vers l’arrière en contrôlant la chute'
    ],
    video: 'https://youtu.be/ORIYstuxYT8?si=uBAUjKHc-w0ZLm1G',
    prise: 'classique',
    variante: [],
    contactHanche: 'lateral',
    directionAR: 'arriere',
    directionLaterale: undefined,
    deplacementUke: 'recule',
  },

  'OTsuriGoshi': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Tsuri-goshi.jpg',
    etapes: [
      'Saisir la manche et le revers de Uke',
      'Créer un déséquilibre vers l’avant',
      'Placer la hanche sous Uke',
      'Soulever Uke verticalement avec traction',
      'Projeter Uke en avant en accompagnant la chute'
    ],
    video: 'https://youtu.be/4pQd_bEnlf0?si=_ywXbCPC6JxnFXTq',
    prise: 'classique',
    variante: [],
    contactHanche: 'frontal',
    directionAR: 'avant',
    directionLaterale: undefined,
    deplacementUke: 'avance',
  },

  'KoTsuriGoshi': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Tsuri-goshi.jpg',
    etapes: [
      'Saisir le revers et la manche de Uke',
      'Créer un déséquilibre vers l’avant',
      'Placer la hanche sous Uke et préparer le levier',
      'Soulever Uke en pivotant',
      'Projeter Uke en avant et contrôler la chute'
    ],
    video: '',
    prise: 'classique',
    variante: [],
    contactHanche: 'frontal',
    directionAR: 'avant',
    directionLaterale: undefined,
    deplacementUke: 'avance',
  },

  'UchiMataSukashi': {
    image: 'https://www.jc-langegardien.fr/wp-content/uploads/2011/06/Uchi-mata-sukashi2.gif',
    etapes: [
      'Attendre l’attaque de Uke en Uchi-mata',
      'Créer un déséquilibre en esquivant légèrement le corps',
      'Laisser Uke tomber en exploitant son propre mouvement',
      'Accompagner la chute sans utiliser la force',
      'Maintenir le contrôle après la chute'
    ],
    video: 'https://youtu.be/V-RS3uhtVWM?si=bDu2T3vkoleAVX87',
    prise: undefined,
    variante: [],
    contactHanche: 'frontal',
    directionAR: undefined,
    directionLaterale: undefined,
    deplacementUke: 'lateral',
  },
};

export const sutemiWaza: {[name: string]: SutemiWaza} = {
  'TomoeNage': {
    image: 'https://judo-lemanique.ch/wp-content/uploads/2021/04/Tomoe-nage-removebg-preview.png',
    etapes: [
      'Saisir le revers et la manche de Uke',
      'Créer un déséquilibre vers l’arrière',
      'Placer un pied sur le bas-ventre ou la hanche de Uke',
      'S’incliner en arrière en tirant Uke par la manche et le revers',
      'Projeter Uke par-dessus la tête et accompagner la chute'
    ],
    video: 'https://youtu.be/880WbHvHv6A?si=Ew_EcE79Dv-bMsT8',
    prise: 'classique',
    variante: ['YokoTomoeNage'],
    directionChuteTori: 'arriere',
    directionAR: 'arriere',
    directionLaterale: undefined,
    deplacementUke: 'recule',
  },

  'UraNage': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Ura-nage_%28cropped%29.jpg',
    etapes: [
      'Saisir Uke par la ceinture ou le revers',
      'Créer un déséquilibre vers l’arrière',
      'Placer les hanches sous Uke et préparer le levier',
      'Soulever Uke en arrière',
      'Projeter Uke au sol en contrôlant la chute'
    ],
    video: 'https://youtu.be/Fgi9b8DJ5sQ?si=X6wTttzih61paNol',
    prise: 'classique',
    variante: ['IdakiSutemi'],
    directionChuteTori: 'arriere',
    directionAR: 'arriere',
    directionLaterale: undefined,
    deplacementUke: 'recule',
  },

  'SumiGaeshi': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Sumi-gaeshi2.jpg',
    etapes: [
      'Saisir le revers et la manche de Uke',
      'Créer un déséquilibre vers l’arrière et légèrement sur le côté',
      'Glisser un pied sur le bas-ventre de Uke',
      'Basculer en arrière en tirant Uke avec les bras',
      'Projeter Uke en arrière et accompagner la chute'
    ],
    video: 'https://youtu.be/5VhduA5xkbA?si=b-HfV3bqTPGY0wrT',
    prise: 'classique',
    variante: [],
    directionChuteTori: 'arriere',
    directionAR: 'arriere',
    directionLaterale: undefined,
    deplacementUke: 'recule',
  },

  'YokoGuruma': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Yoko-guruma.jpg',
    etapes: [
      'Saisir la manche et le revers de Uke',
      'Créer un déséquilibre latéral',
      'Tourner le corps et placer la hanche en dessous de Uke',
      'Basculer sur le côté en soulevant Uke',
      'Projeter Uke latéralement et contrôler la chute'
    ],
    video: 'https://youtu.be/MehP6I5cY2c?si=eYMKDuz_qbM_Mikf',
    prise: 'classique',
    variante: [],
    directionChuteTori: 'laterale',
    directionAR: undefined,
    directionLaterale: 'droite',
    deplacementUke: 'lateral',
  },

  'YokoOtoshi': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Yoko-otoshi.jpg',
    etapes: [
      'Saisir le revers ou la manche de Uke',
      'Créer un déséquilibre latéral',
      'Abaisser le corps sur le côté',
      'Accompagner la chute de Uke au sol',
      'Maintenir le contrôle en fin de projection'
    ],
    video: 'https://youtu.be/MnNG67pF_a0?si=OP2kIbIoj_Oxmzlj',
    prise: 'classique',
    variante: [],
    directionChuteTori: 'laterale',
    directionAR: undefined,
    directionLaterale: 'droite',
    deplacementUke: 'lateral',
  },

  'YokoGake': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Yoko-gake.jpg',
    etapes: [
      'Saisir la manche et le revers de Uke',
      'Créer un déséquilibre latéral vers la droite',
      'Glisser la jambe externe derrière la jambe de Uke',
      'Basculer sur le côté en tirant Uke',
      'Projeter Uke latéralement et contrôler la chute'
    ],
    video: 'https://youtu.be/tP1Sj1uDfSo?si=7HAywVKPwDOONLTA',
    prise: 'classique',
    variante: [],
    directionChuteTori: 'laterale',
    directionAR: undefined,
    directionLaterale: 'droite',
    deplacementUke: 'lateral',
  },

  'YokoWakare': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Yoko-wakare.jpg',
    etapes: [
      'Saisir Uke par le revers',
      'Créer un déséquilibre latéral vers la gauche',
      'S’incliner sur le côté pour abaisser le centre de gravité',
      'Accompagner Uke dans la rotation latérale',
      'Projeter Uke au sol sur le côté et contrôler'
    ],
    video: 'https://youtu.be/bp1tscHlePI?si=0XLah_NfTledxBPW',
    prise: 'classique',
    variante: [],
    directionChuteTori: 'laterale',
    directionAR: undefined,
    directionLaterale: 'gauche',
    deplacementUke: 'lateral',
  },

  'UkiWaza': {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLItjYI-p15jPc4ckS3b2t-npb8xp0mwjn8g&s',
    etapes: [
      'Saisir la manche et le revers de Uke',
      'Créer un déséquilibre latéral vers la gauche',
      'S’asseoir et placer la hanche sous Uke',
      'Projeter Uke en pivotant sur le côté',
      'Accompagner et contrôler la chute'
    ],
    video: 'https://youtu.be/weVOpJ63gII?si=wt9i__opqYtWXoqJ',
    prise: 'classique',
    variante: [],
    directionChuteTori: 'laterale',
    directionAR: undefined,
    directionLaterale: 'gauche',
    deplacementUke: 'lateral',
  },

  'TaniOtoshi': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Tani-otoshi.jpg',
    etapes: [
      'Saisir le revers et la manche de Uke',
      'Créer un déséquilibre vers l’arrière et légèrement latéral',
      'S’écarter et placer la jambe derrière Uke',
      'Abaisser le corps pour faire tomber Uke en arrière',
      'Accompagner la chute et contrôler'
    ],
    video: 'https://youtu.be/3b9Me3Fohpk?si=ROeHBsC4UBIHw1Kg',
    prise: 'classique',
    variante: [],
    directionChuteTori: 'laterale',
    directionAR: undefined,
    directionLaterale: 'gauche',
    deplacementUke: 'avance',
  },

  'YokoTomoeNage': {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmWU7CdI7nXqV1EeY6CVDUhlkVsDSHTSggvw&s',
    etapes: [
      'Saisir le revers et la manche de Uke',
      'Créer un déséquilibre latéral vers la droite',
      'Placer un pied sur le bas-ventre de Uke',
      'S’incliner sur le côté en tirant Uke',
      'Projeter Uke latéralement et accompagner la chute'
    ],
    video: '',
    prise: 'classique',
    variante: [],
    directionChuteTori: 'laterale',
    directionAR: undefined,
    directionLaterale: 'droite',
    deplacementUke: 'lateral',
  },

  'WakiOtoshi': {
    image: 'https://www.jc-langegardien.fr/wp-content/uploads/2011/06/wakiotoshi.gif',
    etapes: [
      'Saisir Uke par le revers ou la manche',
      'Créer un déséquilibre latéral vers la droite',
      'Placer le bras sous l’aisselle de Uke',
      'Se pencher sur le côté pour faire tomber Uke',
      'Accompagner la chute et contrôler'
    ],
    video: '',
    prise: 'classique',
    variante: ['SukuriNage'],
    directionChuteTori: 'laterale',
    directionAR: undefined,
    directionLaterale: 'droite',
    deplacementUke: 'lateral',
  },

  'SotoMakikomi': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Soto-makikomi2.jpg',
    etapes: [
      'Saisir le revers et la manche de Uke',
      'Créer un déséquilibre latéral',
      'Tourner le corps et envelopper Uke avec le bras externe',
      'Se laisser tomber sur le côté en entraînant Uke',
      'Projeter Uke latéralement et contrôler la chute'
    ],
    video: 'https://youtu.be/bWG9O1BVKtQ?si=3EHWb_EkDVV34WCh',
    prise: 'classique',
    variante: [],
    directionChuteTori: 'laterale',
    directionAR: undefined,
    directionLaterale: 'droite',
    deplacementUke: 'lateral',
  },

  'UchiMataMakikomi': {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSxnTgOksbchSJEbLWdqyrFOR1_TfwNmXTiA&s',
    etapes: [
      'Saisir le revers et la manche de Uke',
      'Créer un déséquilibre latéral gauche',
      'Tourner le corps et envelopper Uke avec le bras',
      'Se laisser tomber sur le côté en entraînant Uke',
      'Projeter Uke latéralement et contrôler la chute'
    ],
    video: 'https://youtu.be/jZXENTLpJCI?si=XrbS5xFDdH9X4PoI',
    prise: 'classique',
    variante: [],
    directionChuteTori: 'laterale',
    directionAR: undefined,
    directionLaterale: 'gauche',
    deplacementUke: 'lateral',
  },

  'KoUchiMakikomi': {
    image: 'https://www.jc-langegardien.fr/wp-content/uploads/2011/06/KoUchiMakikomi.gif',
    etapes: [
      'Saisir Uke par la manche',
      'Créer un déséquilibre latéral gauche',
      'Tourner le corps et envelopper Uke',
      'Se laisser tomber sur le côté en entraînant Uke',
      'Projeter Uke latéralement et contrôler la chute'
    ],
    video: 'https://youtu.be/_1eygIXLD_w?si=R-A-F1dQeYWBv_kC',
    prise: 'classique',
    variante: [],
    directionChuteTori: 'laterale',
    directionAR: undefined,
    directionLaterale: 'gauche',
    deplacementUke: 'lateral',
  },

  'OUchiMakikomi': {
    image: 'https://bojovky.info/wp-content/uploads/ouchimakikomi.gif',
    etapes: [
      'Saisir le revers et la manche de Uke',
      'Créer un déséquilibre latéral gauche',
      'Tourner le corps et envelopper Uke',
      'Se laisser tomber sur le côté en entraînant Uke',
      'Projeter Uke latéralement et contrôler la chute'
    ],
    video: '',
    prise: 'classique',
    variante: [],
    directionChuteTori: 'laterale',
    directionAR: undefined,
    directionLaterale: 'gauche',
    deplacementUke: 'lateral',
  },

  'HaraiMakikomi': {
    image: 'https://gimnasiosamurai.es/apkjudo/images/librodejudo/YOKOSUTEMIWAZA/MAKIKOMI/HARAIMAKIKOMI.jpg',
    etapes: [
      'Saisir le revers et la manche de Uke',
      'Créer un déséquilibre latéral gauche',
      'Enrouler Uke avec le bras externe',
      'Se laisser tomber sur le côté en entraînant Uke',
      'Projeter Uke latéralement et contrôler la chute'
    ],
    video: 'https://youtu.be/VBaHzKaCXss?si=eLrNRzhxR6n5luYK',
    prise: 'classique',
    variante: [],
    directionChuteTori: 'laterale',
    directionAR: undefined,
    directionLaterale: 'gauche',
    deplacementUke: 'lateral',
  },

  'HaneMakikomi': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Hane-makikomi.jpg/250px-Hane-makikomi.jpg',
    etapes: [
      'Saisir le revers et la manche de Uke',
      'Créer un déséquilibre latéral droite',
      'Enrouler Uke avec le bras externe',
      'Se laisser tomber sur le côté en entraînant Uke',
      'Projeter Uke latéralement et contrôler la chute'
    ],
    video: 'https://youtu.be/6CRBGLGz9j8?si=YxV4w7_9yg7voj_Z',
    prise: 'classique',
    variante: [],
    directionChuteTori: 'laterale',
    directionAR: undefined,
    directionLaterale: 'droite',
    deplacementUke: 'lateral',
  },

  'HikkomiGaeshi': {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqAVXllLzfh9ErE0UZtbuMcbrzbBii4WM9eA&s',
    etapes: [
      'Saisir la ceinture ou le revers de Uke',
      'Créer un déséquilibre vers l’arrière',
      'S’incliner en arrière en tirant Uke',
      'Projeter Uke en arrière en utilisant le corps comme levier',
      'Accompagner la chute et maintenir le contrôle'
    ],
    video: 'https://youtu.be/92zUYWBp5N8?si=QOPeIlQP6RW64Lkl',
    prise: undefined,
    variante: ['ObiToriGaeshi'],
    directionChuteTori: 'arriere',
    directionAR: 'arriere',
    directionLaterale: undefined,
    deplacementUke: 'recule',
  },

  'TawaraGaeshi': {
    image: 'https://www.judo-encyclopedia.com/wp-content/uploads/2022/07/4.-Taware-geashi.jpg',
    etapes: [
      'Saisir Uke par la ceinture ou la jambe',
      'Créer un déséquilibre vers l’arrière',
      'S’incliner en arrière et guider Uke dans la rotation',
      'Projeter Uke en arrière au sol',
      'Accompagner la chute et contrôler Uke'
    ],
    video: 'https://youtu.be/TmTWgrmViZc?si=2diKCKmrTuVLmH5M',
    prise: undefined,
    variante: [],
    directionChuteTori: 'arriere',
    directionAR: 'arriere',
    directionLaterale: undefined,
    deplacementUke: 'recule',
  },

  'DakiWakare': {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCyYAHliFp7P5UfI6i0UUMrEL-CyBb53bKg&s',
    etapes: [
      'Saisir Uke par le corps ou la ceinture',
      'Créer un déséquilibre vers l’arrière',
      'S’écarter et basculer Uke en arrière',
      'Projeter Uke au sol en utilisant le corps comme levier',
      'Accompagner la chute et contrôler'
    ],
    video: 'https://youtu.be/Hr0cOMGBDYo?si=qH1DqkRoTDrKMI6h',
    prise: undefined,
    variante: [],
    directionChuteTori: 'arriere',
    directionAR: 'arriere',
    directionLaterale: undefined,
    deplacementUke: 'recule',
  },
};

export type TechniqueCategory = 'Osaekomi' | 'Shime' | 'Kansetsu' | 'Ashi' | 'Te' | 'Koshi' | 'Sutemi';

export interface TechniqueEntry {
    name: string;
    category: TechniqueCategory;
    data: any;
}

export const TECHNIQUES: TechniqueEntry[] = [];

function pushMap(map: {[name:string]: any}, category: TechniqueCategory) {
    Object.keys(map).forEach(name => {
        TECHNIQUES.push({ name, category, data: map[name] });
    });
}

pushMap(osaekomiWaza, 'Osaekomi');
pushMap(shimeWaza, 'Shime');
pushMap(kansetsuWaza, 'Kansetsu');
pushMap(ashiWaza, 'Ashi');
pushMap(teWaza, 'Te');
pushMap(koshiWaza, 'Koshi');
pushMap(sutemiWaza, 'Sutemi');

export default TECHNIQUES;