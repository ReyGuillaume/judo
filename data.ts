const osaekomiWaza: { [name: string]: OsaekomiWaza } = {
    'KesaGatame': {
        positionTori: 'dessus',
        variante: ['KuzureKesaGatame']
    },
    'KuzureKesaGatame': {
        positionTori: 'dessus',
    },
    'TateShihoGatame': {
        positionTori: 'dessus',
    },
    'UshiroKesaGatame': {
        positionTori: 'derriere',
    },
    'KamiShihoGatame': {
        positionTori: 'dessus',
    },
    'KuzureKamiShihoGatame': {
        positionTori: 'dessus',
    },
    'YokoShihoGatame': {
        positionTori: 'cote',
        variante: ['KuzureYokoShihoGatame']
    },
    'KuzureYokoShihoGatame': {
        positionTori: 'cote',
    },
    'UkiGatame': {
        positionTori: 'dessus',
    },
    'KataGatame': {
        positionTori: 'cote',
    },
    'KuzureKataGatame': {
        positionTori: 'cote',
    }
};

const shimeWaza: {[name: string]: ShimeWaza} = {
    'HadakaJime': {
        positionUke: 'dos',
        positionTori: 'dessus',
        variante: ['KataHaJime']
    },
    'JujiJime': {
        positionUke: 'dos',
        positionTori: 'dessus',
    },
    'OkuriEriJime': {
        positionUke: 'debout',
        positionTori: 'derriere',
    },
}

const kansetsuWaza: {[name: string]: KansetsuWaza} = {
    'JujiGatame': {
        positionUke: 'dos',
        positionTori: 'dessus',
    },
    'UdeGatame': {
        positionUke: 'cote',
        positionTori: 'cote',
        variante: ['UdeHishigiHizaGatame']
    },
    'HizaGatame': {
        positionUke: 'assis',
        positionTori: 'dessus',
    },
}

const ashiWaza: {[name: string]: AshiWaza} = {
    'DeAshiBarai': {
        directionAR: 'avant',
        directionLaterale: 'droite',
        deplacementUke: 'avance'
    },
    'OkuriAshiBarai': {
        directionAR: 'avant',
        directionLaterale: 'gauche',
        deplacementUke: 'avance'
    },
}


const teWaza: {[name: string]: TeWaza} = {
    'IpponSeoiNage': {
        directionAR: 'avant',
        directionLaterale: undefined,
        deplacementUke: 'avance'
    },
    'MoroteSeoiNage': {
        directionAR: 'avant',
        directionLaterale: undefined,
        deplacementUke: 'avance'
    },
}


const koshiWaza: {[name: string]: KoshiWaza} = {
    'OGoshi': {
        directionAR: 'avant',
        directionLaterale: undefined,
        deplacementUke: 'avance'
    },
    'HaraiGoshi': {
        directionAR: 'avant',
        directionLaterale: 'droite',
        deplacementUke: 'avance'
    },
}

const sutemiWaza: {[name: string]: SutemiWaza} = {
    'TomoeNage': {
        directionAR: 'arriere',
        directionLaterale: undefined,
        deplacementUke: 'recule'
    },
    'YokoSutemi': {
        directionAR: 'arriere',
        directionLaterale: 'gauche',
        deplacementUke: 'lateral'
    },
}