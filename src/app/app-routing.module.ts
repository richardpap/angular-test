import { DetailsComponent } from './components/details/details.component';
import { ListComponent } from './components/list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
      path: 'movies',
      component: ListComponent
  },
  {
      path: 'details/:id',
      component: DetailsComponent
  },
  {
      path: '',
      pathMatch: 'full',
      redirectTo: '/movies'
  }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }


