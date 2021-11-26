import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImgmodalPageRoutingModule } from './imgmodal-routing.module';

import { ImgmodalPage } from './imgmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImgmodalPageRoutingModule
  ],
  declarations: [ImgmodalPage]
})
export class ImgmodalPageModule {}
