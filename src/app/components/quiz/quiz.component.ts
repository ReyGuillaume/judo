import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TechniqueService } from '../../services/technique.service';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  all: any[] = [];
  question: any | null = null;
  options: any[] = [];
  result: string | null = null;

  constructor(private svc: TechniqueService) {}

  ngOnInit(): void {
    this.all = this.svc.getAll();
    this.next();
  }

  next() {
    this.result = null;
    const idx = Math.floor(Math.random() * this.all.length);
    this.question = this.all[idx];
    const opts = new Set<string>([this.question.name]);
    while (opts.size < 4 && opts.size < this.all.length) {
      opts.add(this.all[Math.floor(Math.random() * this.all.length)].name);
    }
    this.options = Array.from(opts).sort(() => Math.random() - 0.5).map(n => this.svc.getByName(n));
  }

  answer(name: string) {
    if (!this.question) return;
    this.result = name === this.question.name ? 'Bonne réponse 🎉' : 'Faux — la bonne réponse était ' + this.question.name;
  }
}
