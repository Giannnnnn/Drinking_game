import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadasterPageRoutingModule } from './cadaster-routing.module';

import { CadasterPage } from './cadaster.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadasterPageRoutingModule
  ],
  declarations: [CadasterPage]
})
export class CadasterPageModule {}
