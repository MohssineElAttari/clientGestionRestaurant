import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoissonComponent } from './boisson.component';
import { EntreeComponent } from './entree.component';
import { DessertComponent } from './dessert.component';

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
      title: 'Repas'
    },
    children: [
      {
        path: '',
        redirectTo: 'boissons'
      },
      {
        path: 'boissons',
        component: BoissonComponent,
        data: {
          title: 'boissons'
        },
      }, {
        path: 'entree',
        component: EntreeComponent,
        data: {
          title: 'entrees'
        },
      },{
        path: 'dessert',
        component: DessertComponent,
        data: {
          title: 'dessert'
        },
      },
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
export class RepasRoutingModule { }
