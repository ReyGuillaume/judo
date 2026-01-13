import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  @Output() change = new EventEmitter<any>();

  // main selector: NeWaza / TachiWaza
  mainType: string = '';
  category: string = '';

  // common options
  categories = ['','Osaekomi','Shime','Kansetsu','Ashi','Te','Koshi','Sutemi'];
  directionsAR = ['','avant','arriere'];
  directionsLat = ['','gauche','droite'];
  deplacements = ['','statique','avance','recule','lateral'];

  // NeWaza options
  positionsUke = ['','dos','cote','ventre','debout','assis'];
  positionsTori = ['','dessus','cote','derriere'];
  shimeTypes = ['','sanguin','respiratoire'];
  membres = ['bras','jambe','revers'];
  directionsPression = ['','laterale','arriere','circulaire'];

  // Kansetsu
  articulations = ['','coude','epaule','poignet'];
  typeLevier = ['','hyperextension','torsion','compression'];

  // Ashi
  actionsAshi = ['','balayage','fauchage','blocage'];

  // Te
  bras = ['','gauche','droite'];
  traction = ['','avant','haut','circulaire'];

  // Koshi
  contactHanche = ['','frontal','lateral'];

  // Sutemi
  dirChute = ['','arriere','laterale'];

  // Selected filters state
  filters: any = {};

  // computed subcategories based on mainType
  get subcategories() {
    if (this.mainType === 'NeWaza') return ['','Osaekomi','Shime','Kansetsu'];
    if (this.mainType === 'TachiWaza') return ['','Ashi','Te','Koshi','Sutemi'];
    return [''];
  }

  toggleMembre(m: string) {
    this.filters.membresUtilises = this.filters.membresUtilises || [];
    const idx = this.filters.membresUtilises.indexOf(m);
    if (idx === -1) this.filters.membresUtilises.push(m);
    else this.filters.membresUtilises.splice(idx,1);
    this.emitChange();
  }

  // emit current filters to parent immediately
  emitChange() {
    const cat = this.category || '';
    const out = { mainType: this.mainType, category: cat, ...this.filters };
    this.change.emit(out);
  }

  reset() {
    this.mainType = '';
    this.category = '';
    this.filters = {};
    this.change.emit({});
  }
}
