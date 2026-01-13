import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TechniqueService } from '../../services/technique.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FiltersComponent } from '../filters/filters.component';

@Component({
  selector: 'app-technique-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, FiltersComponent],
  templateUrl: './technique-list.component.html',
  styleUrls: ['./technique-list.component.scss']
})
export class TechniqueListComponent implements OnInit {
  techniques: any[] = [];
  filterText = '';
  advancedFilters: any = {};

  constructor(private svc: TechniqueService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.techniques = this.svc.getAll();
  }

  applyFilters(f: any) {
    this.advancedFilters = { ...(f || {}) };
    this.cdr.detectChanges();
  }

  filtered() {
    const txt = this.filterText.toLowerCase();
    let list = this.techniques.filter(t => t.name.toLowerCase().includes(txt) || t.category.toLowerCase().includes(txt));
    const f = this.advancedFilters || {};
    
    if (!f || Object.keys(f).length === 0) return list;

    // filter by mainType (NeWaza vs TachiWaza)
    if (f.mainType) {
      const neWazaCategories = ['Osaekomi', 'Shime', 'Kansetsu'];
      const tachiWazaCategories = ['Ashi', 'Te', 'Koshi', 'Sutemi'];
      
      if (f.mainType === 'NeWaza') {
        list = list.filter(t => neWazaCategories.includes(t.category));
      } else if (f.mainType === 'TachiWaza') {
        list = list.filter(t => tachiWazaCategories.includes(t.category));
      }
    }

    // filter by category
    if (f.category) {
      list = list.filter(t => t.category === f.category);
    }

    // generic tachi/ne waza fields
    list = list.filter(t => {
      const data = t.data || {};
      // iterate over filter keys and ensure matching
      for (const k of Object.keys(f)) {
        if (k === 'category' || k === 'mainType') continue;
        const val = f[k];
        if (!val) continue; // skip empty
        // special handling arrays (membresUtilises)
        if (Array.isArray(val) && val.length) {
          const have = data[k] || [];
          // require that all selected are present
          for (const sel of val) {
            if (!have.includes(sel)) return false;
          }
          continue;
        }
        // otherwise simple equality
        if (typeof val === 'string') {
          if (val === '') continue;
          if ((data[k] === undefined) || (data[k] != val)) return false;
        }
      }
      return true;
    });

    return list;
  }
}
