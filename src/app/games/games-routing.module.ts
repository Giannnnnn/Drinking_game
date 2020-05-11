import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesPage } from './games.page';
import { SuecaComponent } from './sueca/sueca.component';

const routes: Routes = [
  {
    path: '',
    component: GamesPage
  },
  {
    path: 'sueca',
    component: SuecaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesPageRoutingModule {}
