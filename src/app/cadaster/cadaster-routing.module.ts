import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadasterPage } from './cadaster.page';

const routes: Routes = [
  {
    path: '',
    component: CadasterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadasterPageRoutingModule {}
