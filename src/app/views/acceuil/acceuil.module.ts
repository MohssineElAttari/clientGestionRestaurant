import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcceuilRoutingModule } from './acceuil-routing.module';
import { AcceuilComponent } from './acceuil.component';
import { ChartsModule } from 'ng2-charts';
import { ReactiveFormsModule } from '@angular/forms';
import { CommandeService } from '../../service/commande.service';

@NgModule({
  declarations: [AcceuilComponent],
  imports: [
    CommonModule,
    AcceuilRoutingModule,
    ChartsModule,
    ReactiveFormsModule
  ],
  providers:[CommandeService,]
})
export class AcceuilModule { }
