import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuessComponent } from './Guess-Number/components/guess.component';
import { TodoComponent } from './Todo-List/components/todo.component';

const routes: Routes = [
  { path: "guess", component: GuessComponent },
  { path: "todo", component: TodoComponent },
  { path: '', redirectTo: '/todo', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
