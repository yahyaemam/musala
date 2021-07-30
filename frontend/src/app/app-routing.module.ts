import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListGetwaysComponent } from './list-getways/list-getways.component';
import { CreateGetwayComponent } from './create-getway/create-getway.component';

const routes: Routes = [
  { path: 'getways', component: ListGetwaysComponent },
  { path: 'add-getway', component:   CreateGetwayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
