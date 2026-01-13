import {OsaekomiWaza, ShimeWaza, TeWaza, AshiWaza, KansetsuWaza, KoshiWaza, SutemiWaza} from './types';

export const osaekomiWaza: { [name: string]: OsaekomiWaza } = {
    'KesaGatame': {
        image: 'NeHonGesaGatame.gif',
        positionTori: 'dessus',
        variante: ['KuzureKesaGatame']
    },
    'KuzureKesaGatame': {
        image: 'NeHonGesaGatame.gif',
        positionTori: 'dessus',
    },
    'TateShihoGatame': {
        image: 'NeTateShihoGatame.gif',
        positionTori: 'dessus',
    },
    'UshiroKesaGatame': {
        image: 'NeUshiroGesaGatame.gif',
        positionTori: 'derriere',
    },
    'KamiShihoGatame': {
        image: 'NeKamiShihoGatame.gif',
        positionTori: 'dessus',
    },
    'KuzureKamiShihoGatame': {
        image: 'NeKamiShihoGatame.gif',
        positionTori: 'dessus',
    },
    'YokoShihoGatame': {
        image: 'NeYokoShihoGatame.gif',
        positionTori: 'cote',
        variante: ['KuzureYokoShihoGatame']
    },
    'KuzureYokoShihoGatame': {
        image: 'NeYokoShihoGatame.gif',
        positionTori: 'cote',
    },
    'UkiGatame': {
        image: 'NeHonGesaGatame.gif',
        positionTori: 'dessus',
    },
    'KataGatame': {
        image: 'NeKataGatame.gif',
        positionTori: 'cote',
    },
    'KuzureKataGatame': {
        image: 'NeKataGatame.gif',
        positionTori: 'cote',
    }
};

export const shimeWaza: {[name: string]: ShimeWaza} = {
    'HadakaJime': {
        image: 'NeHadakaJime.gif',
        positionUke: 'dos',
        positionTori: 'dessus',
        variante: ['KataHaJime']
    },
    'JujiJime': {
        image: 'NeGyakuJujiJime.gif',
        positionUke: 'dos',
        positionTori: 'dessus',
    },
    'OkuriEriJime': {
        image: 'NeOkuriEriJime.gif',
        positionUke: 'debout',
        positionTori: 'derriere',
    },
}

export const kansetsuWaza: {[name: string]: KansetsuWaza} = {
    'JujiGatame': {
        image: 'NeJujiGatame.gif',
        positionUke: 'dos',
        positionTori: 'dessus',
    },
    'UdeGatame': {
        image: 'NeHaraGatame.gif',
        positionUke: 'cote',
        positionTori: 'cote',
        variante: ['UdeHishigiHizaGatame']
    },
    'HizaGatame': {
        image: 'NeHizaGatame.gif',
        positionUke: 'assis',
        positionTori: 'dessus',
    },
}

export const ashiWaza: {[name: string]: AshiWaza} = {
    'DeAshiBarai': {
        image: 'TachiDeAshiBarai.gif',
        directionAR: 'avant',
        directionLaterale: 'droite',
        deplacementUke: 'avance'
    },
    'OkuriAshiBarai': {
        image: 'TachiOkuriAshiBarai.gif',
        directionAR: 'avant',
        directionLaterale: 'gauche',
        deplacementUke: 'avance'
    },
}


export const teWaza: {[name: string]: TeWaza} = {
    'IpponSeoiNage': {
        image: 'Seoi/Normal/TachiIpponSeoiNage.gif',
        directionAR: 'avant',
        directionLaterale: undefined,
        deplacementUke: 'avance'
    },
    'MoroteSeoiNage': {
        image: 'Seoi/Normal/TachiMoroteSeoiNage.gif',
        directionAR: 'avant',
        directionLaterale: undefined,
        deplacementUke: 'avance'
    },
}


export const koshiWaza: {[name: string]: KoshiWaza} = {
    'OGoshi': {
        image: 'TachiOGoshi.gif',
        directionAR: 'avant',
        directionLaterale: undefined,
        deplacementUke: 'avance'
    },
    'HaraiGoshi': {
        image: 'TachiHaraiGoshi.gif',
        directionAR: 'avant',
        directionLaterale: 'droite',
        deplacementUke: 'avance'
    },
}

export const sutemiWaza: {[name: string]: SutemiWaza} = {
    'TomoeNage': {
        image: 'TachiTomoeNage.gif',
        directionAR: 'arriere',
        directionLaterale: undefined,
        deplacementUke: 'recule'
    },
    'YokoSutemi': {
        image: 'TachiYokoOtoshi.gif',
        directionAR: undefined,
        directionLaterale: 'gauche',
        deplacementUke: 'avance'
    },
}

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