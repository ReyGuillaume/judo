import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TechniqueService } from '../../services/technique.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-technique-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './technique-detail.component.html',
  styleUrls: ['./technique-detail.component.scss']
})
export class TechniqueDetailComponent implements OnInit {
  technique: any | undefined;
  variants: any[] = [];
  related: any[] = [];

  constructor(private route: ActivatedRoute, private svc: TechniqueService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(pm => {
      const name = pm.get('name') || '';
      this.technique = this.svc.getByName(name);
      if (this.technique) {
        this.variants = this.svc.getVariants(this.technique.name);
        this.related = this.svc.getRelatedByVariant(this.technique.name);
      }
    });
  }
}
