// Angular
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { ClientsComponent } from './clients.component';

// Forms Component

// // Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';

// Carousel Component
import { CarouselModule } from 'ngx-bootstrap/carousel';

// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Pagination Component
import { PaginationModule } from 'ngx-bootstrap/pagination';

// Popover Component
import { PopoverModule } from 'ngx-bootstrap/popover';

// Progress Component
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

// Tooltip Component
import { TooltipModule } from 'ngx-bootstrap/tooltip';



// // Components Routing
import { PersonneRoutingModule } from './personne-routing.module';
import { ClientService } from '../../service/client.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ServeurService } from '../../service/serveur.service';
import { ServeurComponent } from './serveur.component';
import { ValidationService } from '../../service/validation.service';
import { CuisinirService } from '../../service/cuisinir.service';
import { CuisinirComponent } from './cuisinir.component';
import { LivreurService } from '../../service/livreur.service';
import { LivreurComponent } from './livreur.component';


@NgModule({
  imports: [
    CommonModule,
    PersonneRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    BsDropdownModule.forRoot(),
    TabsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [
    ClientsComponent,ServeurComponent,CuisinirComponent,LivreurComponent,
  ],
  providers: [ClientService,ServeurService,CuisinirService,ValidationService,LivreurService,]
})

export class PersonneModule { }
