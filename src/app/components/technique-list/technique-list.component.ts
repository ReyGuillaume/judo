import { Component, OnInit } from '@angular/core';
import { TechniqueService } from '../../services/technique.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import env from '../../../env';

@Component({
  selector: 'app-technique-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './technique-list.component.html',
  styleUrls: ['./technique-list.component.scss']
})
export class TechniqueListComponent implements OnInit {
  techniques: any[] = [];
  filterText = '';

  imageUrl = env.imageUrl;
  
  constructor(private svc: TechniqueService) {}

  ngOnInit(): void {
    this.techniques = this.svc.getAll();
  }

  filtered() {
    const txt = this.filterText.toLowerCase();
    return this.techniques.filter(t => t.name.toLowerCase().includes(txt) || t.category.toLowerCase().includes(txt));
  }
}
