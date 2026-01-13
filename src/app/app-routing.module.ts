import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechniqueListComponent } from './components/technique-list/technique-list.component';
import { TechniqueDetailComponent } from './components/technique-detail/technique-detail.component';
import { QuizComponent } from './components/quiz/quiz.component';

const routes: Routes = [
  { path: '', component: TechniqueListComponent },
  { path: 'technique/:name', component: TechniqueDetailComponent },
  { path: 'quiz', component: QuizComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
