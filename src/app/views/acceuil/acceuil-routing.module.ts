import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil.component';

const routes: Routes = [{
  path: '',
  component: AcceuilComponent,
  data: {
    title: 'Acceuil'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcceuilRoutingModule { }
