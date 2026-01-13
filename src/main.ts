import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { TechniqueListComponent } from './app/components/technique-list/technique-list.component';
import { TechniqueDetailComponent } from './app/components/technique-detail/technique-detail.component';
import { QuizComponent } from './app/components/quiz/quiz.component';

const routes: Routes = [
  { path: '', component: TechniqueListComponent },
  { path: 'technique/:name', component: TechniqueDetailComponent },
  { path: 'quiz', component: QuizComponent },
  { path: '**', redirectTo: '' }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));
