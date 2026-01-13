export type Judo = NeWaza | TachiWaza;

export type NeWaza = OsaekomiWaza | ShimeWaza | KansetsuWaza;

export interface OsaekomiWaza {
    positionTori: 'dessus' | 'derriere' | 'cote'; 
    variante?: Array<string>;
}

export interface ShimeWaza {
    positionUke: 'dos' | 'cote' | 'ventre' | 'debout' | 'assis';
    positionTori: 'dessus' | 'cote' | 'derriere' ;
    variante?: Array<string>;
}

export interface KansetsuWaza {
    positionUke: 'dos' | 'cote' | 'ventre' | 'assis' | 'debout';
    positionTori: 'dessus' | 'cote' | 'derriere';
    variante?: Array<string>;
}

export type TachiWaza = AshiWaza | TeWaza | KoshiWaza | SutemiWaza;

export interface ITachiWaza {
    directionAR: 'avant' | 'arriere' | undefined;
    directionLaterale: 'gauche' | 'droite' | undefined;
    deplacementUke: 'statique' | 'avance' | 'recule' | 'lateral';
}

export interface AshiWaza extends ITachiWaza {}
export interface TeWaza extends ITachiWaza {}
export interface KoshiWaza extends ITachiWaza {}
export interface SutemiWaza extends ITachiWaza {}
