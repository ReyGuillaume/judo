export type Judo = NeWaza | TachiWaza;

interface ITechnique {
    image: string;
    prise: 'classique' | 'croisee' | 'doubleRevers' | 'sansGi' | undefined;
    etapes: Array<string>;
    video: string;
    variante?: Array<string>;
}


export type NeWaza = OsaekomiWaza | ShimeWaza | KansetsuWaza;

export interface OsaekomiWaza extends ITechnique {
    positionTori: 'dessus' | 'derriere' | 'cote'; 
}

export interface ShimeWaza extends ITechnique {
    positionUke: 'dos' | 'cote' | 'ventre' | 'debout' | 'assis';
    positionTori: 'dessus' | 'cote' | 'derriere' ;
    type: 'sanguin' | 'respiratoire';
    membresUtilises: ('bras' | 'jambe' | 'revers')[];
    directionPression: 'laterale' | 'arriere' | 'circulaire';
}

export interface KansetsuWaza extends ITechnique {
    positionUke: 'dos' | 'cote' | 'ventre' | 'assis' | 'debout';
    positionTori: 'dessus' | 'cote' | 'derriere';
    articulation: 'coude' | 'epaule' | 'poignet';
    typeLevier: 'hyperextension' | 'torsion' | 'compression';
}

export type TachiWaza = AshiWaza | TeWaza | KoshiWaza | SutemiWaza;

export interface ITachiWaza extends ITechnique {
    directionAR: 'avant' | 'arriere' | undefined;
    directionLaterale: 'gauche' | 'droite' | undefined;
    deplacementUke: 'statique' | 'avance' | 'recule' | 'lateral';
}

export interface AshiWaza extends ITachiWaza {
    action: 'balayage' | 'fauchage' | 'blocage';
}
export interface TeWaza extends ITachiWaza {
    brasDominant: 'gauche' | 'droite';
    tractionPrincipale: 'avant' | 'haut' | 'circulaire';
}
export interface KoshiWaza extends ITachiWaza {
    contactHanche: 'frontal' | 'lateral';
}
export interface SutemiWaza extends ITachiWaza {
    directionChuteTori: 'arriere' | 'laterale';
}
