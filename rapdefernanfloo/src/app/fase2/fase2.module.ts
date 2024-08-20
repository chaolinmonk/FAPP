import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Fase2PageRoutingModule } from './fase2-routing.module';

import { Fase2Page } from './fase2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Fase2PageRoutingModule
  ],
  declarations: [Fase2Page]
})
export class Fase2PageModule {}
