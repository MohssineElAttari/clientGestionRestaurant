import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientsComponent } from './clients.component';
import { ServeurComponent } from './serveur.component';
import { CuisinirComponent } from './cuisinir.component';
import { LivreurComponent } from './livreur.component';
// import { FormsComponent } from './forms.component';
// import { SwitchesComponent } from './switches.component';
// import { TablesComponent } from './tables.component';
// import { TabsComponent } from './tabs.component';
// import { CarouselsComponent } from './carousels.component';
// import { CollapsesComponent } from './collapses.component';
// import { PaginationsComponent } from './paginations.component';
// import {PopoversComponent} from './popovers.component';
// import {ProgressComponent} from './progress.component';
// import {TooltipsComponent} from './tooltips.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Personne'
    },
    children: [
      {
        path: '',
        redirectTo: 'clients'
      },
      {
        path: 'clients',
        component: ClientsComponent,
        data: {
          title: 'clients'
        },
      },
        {
          path: 'serveurs',
          component: ServeurComponent,
          data: {
            title: 'serveurs'
          },
        },{
          path: 'cuisinirs',
          component: CuisinirComponent,
          data: {
            title: 'cuisinir'
          },
        },{
          path: 'livreurs',
          component: LivreurComponent,
          data: {
            title: 'livreurs'
          },
        }
      // },
      // {
      //   path: 'forms',
      //   component: FormsComponent,
      //   data: {
      //     title: 'Forms'
      //   }
      // },
      // {
      //   path: 'switches',
      //   component: SwitchesComponent,
      //   data: {
      //     title: 'Switches'
      //   }
      // },
      // {
      //   path: 'tables',
      //   component: TablesComponent,
      //   data: {
      //     title: 'Tables'
      //   }
      // },
      // {
      //   path: 'tabs',
      //   component: TabsComponent,
      //   data: {
      //     title: 'Tabs'
      //   }
      // },
      // {
      //   path: 'carousels',
      //   component: CarouselsComponent,
      //   data: {
      //     title: 'Carousels'
      //   }
      // },
      // {
      //   path: 'collapses',
      //   component: CollapsesComponent,
      //   data: {
      //     title: 'Collapses'
      //   }
      // },
      // {
      //   path: 'paginations',
      //   component: PaginationsComponent,
      //   data: {
      //     title: 'Pagination'
      //   }
      // },
      // {
      //   path: 'popovers',
      //   component: PopoversComponent,
      //   data: {
      //     title: 'Popover'
      //   }
      // },
      // {
      //   path: 'progress',
      //   component: ProgressComponent,
      //   data: {
      //     title: 'Progress'
      //   }
      // },
      // {
      //   path: 'tooltips',
      //   component: TooltipsComponent,
      //   data: {
      //     title: 'Tooltips'
      //   }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonneRoutingModule {}
