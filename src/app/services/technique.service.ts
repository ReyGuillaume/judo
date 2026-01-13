import { Injectable } from '@angular/core';
import { TECHNIQUES, TechniqueEntry } from '../../typing/data';

@Injectable({ providedIn: 'root' })
export class TechniqueService {
  private techniques: TechniqueEntry[] = TECHNIQUES;

  constructor() {}

  getAll(): TechniqueEntry[] {
    return this.techniques.slice();
  }

  getByName(name: string): TechniqueEntry | undefined {
    return this.techniques.find(t => t.name === name);
  }

  getVariants(name: string): TechniqueEntry[] {
    const t = this.getByName(name);
    if (!t) return [];
    const variantes: string[] = (t.data && t.data.variante) || [];
    return variantes.map(v => this.getByName(v)).filter(Boolean) as TechniqueEntry[];
  }

  getRelatedByVariant(name: string): TechniqueEntry[] {
    return this.techniques.filter(t => (t.data && Array.isArray(t.data.variante) && t.data.variante.includes(name)));
  }
}
