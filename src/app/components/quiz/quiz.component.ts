import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TechniqueService } from '../../services/technique.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  all: any[] = [];
  question: any | null = null;
  options: any[] = [];
  result: 'correct' | 'incorrect' | null = null;
  answered: boolean = false;
  correctAnswer: string = '';
  score: number = 0;
  totalQuestions: number = 0;
  hintsRevealed: number = 0;
  maxHints: number = 3;
  Math = Math; // Expose Math to template
  imageZoom: string | null = null;

  constructor(private svc: TechniqueService) {}

  ngOnInit(): void {
    this.all = this.svc.getAll();
    this.next();
  }

  next() {
    this.result = null;
    this.answered = false;
    this.hintsRevealed = 1; // Start with 1 hint revealed
    const idx = Math.floor(Math.random() * this.all.length);
    this.question = this.all[idx];
    this.correctAnswer = this.question.name;
    
    const opts = new Set<string>([this.question.name]);
    while (opts.size < 6 && opts.size < this.all.length) {
      opts.add(this.all[Math.floor(Math.random() * this.all.length)].name);
    }
    this.options = Array.from(opts).sort(() => Math.random() - 0.5).map(n => this.svc.getByName(n));
  }

  answer(name: string) {
    if (!this.question || this.answered) return;
    
    this.answered = true;
    this.totalQuestions++;
    
    if (name === this.question.name) {
      this.result = 'correct';
      this.score++;
    } else {
      this.result = 'incorrect';
    }
  }

  revealHint() {
    if (this.hintsRevealed < this.maxHints) {
      this.hintsRevealed++;
    }
  }

  getHintProperties(): Array<{label: string, value: any}> {
    if (!this.question) return [];
    
    const props: Array<{label: string, value: any}> = [
      { label: 'Catégorie', value: this.question.category }
    ];

    const data = this.question.data;
    
    // Add category-specific properties
    if (this.question.category === 'Osaekomi') {
      if (data.positionTori) props.push({ label: 'Position Tori', value: data.positionTori });
    } else if (this.question.category === 'Shime') {
      if (data.type) props.push({ label: 'Type', value: data.type });
      if (data.positionUke) props.push({ label: 'Position Uke', value: data.positionUke });
      if (data.directionPression) props.push({ label: 'Direction pression', value: data.directionPression });
    } else if (this.question.category === 'Kansetsu') {
      if (data.articulation) props.push({ label: 'Articulation', value: data.articulation });
      if (data.typeLevier) props.push({ label: 'Type de levier', value: data.typeLevier });
    } else if (['Ashi', 'Te', 'Koshi', 'Sutemi'].includes(this.question.category)) {
      if (data.directionAR) props.push({ label: 'Direction A/R', value: data.directionAR });
      if (data.directionLaterale) props.push({ label: 'Direction latérale', value: data.directionLaterale });
      
      if (this.question.category === 'Ashi' && data.action) {
        props.push({ label: 'Action', value: data.action });
      }
      if (this.question.category === 'Te' && data.brasDominant) {
        props.push({ label: 'Bras dominant', value: data.brasDominant });
      }
      if (this.question.category === 'Koshi' && data.contactHanche) {
        props.push({ label: 'Contact hanche', value: data.contactHanche });
      }
      if (this.question.category === 'Sutemi' && data.directionChuteTori) {
        props.push({ label: 'Direction chute Tori', value: data.directionChuteTori });
      }
    }

    return props;
  }

  getScorePercentage(): number {
    if (this.totalQuestions === 0) return 0;
    return Math.round((this.score / this.totalQuestions) * 100);
  }

  resetScore() {
    this.score = 0;
    this.totalQuestions = 0;
    this.next();
  }

  openImageZoom(imageUrl: string) {
    this.imageZoom = imageUrl;
  }

  closeImageZoom() {
    this.imageZoom = null;
  }
}
